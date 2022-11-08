import {Component, Input, OnInit} from '@angular/core';
import { StoryInput } from "../../stories/inputs/story-input.model";
import {AuthService} from "../_services/auth.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {TokenStorageService} from "../_services/token-storage.service";
import {Router} from "@angular/router";
//import {Default} from "../../stories/inputs/story-input.stories";


@Component({
  selector: 'register2',
  templateUrl: './login2.component.html',
  styleUrls: ['./login2.component.scss']
})
export default class Login2Component implements OnInit {

  public isLoggedIn = false;
  isLoginFailed = false;
  loginErrorMessage = '';
  roles: string[] = [];




  /**
   * Is this the principal call to action on the login2?
   */
  storyInputsInOrder: StoryInput[]  = [
    { /*...Default.args?.['storyInput'],*/ id: '1', title: 'username', state: 'USER NAME', icon: './assets/images/User2ldpi.png', type: 'text', placeholder: 'Ex.Saul Ramirez' },
    { /*...Default.args?.['storyInput'],*/ id: '2', title: 'password', state: 'PASSWORD', icon: './assets/images/LockIcon2ldpi.png', type: 'password', placeholder: 'your_password'  },
  ];

  /**
   * Is this the principal call to action on the login2?
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

  constructor(public authService: AuthService,
              private tokenStorage: TokenStorageService,
              private router: Router,) {
    this.loginForm = new FormGroup({
      username: new FormControl('Telecom2', Validators.minLength(2)),
      password: new FormControl('T@diran2022', Validators.minLength(2)),
    });
  }

  ngOnInit(): void {};


  onSubmit(credentials: any): void {
    console.warn('Login Request from login2!');
    const { username, password } = credentials;

    this.authService.login(username, password).subscribe(
      data => {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveRefreshToken(data.refreshToken);
        this.tokenStorage.saveUser(data);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getUser().roles;
        this.reloadPage();
      },
      err => {
        switch (err.error.message) {
          case "Error: A registry process should be made!":
            //this.openRegisterForm().then(() => {this.openReplacePassword()});
            //toPromise((data) => {this.openReplacePassword()});
            /*this.openRegisterForm().then(
              (val) => {
                console.log(val);
                switch (val) {
                  case "xbutton":
                    break;
                  case "Registration Complete":
                    this.openReplacePassword();
                    break;
                  case undefined:
                    this.openReplacePassword();
                    break;
                  default:
                }
                return 'done2';
              },
              (err) => console.error(err));*/
            break;
          default:
            this.loginErrorMessage = err.error.message;
        }


        this.isLoginFailed = true;
      }
    );
  }


  reloadPage(): void {
    this.router.navigate(['/profile2']).then(() => {window.location.reload()});
  }

}

