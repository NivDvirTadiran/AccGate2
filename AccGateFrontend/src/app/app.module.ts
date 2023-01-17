import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

//import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';



import { authInterceptorProviders } from './_helpers/auth.interceptor';
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
import { ModalModule, ButtonsModule, MDBBootstrapModule } from 'angular-bootstrap-md';

import {ApiErrorMessagePipe} from "./pipes/api-error-message.pipe";
import {LoginErrorMessagePipe} from "./pipes/login-error-message.pipe";


import {Login2Module} from "./login2/login2.module";
import {StorybookModule} from "./storybook/storybook.module";
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {MdbValidationModule} from "mdb-angular-ui-kit/validation";
import {MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";
import ForgotPassForm2Component from "./login2/login-main/forgot-pass-form2/forgot-pass-form2.component";
import ResetPassForm2Component from "./login2/login-main/reset-pass-form2/reset-pass-form2.component";
import {AppRoutingModule} from "./app-routing.module";
import {Profile2Module} from "./login2/profile2/profile2.module";




@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        ApiErrorMessagePipe,
        LoginErrorMessagePipe,
        ForgotPassForm2Component,
        ResetPassForm2Component,

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
        Profile2Module,
        StorybookModule,
        MatDialogModule,
        MatButtonModule,


    ],
    providers: [
        authInterceptorProviders,
        AppComponent,
        {provide: LocationStrategy, useClass: HashLocationStrategy}
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }


platformBrowserDynamic().bootstrapModule(AppModule);
