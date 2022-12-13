import {Component, Inject, Renderer2} from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import {AuthService} from "src/app/_services/auth.service";
import {AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {DialogData} from "../login-main.component";
import RegisterForm2Component from "../register-form2/register-form2.component";
import {StoryInput} from "../../../../stories/inputs/story-input.model";

@Component({
  selector: 'app-modal',
  templateUrl: './replace-pass-form2.component.html',
  styleUrls: ['./replace-pass-form2.component.css']
})
export class ReplacePassForm2Component {
  replacePassForm: FormGroup;
  status = {
    isRepSuccess: false,
    isRepFailed: false,
    submitted: false,
    repErrorMessage: {},
    apiResponse: { message: '', error: false },
    errorFieldSubmitted: {},
    closeResult: '',
  };

  //isSignUpFailed = false;
  //submitted = false;
  //errorMessage = '';
  empList: Array<String> = [];
  //apiResponse = { message: '', error: false };
  //errorFieldSubmitted: any = {};
  closeResult = '';

  storyInputsInOrder: StoryInput[]  = [
    {/*...mStoryInput.Default.args?.['storyInput'],*/ id: '1', title: 'oldPassword', state: 'INITIAL PASSWORD', icon: './assets/images/LockIcon2ldpi.png', type: 'password', placeholder: 'your_password' , hide: false },
    {/*...mStoryInput.Default.args?.['storyInput'],*/ id: '2', title: 'password', state: 'NEW PASSWORD', icon: './assets/images/LockIcon2ldpi.png', type: 'password', placeholder: 'your_password' , hide: false },
    {/*...mStoryInput.Default.args?.['storyInput'],*/ id: '3', title: 'confirmPassword', state: 'RE-ENTER NEW PASSWORD', icon: './assets/images/LockIcon2ldpi.png', type: 'password', placeholder: 'your_password' , hide: false },
  ];




  constructor(private authService: AuthService,
              private renderer: Renderer2,
              public dialogRef: MatDialogRef<ReplacePassForm2Component>,
              @Inject(MAT_DIALOG_DATA) public data: DialogData) {
    this.replacePassForm = new FormGroup({
      userName: new FormControl(data.username, Validators.required),
      oldPassword: new FormControl(data.password, Validators.minLength(1)),
      password: new FormControl('', Validators.compose([
        Validators.minLength(8),
        PasswordValidators.patternValidator(new RegExp("(?=.*[0-9])"), {requiresDigit: true}),
        PasswordValidators.patternValidator(new RegExp("(?=.*[A-Z])"), {requiresUppercase: true}),
        PasswordValidators.patternValidator(new RegExp("(?=.*[a-z])"), {requiresLowercase: true} ),
        PasswordValidators.patternValidator(new RegExp("(?=.*[$@^!%*?&])"), {requiresSpecialChars: true})
      ])),
      confirmPassword: new FormControl(null, [
        Validators.minLength(8),
        PasswordValidators.patternValidator(new RegExp("(?=.*[0-9])"), {requiresDigit: true}),
        PasswordValidators.patternValidator(new RegExp("(?=.*[A-Z])"), {requiresUppercase: true}),
        PasswordValidators.patternValidator(new RegExp("(?=.*[a-z])"), {requiresLowercase: true}),
        PasswordValidators.patternValidator(new RegExp("(?=.*[$@^!%*?&#><{}()+~])"), {requiresSpecialChars: true})
      ])
    });
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    if (this.status.isRepSuccess) {
      this.dialogRef.close({message: 'Replace Password Complete', data: this.data});
    }
    else {
      this.status.submitted = true;
      const { userName, oldPassword, password, confirmPassword } = this.replacePassForm.value;
      this.authService.replacePassForm(userName, oldPassword, password, confirmPassword).subscribe(
        data => {
          console.log(data);
          this.status.isRepSuccess = true;
          this.status.isRepFailed = false;
          this.status.errorFieldSubmitted = {};
          this.status.apiResponse.error = false;
          this.status.apiResponse.message = 'Successful registration';
          this.data.password = password;
        },
        error => {
          const errorResponse = JSON.parse(error.error);
          this.status.apiResponse.error = true;
          this.status.apiResponse.message = 'Replace password error';
          this.status.repErrorMessage = errorResponse;
          this.status.isRepFailed = true;
          if (errorResponse.error && errorResponse.message === 'VALIDATION_FAILED') {
            this.status.errorFieldSubmitted = errorResponse.data;
          }
        },
        () => {
          console.log('Replace Password closed');}
      );
    }
  }



  get userName(): AbstractControl {
    return this.replacePassForm.get('username')!;
  }

  get oldPassword(): AbstractControl {
    return this.replacePassForm.get('oldPassword')!;
  }

  get password(): AbstractControl {
    return this.replacePassForm.get('password')!;
  }

  get confirmPassword(): AbstractControl {
    return this.replacePassForm.get('confirmPassword')!;
  }

}

export class PasswordValidators {
  constructor() {
  }

  static patternValidator(regex: RegExp, error: ValidationErrors): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      if (!control.value) {
        // if the control value is empty return no error.
        return null;
      }

      // test the value of the control against the regexp supplied.
      const valid = regex.test(control.value);

      // if true, return no error, otherwise return the error object passed in the second parameter.
      return valid ? null : error;
    };
  }
}
