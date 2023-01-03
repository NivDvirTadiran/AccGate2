import {Component, Input, OnInit} from '@angular/core';
import { StoryInput } from "../../stories/inputs/input/story-input.model";
import {AuthService} from "../_services/auth.service";
import {AbstractControl, FormGroup} from "@angular/forms";
import {TokenStorageService} from "../_services/token-storage.service";
import {Router} from "@angular/router";
import {AppConfig} from "../app.config";
import {BehaviorSubject, Subscription, throwError} from "rxjs";
import {UserService} from "../_services/user.service";
import {MatDialog} from "@angular/material/dialog";
import {ReplacePassForm2Component} from "../login2/login-main/replace-pass-form2/replace-pass-form2.component";
import VerificationForm2Component from "../login2/login-main/verification-form2/verification-form2.component";
import RegisterForm2Component from "../login2/login-main/register-form2/register-form2.component";
import MyAccountForm2Component from "../my-account-form2/my-account-form2.component";
import {EventBusService} from "../_shared/event-bus.service";


export interface DialogData {
  username: string;
  password: string;
}
export interface TSVData {
  username: string;
  email: string;
}


@Component({
  selector: 'profile2',
  templateUrl: './profile2.component.html',
  styleUrls: ['./profile2.component.scss']
})
export default class Profile2Component implements OnInit {

  currentUser: any;
  accessToken: any;
  refreshToken: any;
  windowObjectReference: any;
  refreshTokenSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  public isLoading = false;
  public appConfig: any;
  private TOKEN_KEY: string;
  eventBusSub?: Subscription;
  permittedWebAppList = {
    realtime: false,
    scriptDesigner: false,
    agent: false,
    aeonixAdmin: false,
    admin: false
  };


  isNotify(): boolean {
   return (this.passExp < this.previousAlertPassExp);
  }


  constructor(private authService: AuthService,
              private token: TokenStorageService,
              private eventBusService: EventBusService,
              private router: Router,
              public myAccountFormDialog: MatDialog,
              public replacePassFormDialog: MatDialog,
              public verificationFormDialog: MatDialog) {
    this.TOKEN_KEY = AppConfig.endpoints.TOKEN_KEY;
  }


  openMyAccountForm() {
    const myAccountFormDialogRef = this.myAccountFormDialog.open(MyAccountForm2Component, {
      data: {currentUser: this.currentUser},
    });

    myAccountFormDialogRef.afterClosed().subscribe(result => {
      console.log('The register form dialog was closed');
    });

    return myAccountFormDialogRef.afterClosed().toPromise();
  }

  openReplacePassForm() {
    const replacePassFormDialogRef = this.replacePassFormDialog.open(ReplacePassForm2Component, {
      data: {username: this.currentUser.username , password: ''},
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
        console.log('Replace Password Complete');
        this.setPassExpAlertData();
      }
    });

    return replacePassFormDialogRef.afterClosed().toPromise();
  }

  openVerificationForm() {
    const verificationFormDialogRef = this.verificationFormDialog.open(VerificationForm2Component, {
      data: {username: this.currentUser.username , email: this.currentUser.email},
    });

    verificationFormDialogRef.afterClosed().subscribe(result => {
      console.log('The register form dialog was closed');
    });

    return verificationFormDialogRef.afterClosed().toPromise();
  }


  public passExp: number = 0; // By Days
  public previousAlertPassExp: number = 0; // By Days


  ngOnInit(): void {
    this.currentUser = this.token.getUser();
    this.accessToken = this.currentUser.accessToken;
    this.refreshToken = this.currentUser.refreshToken;
    this.setPassExpAlertData();
    this.setPermittedWebAppList();

    this.eventBusSub = this.eventBusService.on('openChangePassword', () => {
      this.openReplacePassForm();
    });

  }

  setPassExpAlertData(): void {

    const token = this.token.getToken();
    if (token)
      this.authService.getPassExpireDate(token).subscribe(data => {
        this.passExp = data.passExp;
        this.previousAlertPassExp = data.previousAlertPassExp;
        console.log('Password Expire Date: '+this.passExp);
        console.log('previous Alert To Password Expire Date: '+this.previousAlertPassExp);
      }, (err) => {
        console.log('Password Expire Date: update failed');
        return throwError(err);
      });

  }

  setPermittedWebAppList(): void {
    const token = this.token.getToken();
    if (token)
      this.authService.getPermittedWebAppList(token).subscribe(permittedWebAppList => {
        this.permittedWebAppList=(permittedWebAppList);
        console.log('Permitted web apps list is received from server.');
      }, (err) => {
        console.log('Can not get server data defining permitted web apps for user');
        return throwError(err);
      });
  }

  openapp(): void {
    console.log('window.location.origin.toString():  '+window.location.origin.toString());

    this.router.navigate([]).then(result => { this.windowObjectReference = window.open(AppConfig.accServer.ACCWEBServers+'/accGCCS/'/*window.location.origin.toString()+"/profile"*/); });
    console.log('window.location.origin.toString():  '+ this.windowObjectReference.window.document.getElementById("profile_title").innerHTML);
    var promise = new Promise((resolve, reject) => {this.windowObjectReference.window.document.getElementById("profile_title").innerHTML = "new title";});

    console.log('window.location.origin.toString():  '+ this.windowObjectReference.window.document.getElementById("profile_title").innerHTML);

  }

  public forseRefreshToken(): void {

    if (!this.isLoading) {
      this.isLoading = true;
      const token = this.token.getRefreshToken();
      if (token)
        this.authService.refreshToken(token).subscribe(
          data => {
            this.isLoading = false;
            this.token.saveToken(data.accessToken);
            this.token.saveRefreshToken(data.refreshToken);
            this.refreshTokenSubject.next(data.accessToken);
            this.currentUser = this.token.getUser();
            this.accessToken = this.token.getToken();
            this.refreshToken = this.token.getRefreshToken();
          },
          (err) => {
            this.isLoading = false;

            this.token.signOut();
            return throwError(err);
          }
        );
    }
  }

  public openNewTabForApp(appRequest: string[]): void {
    const [ webapp, webappURLPrefix ] = appRequest.values();
    var newAccessToken = "";
    var newRefreshToken = "";
    var newCurrentUser = "";

    if (!this.isLoading) {
      this.isLoading = true;
      const token = this.token.getRefreshToken();
      if (token)
        this.authService.webapptab(token, webapp)
          .subscribe(
            data => {
              let promise = new Promise<void>((resolve, reject) => {
                this.isLoading = false;
                newAccessToken = (data.accessToken);
                newRefreshToken = (data.refreshToken);
                newCurrentUser = (data);
                setTimeout(() => {
                  this.isLoading = false;
                  console.log("Failed open new tab");
                  resolve();//() => {resolve();}
                }, 5000);
              })
              promise.then(() => {this.router.navigate([])
                .then(result => { this.windowObjectReference = window.open(AppConfig.accServer.ACCWEBServers+webappURLPrefix);})
                .then(result => { this.windowObjectReference.window.sessionStorage.setItem(AppConfig.endpoints.TOKEN_KEY, newAccessToken);
                    this.windowObjectReference.window.sessionStorage.setItem(AppConfig.endpoints.REFRESHTOKEN_KEY, newRefreshToken);
                    this.windowObjectReference.window.sessionStorage.setItem(AppConfig.endpoints.USER_KEY, JSON.stringify(newCurrentUser));
                    this.isLoading = false;},
                  (err) => { this.isLoading = false;
                    return throwError(err);})});
            },
            (err) => {
              this.isLoading = false;
              return throwError(err);
            })
    }
  }

  public openNewWinForApp(appRequest: string[]): void {
    /*webapp: string, webappURLPrefix: string*/
    const [ webapp, webappURLPrefix ] = appRequest.values();
    var newAccessToken = "";
    var newRefreshToken = "";
    var newCurrentUser = "";

    if (!this.isLoading) {
      this.isLoading = true;
      const token = this.token.getRefreshToken();
      if (token)
        this.authService.webapptab(token, webapp)
          .subscribe(
            data => {
              let promise = new Promise<void>((resolve, reject) => {

                newAccessToken = (data.accessToken);
                newRefreshToken = (data.refreshToken);
                newCurrentUser = (data);
                setTimeout(() => {
                  this.isLoading = false;
                  console.log("Failed open new window");
                  resolve();//() => {resolve();}
                }, 5000);
              })
              promise.then(result => { this.windowObjectReference = window.open(AppConfig.accServer.ACCWEBServers+webappURLPrefix+'start.html',
                  'C-Sharpcorner', 'scrollbars=no');})
                .then(result => { this.windowObjectReference.window.sessionStorage.setItem(AppConfig.endpoints.TOKEN_KEY, newAccessToken);
                    this.windowObjectReference.window.sessionStorage.setItem(AppConfig.endpoints.REFRESHTOKEN_KEY, newRefreshToken);
                    this.windowObjectReference.window.sessionStorage.setItem(AppConfig.endpoints.USER_KEY, JSON.stringify(newCurrentUser));
                    this.isLoading = false;},
            (err) => { this.isLoading = false;
              return throwError(err);})
    },
    (error) => {
              this.isLoading = false;
              return throwError(error.error);
            })
    }
  }

}

