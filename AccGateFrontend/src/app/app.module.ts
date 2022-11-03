import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
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
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { MdbTooltipModule } from 'mdb-angular-ui-kit/tooltip';
import { MdbValidationModule, MdbErrorDirective, MdbSuccessDirective } from 'mdb-angular-ui-kit/validation';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdbInputDirective  } from 'mdb-angular-ui-kit/forms';
import { ModalModule, TooltipModule, PopoverModule, ButtonsModule, MDBBootstrapModule } from 'angular-bootstrap-md';
import { RegisterFormComponent } from './register-form/register-form.component';
import {ReplacePassFormComponent} from "./replace-pass-form/replace-pass-form.component";
import {ApiErrorMessagePipe} from "./pipes/api-error-message.pipe";
import {LoginErrorMessagePipe} from "./pipes/login-error-message.pipe";
import  Login2Component  from './login2/login2.component';
import { TaskComponent } from '../stories/task/task.component';
import { ButtonLanguageComponent } from '../stories/buttons/button-language/button-language.component';
import { ButtonTadiranComponent } from '../stories/buttons/button-tadiran/button-tadiran.component';
import { ButtonContinueComponent } from '../stories/buttons/button-continue/button-continue.component';
import Button from '../stories/buttons/button-example/button.component'
import { ButtonGlobeComponent } from '../stories/buttons/button-globe/button-globe.component'
import CardComponent from '../stories/cards/card.component'
import {StoryInputComponent} from '../stories/inputs/story-input.component'
import {FormComponent} from '../stories/forms/form.component'
import {TaskListComponent} from '../stories/task-list/task-list.component'
import Background1Component from '../stories/pages/background1/background1Component'
import { AppMenuComponent } from '../stories/app-menu/app-menu.component'
import {ButtonAppsComponent} from "../stories/buttons/button-apps/button-apps.component";

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        RegisterComponent,
        HomeComponent,
        ProfileComponent,
        Profile2Component,
        BoardAdminComponent,
        BoardModeratorComponent,
        BoardUserComponent,
        RegisterFormComponent,
        ReplacePassFormComponent,
        ApiErrorMessagePipe,
        LoginErrorMessagePipe,
        Login2Component,
        ButtonLanguageComponent,
        ButtonTadiranComponent,
        Button,
        CardComponent,
        StoryInputComponent,
        FormComponent,
        TaskComponent,
        TaskListComponent,
        ButtonGlobeComponent,
        ButtonContinueComponent,
        Background1Component,
        AppMenuComponent,
        ButtonAppsComponent,

    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
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
    //MdbValidationModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    ModalModule,
    ButtonsModule,
    MDBBootstrapModule.forRoot(),
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
