import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { AuthService } from '../../app/_services/auth.service';
import { TokenStorageService } from '../../app/_services/token-storage.service';
import {  Router } from '@angular/router';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import {FormControl, Validators} from "@angular/forms";
import { RegisterFormComponent } from '../../app/login/register-form/register-form.component';
import {ReplacePassFormComponent} from "../../app/login/replace-pass-form/replace-pass-form.component";
import {Observable} from "rxjs";
import ButtonComponent from "../buttons/button.component";
//import {  Router } from '@angular/router';

@Component({
  selector: 'storybook-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.css']
})
export default class CardComponent implements OnInit {
  registerFormRef: MdbModalRef<RegisterFormComponent> | null = null;
  //replacePassFormRef: MdbModalRef<ReplacePassFormComponent> | null = null;
  form: any = {
    username: null, //new FormControl('ea2', Validators.min(2)),
    password: null  //new FormControl('zaqwsx', Validators.min(2))
  };
  public isLoggedIn = false;
  isLoginFailed = false;
  loginErrorMessage = '';
  roles: string[] = [];

  constructor() { }

  ngOnInit(): void {}

  test() {
    console.log("test start");
    /*this.openRegisterForm().then(() => {
      this.openReplacePassword();
      console.log("test end");});*/

    /*this.openRegisterForm().then(
      (val) => {
        console.log(val);
        switch (val) {
          case "xbutton":
            break;
          case undefined:
            this.openReplacePassword();
            break;
          default:

        }
        return 'done2';
      },
      (err) => console.error(err));*/
  }

  openRegisterForm() {
    return //this.registerFormService.open(RegisterFormComponent).onClose.toPromise();
    /*var promise = new Promise<void>((resolve, reject)  => {
      let newRegisterFormService = this.registerFormService.open(RegisterFormComponent);
      setTimeout(() => {
        console.log("Async Work Complete");
        newRegisterFormService.close();
        resolve();//() => {resolve();}
      }, 5000);
    });
    return promise;*/
  }

  openReplacePassword() {
    //this.replacePassFormService.open(ReplacePassFormComponent);
  }

  onSubmit(): void {
  }

  reloadPage(): void {}


  /**
   * Is this the principal call to action on the page?
   */
  @Input()
  primary = false;

  /**
   * What background color to use
   */
  @Input()
  backgroundColor?: string;

  /**
   * How large should the button be?
   */
  @Input()
  size: 'small' | 'medium' | 'large' = 'medium';

  /**
   * Button contents
   *
   * @required
   */
  @Input()
  label = 'Button';

  /**
   * Optional click handler
   */
  @Output()
  onClick = new EventEmitter<Event>();

  public get classes(): string[] {
    const mode = this.primary ? 'storybook-card--primary' : 'storybook-card--secondary';

    return ['storybook-card', `storybook-card--${this.size}`, mode];
  }

}
