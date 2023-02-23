import {Component, ElementRef, EventEmitter,Inject, OnInit, Output, Renderer2, ViewChild} from '@angular/core';
import { UserService } from 'src/app/_services/user.service';
import {AuthService} from "src/app/_services/auth.service";
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";
import {ConfigurationInput} from "../../../../stories/inputs/configuration-input/configuration-input.model";
import {EventBusService} from "../../../_shared/event-bus.service";
import {TokenStorageService} from "../../../_services/token-storage.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import MyAccountFormComponent from "../../../../stories/forms/my-account-form/my-account-form.component";
import * as mStoryInput from "../../../../stories/inputs/configuration-input/configuration-input.stories";
import {PasswordValidators} from "../../login-main/replace-pass-form2/replace-pass-form2.component";
import {throwError} from "rxjs";
import {EventData} from "../../../_shared/event.class";
import {MyAccountData} from "../my-account-form2/my-account-form2.component";
import {ActivatedRoute, Router} from "@angular/router";
import {PinCodeLength} from "../../../../stories/inputs/configuration-input/configuration-input.stories";



export class Prop {
  propName: string= '';
  propValue: string= '';

  Prop(propName: string , propValue: string) {
    this.propName = propName;
    this.propValue = propValue;
  }

  getPropName(): string {
  return this.propName;
  }

}



@Component({
  selector: 'app-board-admin2',
  templateUrl: './board-admin2.component.html',
  styleUrls: ['./board-admin2.component.css']
})
export class BoardAdmin2Component implements OnInit {
  configurationForm: FormGroup;
  isConfigSuccess = false;
  isConfigFailed = false;
  submitted = false;
  configErrorMessage: any;
  empList: Array<String> = [];
  apiResponse = { message: '', error: false };
  @ViewChild('form', { static: false }) form?: ElementRef;
  @ViewChild('username', { static: false }) userField?: ElementRef;
  configurationData: any;
  closeResult = '';

  properties: Array<Prop>= [];





  @Output() validateMail: EventEmitter<String> = new EventEmitter();

  storyInputsInOrder: ConfigurationInput[]  = [
    {...mStoryInput.PassExpDays.args?.['storyInput'], id: '1'  },
    {...mStoryInput.PreviousAlertPassExpDays.args?.['storyInput'], id: '2'  },
    {...mStoryInput.TSV.args?.['storyInput'], id: '3'  },
    {...mStoryInput.PinCodeLength.args?.['storyInput'], id: '4'  },
    {...mStoryInput.PinCodeValDura.args?.['storyInput'], id: '5'  },
  ];

  constructor(private eventBusService: EventBusService,
              private token: TokenStorageService,
              private authService: AuthService,
              private router: Router,
              private activatedRoute:ActivatedRoute,
              /*public dialogRef: MatDialogRef<MyAccountFormComponent>,
              @Inject(MAT_DIALOG_DATA) public data: MyAccountData*/) {
    this.configurationForm = new FormGroup({
      tadiran_gate_passExpDays: new FormControl(22),
      tadiran_gate_PreviousAlertPassExpDays: new FormControl(15),
      tadiran_gate_TSV: new FormControl(false),/**/
      tadiran_gate_pinCodeLength: new FormControl(4),
      tadiran_gate_pinCodeValDura: new FormControl(15),
    });
    this.empList.push("admin");
  }

  ngOnInit(): void {
    this.getConfigurationData();
    /*this.userService.getAccountDetails().subscribe(
      data => { this.accountDetails = data; },
      err => { this.accountDetails = JSON.parse(err.error).message; }
    );*/
  }


  // Change name of property Ex. "tadiran.gate.pass-exp-days" => "tadiran_gate_passExpDays"
  changeNameToField(propName: string) {
    return propName.replace(/\./gi,'_')
      .split("-").map(function(input){return (!!input) ? input.charAt(0).toUpperCase() + input.substr(1).toLowerCase() : ''}).join("");
  }

  getConfigurationData(): void {
    //let prop: any;
    const token = this.token.getToken();
    if (token)
      this.authService.getConfigurationData().subscribe(configurationData => {
        this.configurationData=configurationData;

        this.properties = (this.configurationData.prop as Array<Prop>);
        this.properties.forEach((p ) => {
          //console.log("propName: "+p.propName+"     propValue: "+p.propValue);
          let configInput = this.storyInputsInOrder.find(configInput => configInput.type.match(p.propName.valueOf().toString()));
          if (configInput != null) {
            let pn = p.propName.replace(/\./gi,'_');
            this.configurationForm.get(configInput.name)?.setValue(p.propValue);
            console.log("propValue:   "+p.propValue);
          }
          //let prop: new Prop
        });

        console.log('Properties Configurations is received from server.');
      }, (err) => {
        console.log('Can not get user account details');
        return throwError(err);
      });

  }

  doLogout(): void {
    console.log("logging out");
    this.eventBusService.emit(new EventData('logout', null));
  }

  openChangePassword() {
    this.eventBusService.emit(new EventData('openChangePassword', null));
  }

  returnPortal() {
    //todo: display warn message to user - changes will not be saved!
    console.log("openPortal");
    this.router.navigate(['../'], {relativeTo: this.activatedRoute});
    //this.eventBusService.emit(new EventData('openPortal', null));
  }

  onSubmit(): void {
    if (this.isConfigSuccess) {
      //todo: Display confirmation message - changes have been applied!
    }
    else {
      this.submitted = true;
      let changedProperties: Array<Prop>=[] ;

      this.properties.forEach((p ) => {
        //console.log("propName: "+p.propName+"     propValue: "+p.propValue);
        let configInput = this.storyInputsInOrder.find(configInput => configInput.type.match(p.propName.valueOf().toString()));
        if (configInput != null) {
          p.propValue = this.configurationForm.get(configInput.name)?.value;
          console.log("propValue:   "+p.propValue);
          changedProperties.push(p);
        }
      });


      this.authService.setConfigurationData(JSON.stringify(changedProperties)).subscribe(
        data => {
          console.log(data);
          this.isConfigSuccess = true;
          this.isConfigFailed = false;
          this.apiResponse.error = false;
          this.apiResponse.message = 'Successful configuration';
        },
        error => {
          const errorResponse = JSON.parse(error.error);
          this.apiResponse.error = true;
          this.apiResponse.message = 'Configuration error';
          this.configErrorMessage = errorResponse;
          this.isConfigFailed = true;
        },
        () => {
          console.log("Configuration Saved");}
      );
    }
  }


}


