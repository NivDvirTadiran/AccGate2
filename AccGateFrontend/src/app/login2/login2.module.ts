import { NgModule } from '@angular/core';

import { Login2RoutingModule } from './login2-routing.module';
import RegisterForm2Component  from './login-main/register-form2/register-form2.component';
import {LoginMainComponent} from './login-main/login-main.component';
import {StorybookModule} from "../storybook/storybook.module";
import {MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";
import {ReplacePassForm2Component} from "./login-main/replace-pass-form2/replace-pass-form2.component";
import VerificationForm2Component from "./login-main/verification-form2/verification-form2.component";
import {Profile2Module} from "./profile2/profile2.module";




@NgModule({
  declarations: [
    ReplacePassForm2Component,
    RegisterForm2Component,
    VerificationForm2Component,
    LoginMainComponent,
  ],
  imports: [
    Login2RoutingModule,
    StorybookModule,
    MatDialogModule,
    MatButtonModule,
    Profile2Module
  ],
  exports: [
    ReplacePassForm2Component,
    RegisterForm2Component
  ],
  providers: [ReplacePassForm2Component],
  bootstrap: []
})
export class Login2Module { }
