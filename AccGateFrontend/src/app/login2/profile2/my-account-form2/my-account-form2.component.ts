import {Component, ElementRef, EventEmitter, Inject, OnInit, Output, Renderer2, ViewChild} from '@angular/core';
import { AuthService } from 'src/app/_services/auth.service';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {PasswordValidators} from "../../login-main/replace-pass-form2/replace-pass-form2.component";
import MyAccountFormComponent from "src/stories/forms/my-account-form/my-account-form.component";
import {AccountInput} from "src/stories/inputs/account-input/account-input.model";
import {EventData} from "src/app/_shared/event.class";
import {EventBusService} from "src/app/_shared/event-bus.service";
import {throwError} from "rxjs";
import {TokenStorageService} from "src/app/_services/token-storage.service";
import {UserService} from "src/app/_services/user.service";


export interface MyAccountData {
  currentUser: any;
}



@Component({
  selector: 'my-account-form2',
  templateUrl: './my-account-form2.component.html',
  styleUrls: ['./my-account-form2.component.css']
})
export default class MyAccountForm2Component implements OnInit {
  registerForm: FormGroup;
  isRegSuccess = false;
  isRegFailed = false;
  submitted = false;
  regErrorMessage: any;
  empList: Array<String> = [];
  apiResponse = { message: '', error: false };
  @ViewChild('form', { static: false }) form?: ElementRef;
  @ViewChild('username', { static: false }) userField?: ElementRef;
  errorFieldSubmitted: any = {};
  accountDetails: any;
  closeResult = '';



  @Output() validateMail: EventEmitter<String> = new EventEmitter();

  storyInputsInOrder: AccountInput[]  = [
    {/*...mStoryInput.Default.args?.['storyInput'],*/ id: '1', title: this.data.currentUser.username, state: 'USER NAME', icon: '', type: 'enable-profile-picture', placeholder: '', hide: false  },
    {/*...mStoryInput.Default.args?.['storyInput'],*/ id: '2', title: 'phone', state: 'PHONE NUMBER FOR AUTHENTICATION', icon: './assets/images/Phone3ldpi.png', type: 'tel', placeholder: 'Ex: +972547762084', hide: false  },
    {/*...mStoryInput.Default.args?.['storyInput'],*/ id: '3', title: 'email', state: 'EMAIL', icon: './assets/images/AtSign3ldpi.png', type: 'email', placeholder: 'Ex: abc@example.com', hide: false   },
    {/*...mStoryInput.Default.args?.['storyInput'],*/ id: '4', title: 'password', state: 'PASSWORD', icon: './assets/images/LockIcon2ldpi.png', type: 'password', placeholder: 'your_password' , hide: false },
  ];

  constructor(private eventBusService: EventBusService,
              private token: TokenStorageService,
              private authService: AuthService,
              private tokenStorageService: TokenStorageService,
              private renderer: Renderer2,
              public dialogRef: MatDialogRef<MyAccountFormComponent>,
              @Inject(MAT_DIALOG_DATA) public data: MyAccountData) {
    this.registerForm = new FormGroup({
      username: new FormControl(''),
      email: new FormControl('email', Validators.email),
      phone: new FormControl('0544444444', PasswordValidators.patternValidator(new RegExp("(?=.*[0-9 ]{8})"), {requiresPhoneChars: true}))
    });/*Validators.pattern(new RegExp("[0-9 ]{12}")*/
    this.empList.push("admin");
  }

  ngOnInit(): void {
    this.getAccountDetails();
    /*this.userService.getAccountDetails().subscribe(
      data => { this.accountDetails = data; },
      err => { this.accountDetails = JSON.parse(err.error).message; }
    );*/
  }

  getAccountDetails(): void {

    const token = this.token.getToken();
    if (token)
      this.authService.getAccountDetails(token).subscribe(accountDetails => {
        this.accountDetails=(accountDetails);
        this.setUsername(accountDetails.username);
        this.setEmail(accountDetails.email);
        this.setPhone(accountDetails.phone);
        console.log('Account Details is received from server.');
      }, (err) => {
        console.log('Can not get user account details');
        return throwError(err);
      });

  }

  doLogout(): void {
    console.log("logging out")
    this.eventBusService.emit(new EventData('logout', null));
  }

  openChangePassword() {
    this.eventBusService.emit(new EventData('openChangePassword', null));
  }

  openUser() {
    this.eventBusService.emit(new EventData('openConfiguration', null));
    this.dialogRef.close('Open Configuration Tools');
  }

  displayConfigButton(): boolean {
    console.log("isSupervisorAdmin: "+this.tokenStorageService.isSupervisorAdmin())
    return this.tokenStorageService.isSupervisorAdmin();
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


  setUsername(name: string): void {
    this.registerForm.get('username')?.setValue(name)!;
  }

  get email(): AbstractControl {
    return this.registerForm.get('email')!;
  }

  setEmail(email: string): void {
    return this.registerForm.get('email')?.setValue(email);
  }

  get password(): AbstractControl {
    return this.registerForm.get('password')!;
  }

  get phone(): AbstractControl {
    return this.registerForm.get('phone')!;
  }

  setPhone(phone: string): void {
    return this.registerForm.get('phone')?.setValue(phone);
  }

}
