import {Component, ElementRef, EventEmitter, Inject, OnInit, Output, Renderer2, ViewChild} from '@angular/core';
import { AuthService } from 'src/app/_services/auth.service';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import {StoryInput} from "src/stories/inputs/story-input.model";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {DialogData} from "../login-main.component";
import {PasswordValidators} from "../replace-pass-form2/replace-pass-form2.component";





@Component({
  selector: 'register-form2',
  templateUrl: './register-form2.component.html',
  styleUrls: ['./register-form2.component.css']
})
export default class RegisterForm2Component implements OnInit {
  registerForm: FormGroup;
  isRegSuccess = false;
  isRegFailed = false;
  submitted = false;
  regErrorMessage: any;
  empList: Array<String> = [];
  apiResponse = { message: '', error: false };
  @ViewChild('form', { static: false }) form?: ElementRef;
  errorFieldSubmitted: any = {};
  closeResult = '';

  storyInputsInOrder: StoryInput[]  = [
    {/*...mStoryInput.Default.args?.['storyInput'],*/ id: '2', title: 'username', state: 'USER NAME', icon: './assets/images/User2ldpi.png', type: 'text', placeholder: 'Ex.Saul Ramirez', hide: false  },
    {/*...mStoryInput.Default.args?.['storyInput'],*/ id: '3', title: 'password', state: 'PASSWORD', icon: './assets/images/LockIcon2ldpi.png', type: 'password', placeholder: 'your_password' , hide: true },
    {/*...mStoryInput.Default.args?.['storyInput'],*/ id: '5', title: 'phone', state: 'PHONE NUMBER FOR AUTHENTICATION', icon: './assets/images/Phone3ldpi.png', type: 'phone', placeholder: 'Ex: +972547762084', hide: false  },
    {/*...mStoryInput.Default.args?.['storyInput'],*/ id: '4', title: 'email', state: 'EMAIL', icon: './assets/images/AtSign3ldpi.png', type: 'email', placeholder: 'Ex: abc@example.com', hide: false   },

  ];

  constructor(private authService: AuthService,
              private renderer: Renderer2,
              public dialogRef: MatDialogRef<RegisterForm2Component>,
              @Inject(MAT_DIALOG_DATA) public data: DialogData) {
    this.registerForm = new FormGroup({
      username: new FormControl(data.username.toString(), Validators.minLength(2)),
      password: new FormControl(data.password.toString(), Validators.minLength(2)),
      email: new FormControl(data.username.toString() + '@domain.com', Validators.email),
      phone: new FormControl('123123131321', PasswordValidators.patternValidator(new RegExp("(?=.*[0-9 ]{8})"), {requiresPhoneChars: true}))
    });/*Validators.pattern(new RegExp("[0-9 ]{12}")*/
    this.empList.push("admin");
  }

  ngOnInit(): void {

  }

  onSubmit(): void {
    if (this.isRegSuccess) {
      this.dialogRef.close('Registration Complete');
    }
    else {
      this.submitted = true;
      const { username, password, email, phone } = this.registerForm.getRawValue();

      this.authService.registerForm(username, email, password, phone).subscribe(
        data => {
          console.log(data);
          this.isRegSuccess = true;
          this.isRegFailed = false;
          this.errorFieldSubmitted = {} ;
          this.apiResponse.error = false;
          this.apiResponse.message = 'Successful registration';
        },
        error => {
          const errorResponse = JSON.parse(error.error);
          this.apiResponse.error = true;
          this.apiResponse.message = 'Registration error';
          this.regErrorMessage = errorResponse;
          this.isRegFailed = true;
          if (errorResponse.error && errorResponse.message === 'VALIDATION_FAILED') {
            this.errorFieldSubmitted = errorResponse.data;
          }
        },
        () => {
          console.log("Registration Complete");}
      );
    }
  }

  get username(): AbstractControl {
    return this.registerForm.get('username')!;
  }

  get email(): AbstractControl {
    return this.registerForm.get('email')!;
  }

  get password(): AbstractControl {
    return this.registerForm.get('password')!;
  }

  get phone(): AbstractControl {
    return this.registerForm.get('phone')!;
  }
}
