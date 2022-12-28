import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import Profile2Component from './profile2/profile2.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardUserComponent } from './board-user/board-user.component';

import { authInterceptorProviders, AuthInterceptor } from './_helpers/auth.interceptor';
import {NgbDatepickerModule} from "@ng-bootstrap/ng-bootstrap";
import { MdbAccordionModule } from 'mdb-angular-ui-kit/accordion';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
import { MdbCheckboxModule } from 'mdb-angular-ui-kit/checkbox';
import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';
import { MdbDropdownModule } from 'mdb-angular-ui-kit/dropdown';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { MdbModalModule } from 'mdb-angular-ui-kit/modal';
import { MdbPopoverModule } from 'mdb-angular-ui-kit/popover';
import { MdbRadioModule } from 'mdb-angular-ui-kit/radio';
import { MdbRangeModule } from 'mdb-angular-ui-kit/range';
import { MdbRippleModule } from 'mdb-angular-ui-kit/ripple';
import { MdbScrollspyModule } from 'mdb-angular-ui-kit/scrollspy';
import { MdbTabsModule } from 'mdb-angular-ui-kit/tabs';
import { MdbTooltipModule } from 'mdb-angular-ui-kit/tooltip';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalModule, TooltipModule, PopoverModule, ButtonsModule, MDBBootstrapModule } from 'angular-bootstrap-md';
import { RegisterFormComponent } from './login/register-form/register-form.component';
import {ReplacePassFormComponent} from "./login/replace-pass-form/replace-pass-form.component";
//import {ReplacePassForm2Component} from "./login2/login2.module";
import {ApiErrorMessagePipe} from "./pipes/api-error-message.pipe";
import {LoginErrorMessagePipe} from "./pipes/login-error-message.pipe";
import Button from '../stories/buttons/button-example/button.component'

//import {TaskListComponent} from '../stories/task-list/task-list.component'
import {Login2Module} from "./login2/login2.module";
import {StorybookModule} from "./storybook/storybook.module";
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {MdbValidationModule} from "mdb-angular-ui-kit/validation";
import {MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";






@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        RegisterComponent,
        //Register2Component,
        HomeComponent,
        ProfileComponent,
        Profile2Component,
        BoardAdminComponent,
        BoardModeratorComponent,
        BoardUserComponent,
        RegisterFormComponent,
        ApiErrorMessagePipe,
        LoginErrorMessagePipe,
        //ReplacePassForm2Component,
        ReplacePassFormComponent



    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbDatepickerModule,
    MdbAccordionModule,
    MdbCarouselModule,
    MdbCheckboxModule,
    MdbCollapseModule,
    MdbDropdownModule,
    MdbFormsModule,
    MdbModalModule,
    MdbPopoverModule,
    MdbRadioModule,
    MdbRangeModule,
    MdbRippleModule,
    MdbScrollspyModule,
    MdbTabsModule,
    MdbTooltipModule,
    MdbValidationModule,
    BrowserAnimationsModule,
    ModalModule,
    ButtonsModule,
    MDBBootstrapModule.forRoot(),
    Login2Module,
    StorybookModule,
    MatDialogModule,
    MatButtonModule,
  ],
  providers: [
    authInterceptorProviders,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


platformBrowserDynamic().bootstrapModule(AppModule);
