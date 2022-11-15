import {Component, Inject, Renderer2} from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import {AuthService} from "src/app/_services/auth.service";
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";
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
  isRepSuccess = false;
  isSignUpFailed = false;
  submitted = false;
  errorMessage = '';
  empList: Array<String> = [];
  apiResponse = { message: '', error: false };
  errorFieldSubmitted: any = {};
  closeResult = '';

  storyInputsInOrder: StoryInput[]  = [
    {/*...mStoryInput.Default.args?.['storyInput'],*/ id: '1', title: 'password', state: 'INITIAL PASSWORD', icon: './assets/images/LockIcon2ldpi.png', type: 'password', placeholder: 'your_password' , hide: false },
    {/*...mStoryInput.Default.args?.['storyInput'],*/ id: '2', title: 'password', state: 'NEW PASSWORD', icon: './assets/images/LockIcon2ldpi.png', type: 'password', placeholder: 'your_password' , hide: false },
    {/*...mStoryInput.Default.args?.['storyInput'],*/ id: '3', title: 'password', state: 'RE-ENTER NEW PASSWORD', icon: './assets/images/LockIcon2ldpi.png', type: 'password', placeholder: 'your_password' , hide: false },
  ];

  constructor(private authService: AuthService,
              private renderer: Renderer2,
              public dialogRef: MatDialogRef<RegisterForm2Component>,
              @Inject(MAT_DIALOG_DATA) public data: DialogData) {
    this.replacePassForm = new FormGroup({
      userName: new FormControl(null, Validators.required),
      oldPassword: new FormControl(null, Validators.minLength(1)),
      password: new FormControl('', Validators.minLength(3)),
      confirmPassword: new FormControl(null, Validators.minLength(3))
    });
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    if (this.isRepSuccess) {
      this.dialogRef.close('Registration Complete');
    }
    else {
      this.submitted = true;
      const { userName, oldPassword, password, confirmPassword } = this.replacePassForm.value;
      this.authService.replacePassForm(userName, oldPassword, password, confirmPassword).subscribe(
        data => {
          console.log(data);
          this.isRepSuccess = true;
          this.isSignUpFailed = false;
          this.errorFieldSubmitted = {};
          this.apiResponse.error = false;
          this.apiResponse.message = 'Successful registration';
        },
        error => {
          const errorResponse = JSON.parse(error.error);
          this.apiResponse.error = true;
          this.apiResponse.message = 'Registration error';
          this.errorMessage = error.error.message;
          this.isSignUpFailed = true;
          if (errorResponse.error && errorResponse.message === 'VALIDATION_FAILED') {
            this.errorFieldSubmitted = errorResponse.data;
          }
        }, () => {this.dialogRef.close('Replace Password closed');}
      );
    }
  }



  get userName(): AbstractControl {
    return this.replacePassForm.get('userName')!;
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
