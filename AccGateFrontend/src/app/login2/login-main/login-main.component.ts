import {Component, ElementRef, Inject, Input, OnInit, Renderer2, ViewChild} from '@angular/core';
import { StoryInput } from "src/stories/inputs/input/story-input.model";
import {AuthService} from "src/app/_services/auth.service";
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";
import {TokenStorageService} from "src/app/_services/token-storage.service";
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {ActivatedRoute, Router} from "@angular/router";
import RegisterForm2Component from "./register-form2/register-form2.component";
//import * as mStoryInput from "../../../stories/inputs/story-input.stories";
import {ReplacePassForm2Component} from "./replace-pass-form2/replace-pass-form2.component";
import VerificationForm2Component from "./verification-form2/verification-form2.component";
import {UserService} from "../../_services/user.service";
import { workingModeConfiguration } from "src/app/app.config"
import {EventData} from "../../_shared/event.class";
import { EventBusService } from 'src/app/_shared/event-bus.service';
import {Subscription} from "rxjs";
import ForgotPassForm2Component from "./forgot-pass-form2/forgot-pass-form2.component";


export interface DialogData {
  username: string;
  password: string;
}



@Component({
  selector: 'login-main',
  templateUrl: './login-main.component.html',
  styleUrls: ['./login-main.component.scss']
})
export class LoginMainComponent implements OnInit {

  public isLoggedIn = false;
  isLoginFailed = false;
  loginErrorMessage = '';
  roles: string[] = [];
  public isLoading = false;
  eventBusSub?: Subscription;




  /**
   * Is this the principal call to action on the login-main?
   */
  storyInputsInOrder: StoryInput[]  = [
    { /*...mStoryInput.Default.args?.['storyInput'],*/ id: '2', title: 'username', state: 'USER NAME', icon: './assets/images/User2ldpi.png', type: 'text', placeholder: 'Ex.Saul Ramirez' , hide: false },
    { /*...mStoryInput.Default.args?.['storyInput'],*/ id: '3', title: 'password', state: 'PASSWORD', icon: './assets/images/LockIcon2ldpi.png', type: 'password', placeholder: 'your_password', hide: false   },
  ];

  /**
   * Is this the principal call to action on the login-main?
   */
  @Input()
  primary = true;

  /**
   * What background color to use
   */
  @Input()
  backgroundColor?: string;


  /**
   * What background color to use
   */
  @Input()
  background?: string;

  /**
   * Button contents
   *
   * @required
   */
  @Input()
  label = 'Login2Component';


  loginForm: FormGroup;

  public get classes(): string[] {
    const mode = this.primary ? 'storybook-page2--primary' : 'storybook-page2--secondary';

    return ['storybook-page2', mode];
  }

  @ViewChild('formHeader', { static: false }) mainHeader?: ElementRef;


  constructor(private renderer: Renderer2,
              public forgotPassFormDialog: MatDialog,
              public registerFormDialog: MatDialog,
              public replacePassFormDialog: MatDialog,
              public verificationFormDialog: MatDialog,
              private eventBusService: EventBusService,
              public authService: AuthService,
              public userService: UserService,
              private tokenStorage: TokenStorageService,
              private router: Router,
              private activatedRoute:ActivatedRoute) {
    this.loginForm = new FormGroup({
      username: new FormControl('', Validators.minLength(2)),
      password: new FormControl('', Validators.minLength(2)),
    });

  }


  openForgotPassForm() {
    const forgotPassFormDialogRef = this.forgotPassFormDialog.open(ForgotPassForm2Component, {
      data: {username: this.getUsernameCurrentFieldValue, email: "not@inuse.com"},
    });

    forgotPassFormDialogRef.afterClosed().subscribe(result => {
      console.log('The forget password form dialog was closed');
      if (result.message === 'Successful verification') {
        //this.setUsernameCurrentFieldValue(result.data.username);
        //this.setPasswordCurrentFieldValue(result.data.password.toString());
      }
    });

    return forgotPassFormDialogRef.afterClosed().toPromise();
  }

  openRegisterForm() {
    const registerFormDialogRef = this.registerFormDialog.open(RegisterForm2Component, {
      data: {username: this.getUsernameCurrentFieldValue , password: this.getPasswordCurrentFieldValue},
    });

    registerFormDialogRef.afterClosed().subscribe(result => {
      console.log('The register form dialog was closed');
      if (result.message === 'Registration Complete') {
        //this.setUsernameCurrentFieldValue(result.username);
        //this.setEmailCurrentFieldValue(result.email);
      }
    });

    return registerFormDialogRef.afterClosed().toPromise();
  }

  openReplacePassForm() {
    const replacePassFormDialogRef = this.replacePassFormDialog.open(ReplacePassForm2Component, {
      data: {username: this.getUsernameCurrentFieldValue , password: this.getPasswordCurrentFieldValue},
    });

    replacePassFormDialogRef.beforeClosed().subscribe(result => {
      console.log('The replace password form dialog before closed');
    },
      err => {
        console.log(err.error.message);
      });


    replacePassFormDialogRef.afterClosed().subscribe(result => {
      console.log('The replace password form dialog after closed');
      if (result.message === 'Replace Password Complete') {
        this.setUsernameCurrentFieldValue(result.data.username);
        this.setPasswordCurrentFieldValue(result.data.password.toString());
      }
    });

    return replacePassFormDialogRef.afterClosed().toPromise();
  }

  openVerificationForm() {
    const verificationFormDialogRef = this.verificationFormDialog.open(VerificationForm2Component, {
      data: {username: this.getUsernameCurrentFieldValue, email: "not@inuse.com"},
    });

    verificationFormDialogRef.afterClosed().subscribe(result => {
      console.log('The register form dialog was closed');
    });

    return verificationFormDialogRef.afterClosed().toPromise();
  }


  ngOnInit(): void {
    this.eventBusService.emit(new EventData('is2SVRequired', null));

    this.eventBusSub = this.eventBusService.on('openVerification', () => {
      this.openVerificationForm();
    });
  };



  get getUsernameCurrentFieldValue(): AbstractControl {
    return this.loginForm.get('username')?.value;
  }

  private setUsernameCurrentFieldValue(name: string) {
    this.loginForm.get('username')?.setValue(name);
  }

  get getPasswordCurrentFieldValue(): AbstractControl {
    return this.loginForm.get('password')?.value;
  }

  private setPasswordCurrentFieldValue(pass: string) {
    this.loginForm.get('password')?.setValue(pass);
  }


  onSubmit(): void {
    console.warn('Login Request from login-main!');
    const { username, password } = this.loginForm.value;

    this.isLoading = true;
    this.authService.login(username, password).subscribe(
      data => {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveRefreshToken(data.refreshToken);
        this.tokenStorage.saveUser(data);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getUser().roles;
        this.profile2();
      },
      err => {
        switch (err.error.message) {
          case "Error: A registry process should be made!":
            //this.openRegisterForm().then(() => {this.openReplacePassword()});
            //toPromise((data) => {this.openReplacePassword()});
            this.openRegisterForm().then(
              (val) => {
                console.log(val);
                switch (val) {
                  case "xbutton":
                    break;
                  case "Registration Complete":
                    this.onSubmit();
                    break;
                  case undefined:
                    //this.openReplacePassword();
                    break;
                  default:
                }
                return 'done2';
              },
              (err) => console.error(err));
            break;
          case "User credentials have expired":
            this.openReplacePassForm().then(
              (val) => {
                console.log(val);
                switch (val.message) {
                  case "xbutton":
                    break;
                  case "Replace Password Complete":
                    this.onSubmit();
                    break;
                  case undefined:
                    //Handle unknown response
                    break;
                  default:
                }
                return 'done2';
              },
              (err) => console.error(err));
            break;
          default:
            this.loginErrorMessage = err.error.message;
        }

        this.isLoginFailed = true;
        this.isLoading = false;
      },
      () => { this.isLoading = false; })
  }


  reloadPage(): void {
    this.router.navigate(['/login-main']).then(() => {window.location.reload()});
  }

  profile2(): void {
  this.router.navigate(['../profile2'], {relativeTo: this.activatedRoute});
  }

  home2(): void {
  this.router.navigate(['/home']);
  }




}

/*
@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'dialog-overview-example-dialog.html',
})
export class DialogOverviewExampleDialog {
  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
*/

/*
@Component({
  selector: 'password-dialog',
  templateUrl: './password-dialog.html',
})
export class ExtentionDialog {
  constructor(
    public dialogRef: MatDialogRef<ExtentionDialog>,
    @Inject(MAT_DIALOG_DATA) public extensionData: {name: string, password: string;},
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
*/
