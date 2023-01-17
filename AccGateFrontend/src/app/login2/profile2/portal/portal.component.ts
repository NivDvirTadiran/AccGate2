import {Component, OnInit} from '@angular/core';
import {AuthService} from "src/app/_services/auth.service";
import {TokenStorageService} from "src/app/_services/token-storage.service";
import {ActivatedRoute, Router} from "@angular/router";
import {AppConfig, workingModeConfiguration} from "src/app/app.config";
import {BehaviorSubject, Subscription, throwError} from "rxjs";
import {UserService} from "src/app/_services/user.service";
import {MatDialog} from "@angular/material/dialog";
import {ReplacePassForm2Component} from  "src/app/login2/login-main/replace-pass-form2/replace-pass-form2.component";
import {EventBusService} from "src/app/_shared/event-bus.service";
import MyAccountForm2Component from "../my-account-form2/my-account-form2.component";
import VerificationForm2Component from "../../login-main/verification-form2/verification-form2.component";
import {EventData} from "src/app/_shared/event.class";




export interface DialogData {
  username: string;
  password: string;
}



@Component({
  selector: 'profile2',
  templateUrl: './portal.component.html',
  styleUrls: ['./portal.component.scss']
})
export default class PortalComponent implements OnInit {

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
              private userService: UserService,
              private token: TokenStorageService,
              private eventBusService: EventBusService,
              private router: Router,
              private activatedRoute:ActivatedRoute,
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
    this.is2SVRequired();

    this.eventBusSub = this.eventBusService.on('openChangePassword', () => {
      this.openReplacePassForm();
    });

    this.eventBusSub = this.eventBusService.on('openVerification', () => {
      this.openVerificationForm();
    });

    this.eventBusSub = this.eventBusService.on('openConfiguration', () => {
      this.configuratin();
    });

  }

  is2SVRequired() {
    this.eventBusService.emit(new EventData('is2SVRequired', null));
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

  public async openNewTabForApp(appRequest: string[]) {
    const [webapp, webappURLPrefix] = appRequest.values();
    var newAccessToken = "";
    var newRefreshToken = "";
    var newCurrentUser = "";


    if (!this.isLoading) {
      const token = this.token.getRefreshToken();
      if (token) {

        //const timeout = new Promise((res) => setTimeout(() => res("openNewTabForApp - timeout!"), 5000));
        const timeout = (prom: Promise<any>, time: number, exception: Symbol) => {
          let timer: any;
          return Promise.race([
            prom,
            new Promise((_r, rej) => timer = setTimeout(rej, time, exception))
          ]).finally(() => clearTimeout(timer));
        }


        const promise = async () => {
          new Promise<any>((resolve, reject) => {
            console.log('Spinner Start.');
            this.isLoading = true;
            return this.authService.webapptab(token, webapp).toPromise()
              .then((val: any) => {
                console.log('Request approved by the server.');
                newAccessToken = (val.accessToken);
                newRefreshToken = (val.refreshToken);
                newCurrentUser = (val);
              })
              .then((result) => {
                  this.router.navigate([])
                    .then(result => {
                      this.windowObjectReference = window.open(AppConfig.accServer.ACCWEBServers + webappURLPrefix);
                    })
                    .then((result) => {
                        console.log('Plant the secret ingredient.');
                        this.windowObjectReference.window.sessionStorage.setItem(AppConfig.endpoints.TOKEN_KEY, newAccessToken);
                        this.windowObjectReference.window.sessionStorage.setItem(AppConfig.endpoints.REFRESHTOKEN_KEY, newRefreshToken);
                        this.windowObjectReference.window.sessionStorage.setItem(AppConfig.endpoints.USER_KEY, JSON.stringify(newCurrentUser));
                      },
                      (err) => {
                        console.log('failed loading the app webpage.');
                        reject(throwError(err));
                      })
                },
                (err) => {
                  console.log('cant get a server request appropriate response for opening this webpage ')
                  reject(throwError(err));
                })
              .then(() => {
                  console.log('Spinner Stop.');
                  this.isLoading = false;
                  resolve("Success");
                },
                (err) => {reject(throwError(err))});

          });
        }

        const timeoutError = Symbol();
        try {

          await timeout(promise(), 5000, timeoutError)
            .then(() => {
              this.isLoading = false;
              console.log('openNewTabForApp: open tab app successfully finished');
            });
        }catch (e) {
          if (e === timeoutError) {
            // handle timeout
            console.log('timeoutError: '+e.error);
          }else {
            // other error
            console.log('Error: '+e.error);
            throw e;
          }
        }

      }
    }
  }

  public async openNewWinForApp(appRequest: string[]) {
    const [webapp, webappURLPrefix] = appRequest.values();
    var newAccessToken = "";
    var newRefreshToken = "";
    var newCurrentUser = "";


    if (!this.isLoading) {
      const token = this.token.getRefreshToken();
      if (token) {


        const timeout = (prom: Promise<any>, time: number, exception: Symbol) => {
          let timer: any;
          return Promise.race([
            prom,
            new Promise((_r, rej) => timer = setTimeout(rej, time, exception))
          ]).finally(() => clearTimeout(timer));
        }


        const promise = async () => {
          new Promise<any>((resolve, reject) => {
            console.log('Spinner Start.');
            this.isLoading = true;
            return this.authService.webapptab(token, webapp).toPromise()
              .then((val: any) => {
                console.log('Request approved by the server.');
                newAccessToken = (val.accessToken);
                newRefreshToken = (val.refreshToken);
                newCurrentUser = (val);
              })
              .then((result) => {
                  console.log('Opening new tab/win for the requested page.');
                  this.router.navigate([])
                    .then(result => {
                      console.log('Insert url and loading the page.');
                      this.windowObjectReference = window.open(AppConfig.accServer.ACCWEBServers+webappURLPrefix+'start.html',
                        'C-Sharpcorner', 'scrollbars=no');
                    })
                    .then((result) => {
                        console.log('Plant the secret ingredient.');
                        this.windowObjectReference.window.sessionStorage.setItem(AppConfig.endpoints.TOKEN_KEY, newAccessToken);
                        this.windowObjectReference.window.sessionStorage.setItem(AppConfig.endpoints.REFRESHTOKEN_KEY, newRefreshToken);
                        this.windowObjectReference.window.sessionStorage.setItem(AppConfig.endpoints.USER_KEY, JSON.stringify(newCurrentUser));
                      },
                      (err) => {
                        console.log('failed loading the app webpage.');
                        reject(throwError(err));
                      })
                },
                (err) => {
                  console.log('cant get a server request appropriate response for opening this webpage ')
                  reject(throwError(err));
                })
              .then(() => {
                  console.log('Spinner Stop.');
                  this.isLoading = false;
                  resolve("Success");
                },
                (err) => {reject(throwError(err))});
          });
        }


        const timeoutError = Symbol();
        try {
          await timeout(promise(), 5000, timeoutError)
        }catch (e) {
          if (e === timeoutError) {
            // handle timeout
            console.log('timeoutError: ' + e.error);
          } else {
            // other error
            console.log('Error: ' + e.error);
            throw e;
          }
        }finally {
          console.log('openNewTabForApp: open tab app successfully finished');
        }



      }
    }
  }

  /*public openNewWinForApp(appRequest: string[]): void {
    //webapp: string, webappURLPrefix: string
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
                  console.log("Failed open new window");
                  resolve();//() => {resolve();}
                }, 5000);
              })
              promise.then(result => { this.windowObjectReference = window.open(AppConfig.accServer.ACCWEBServers+webappURLPrefix+'start.html',
                  'C-Sharpcorner', 'scrollbars=no');})
                .then(result => { this.windowObjectReference.window.sessionStorage.setItem(AppConfig.endpoints.TOKEN_KEY, newAccessToken);
                    this.windowObjectReference.window.sessionStorage.setItem(AppConfig.endpoints.REFRESHTOKEN_KEY, newRefreshToken);
                    this.windowObjectReference.window.sessionStorage.setItem(AppConfig.endpoints.USER_KEY, JSON.stringify(newCurrentUser));},
            (err) => { this.isLoading = false;
              return throwError(err);})
    },
    (error) => {
              this.isLoading = false;
              return throwError(error.error);
            }, () => {this.isLoading = false;})
    }
  }*/

  configuratin(): void {
    this.router.navigate(['../admin'], {relativeTo: this.activatedRoute});
  }


}

