import {Component, ElementRef, Inject, Input, OnInit, Renderer2, ViewChild} from '@angular/core';
import { StoryInput } from "src/stories/inputs/story-input.model";
import {AuthService} from "src/app/_services/auth.service";
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";
import {TokenStorageService} from "src/app/_services/token-storage.service";
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {Router} from "@angular/router";
import RegisterForm2Component from "./register-form2/register-form2.component";
//import * as mStoryInput from "../../../stories/inputs/story-input.stories";
import {RegisterFormComponent} from "../../login/register-form/register-form.component";
import {ReplacePassFormComponent} from "../../login/replace-pass-form/replace-pass-form.component";
import {ReplacePassForm2Component} from "./replace-pass-form2/replace-pass-form2.component";

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

  /*user: User | null = null;

  doLogout() {
    this.user = null;
  }

  doLogin() {
    this.user = { name: 'Jane Doe' };
  }

  doCreateAccount() {
    this.user = { name: 'Jane Doe' };

  }*/

  loginForm: FormGroup;

  public get classes(): string[] {
    const mode = this.primary ? 'storybook-page2--primary' : 'storybook-page2--secondary';

    return ['storybook-page2', mode];
  }

  @ViewChild('formHeader', { static: false }) mainHeader?: ElementRef;


  constructor(private renderer: Renderer2,
              public registerFormDialog: MatDialog,
              public replacePassFormDialog: MatDialog,
              public authService: AuthService,
              private tokenStorage: TokenStorageService,
              private router: Router,) {
    this.loginForm = new FormGroup({
      username: new FormControl('ea3', Validators.minLength(2)),
      password: new FormControl('T@diran2022', Validators.minLength(2)),
    });
  }


  openRegisterForm() {
    const registerFormDialogRef = this.registerFormDialog.open(RegisterForm2Component, {
      data: {username: this.userName , password: this.password},
    });

    registerFormDialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.password.reset();
    });

    return registerFormDialogRef.afterClosed().toPromise();
  }


  openReplacePassForm() {
    const replacePassFormDialogRef = this.replacePassFormDialog.open(ReplacePassForm2Component, {
      data: {username: this.userName , password: this.password},
    });

    replacePassFormDialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.password.reset();
    });

    return replacePassFormDialogRef.afterClosed().toPromise();
  }

  ngOnInit(): void {};



  get userName(): AbstractControl {
    return this.loginForm.get('username')?.value;
  }

  get password(): AbstractControl {
    return this.loginForm.get('password')?.value;
  }


/*
  openRegisterForm() {
    return this.registerFormService.open(RegisterFormComponent).onClose.toPromise();
  }

  openReplacePassword() {
    this.replacePassFormService.open(ReplacePassForm2Component);
  }
*/

  onSubmit(credentials: any): void {
    console.warn('Login Request from login-main!');
    const { username, password } = credentials;

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
                    //this.openReplacePassword();
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
          default:
            this.loginErrorMessage = err.error.message;
        }


        this.isLoginFailed = true;
      }
    );
  }


  reloadPage(): void {
    this.router.navigate(['/login-main']).then(() => {window.location.reload()});
  }

  profile2(): void {
  this.router.navigate(['/profile2']);
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
