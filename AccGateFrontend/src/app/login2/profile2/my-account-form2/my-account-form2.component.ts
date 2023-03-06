import {Component, ElementRef, EventEmitter, Inject, OnInit, Output, Renderer2, ViewChild} from '@angular/core';
import { AuthService } from 'src/app/_services/auth.service';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {PasswordValidators} from "../../login-main/replace-pass-form2/replace-pass-form2.component";
import MyAccountFormComponent from "src/stories/forms/my-account-form/my-account-form.component";
import {AccountInput} from "src/stories/inputs/account-input/account-input.model";
import * as mAccountInput from "src/stories/inputs/account-input/account-input.stories";
import {EventData} from "src/app/_shared/event.class";
import {EventBusService} from "src/app/_shared/event-bus.service";
import {throwError} from "rxjs";
import {TokenStorageService} from "src/app/_services/token-storage.service";
import {UserService} from "src/app/_services/user.service";
import {Prop} from "../board-admin2/board-admin2.component";
import {toArray} from "rxjs/operators";
import {TranslateService} from "../../../storybook/pipes/translate/translate.service";




export class Detail {
  constructor(detailName: any, detailValue: any) {
  this.detailName = detailName;
  this.detailValue = detailValue;
  }

  detailName: string= '';
  detailValue: string= '';

  Detail(detailName: string , detailValue: string) {
    this.detailName = detailName;
    this.detailValue = detailValue;
  }

  getDetailName(): string {
    return this.detailName;
  }

}

export interface MyAccountData {
  currentUser: any;
}



@Component({
  selector: 'my-account-form2',
  templateUrl: './my-account-form2.component.html',
  styleUrls: ['./my-account-form2.component.css']
})
export default class MyAccountForm2Component implements OnInit {
  myAccountForm: FormGroup;
  isSaveDetailSuccess = false;
  isSaveDetailFailed = false;
  isLoading = true;
  saveDetailErrorMessage: any;
  empList: Array<String> = [];
  apiResponse = { message: '', error: false };
  @ViewChild('form', { static: false }) form?: ElementRef;
  @ViewChild('username', { static: false }) userField?: ElementRef;
  errorFieldSubmitted: any = {};
  accountDetails: any;
  closeResult = '';


  details: Array<Detail>= [];


  @Output() validateMail: EventEmitter<String> = new EventEmitter();

  storyInputsInOrder: AccountInput[]  = [
    {...mAccountInput.Username.args?.['storyInput'], id: '1', title: this.data.currentUser.username  },
    {...mAccountInput.Phone.args?.['storyInput'], id: '2'},
    {...mAccountInput.Email.args?.['storyInput'], id: '3'   },
    {...mAccountInput.Password.args?.['storyInput'], id: '4' },
  ];

  constructor(private eventBusService: EventBusService,
              private token: TokenStorageService,
              private authService: AuthService,
              private tokenStorageService: TokenStorageService,
              private renderer: Renderer2,
              public dialogRef: MatDialogRef<MyAccountFormComponent>,
              @Inject(MAT_DIALOG_DATA) public data: MyAccountData,
              public _translate: TranslateService) {
    this.myAccountForm = new FormGroup({
      username: new FormControl(''),
      phone: new FormControl('', PasswordValidators.patternValidator(new RegExp("(?=.*[0-9 ]{8})"), {requiresPhoneChars: true})),
      email: new FormControl('', Validators.email),
    });/*Validators.pattern(new RegExp("[0-9 ]{12}")*/
    this.empList.push("admin");
  }

  ngOnInit(): void {
    this.isLoading = false;
    this.getAccountDetails();
  }

  getAccountDetails(): void {

    const username = this.token.getUser().username;
    if (username)
      this.isLoading = true;
      this.authService.getAccountDetails(username).subscribe(accountDetails => {
        this.accountDetails=(accountDetails);
        this.details.push(new  Detail('username', accountDetails.username)); //setUsername(accountDetails.username);
        this.details.push(new  Detail('email', accountDetails.email)); //this.setEmail(accountDetails.email);
        this.details.push(new  Detail('phone', accountDetails.phone)); //this.setPhone(accountDetails.phone);


        this.details.forEach(d => {console.log("detail: " + d.detailName);});
        this.details.forEach((d ) => {

          let accountInput = this.storyInputsInOrder.find(accountInput => accountInput.type.match(d.detailName.valueOf().toString()));
          if (accountInput != null) {
            let dn = d.detailName.replace(/\./gi,'_');
            this.myAccountForm.get(accountInput.name)?.setValue(d.detailValue);
            console.log("detailValue:   "+d.detailValue);
          }
          //let prop: new Prop
        });
        console.log('Account Details is received from server.');
        this.isLoading = false;
      }, (err) => {
        console.log('Can not get user account details');
        this.isLoading = false;
        return throwError(err);
      }, () => {this.isLoading = false;});

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
    return this.tokenStorageService.isSupervisorAdmin();
  }

  saveDetail(accountInputName: string): void {
    if (this.isLoading) {
      //todo: Display confirmation message - wait for previous changing for being save!
    } else {
      this.isLoading = true;
      let changedDetails: Array<Detail> = [];

      let detailInput = this.storyInputsInOrder.find(detailInput => detailInput.name.match(accountInputName));
      if (detailInput != null) {
        changedDetails.push(new Detail(accountInputName,this.myAccountForm.get(accountInputName)?.value));
      }

      this.authService.setAccountDetails(JSON.stringify(changedDetails)).subscribe(
        data => {
          console.log(data);
          this.isSaveDetailSuccess = true;
          this.isSaveDetailFailed = false;
          this.apiResponse.error = false;
          this.saveDetailErrorMessage = JSON.parse(data.message.toString().replace(/\[/gi,'').replace(/]/gi,''));
          this.apiResponse.message = 'Successful Detail Saving';
        },
        error => {
          const errorResponse = JSON.parse(error.error);
          this.apiResponse.error = true;
          this.apiResponse.message = 'Detail Saving error';
          this.saveDetailErrorMessage = errorResponse;
          this.isSaveDetailFailed = true;
          this.isLoading = false;
        },
        () => {
          this.isLoading = false;
          console.log("Detail Saved");
        }
      );


    }
  }

  get username(): AbstractControl {
    return this.myAccountForm.get('username')!;
  }


  setUsername(name: string): void {
    this.myAccountForm.get('username')?.setValue(name)!;
  }

  get email(): AbstractControl {
    return this.myAccountForm.get('email')!;
  }

  setEmail(email: string): void {
    return this.myAccountForm.get('email')?.setValue(email);
  }

  get password(): AbstractControl {
    return this.myAccountForm.get('password')!;
  }

  get phone(): AbstractControl {
    return this.myAccountForm.get('phone')!;
  }

  setPhone(phone: string): void {
    return this.myAccountForm.get('phone')?.setValue(phone);
  }

}
