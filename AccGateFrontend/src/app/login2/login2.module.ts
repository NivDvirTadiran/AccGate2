import { NgModule } from '@angular/core';
//import { CommonModule } from '@angular/common';
//import { BrowserModule } from '@angular/platform-browser';
//import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { Login2RoutingModule } from './login2-routing.module';
import RegisterForm2Component  from './login-main/register-form2/register-form2.component';
//import Background1Component from 'src/stories/pages/background1/background1Component'
import { LogtestComponent } from './logtest/logtest.component';
import {LoginMainComponent, DialogOverviewExampleDialog} from './login-main/login-main.component';
import { AppModule } from "src/app/app.module";
import {TaskComponent } from "src/stories/task/task.component";
import {TaskListComponent} from "../../stories/task-list/task-list.component";
//import LoginFormComponent from '../../stories/forms/login-form/login-form-component'
//import {ButtonsModule} from "angular-bootstrap-md";
//import {AppComponent} from "../app.component";
import {Login2Component} from "./login2.component";
import {StorybookModule} from "../storybook/storybook.module";
import {MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";



@NgModule({
  declarations: [

    RegisterForm2Component,
    TaskComponent, TaskListComponent,
    LogtestComponent,
    Login2Component,
    LoginMainComponent,
    //ExtentionDialog,
    DialogOverviewExampleDialog


  ],
  imports: [
    //BrowserModule,
    //FormsModule,
    //ButtonsModule,
    Login2RoutingModule,
    StorybookModule,
    MatDialogModule,
    MatButtonModule,

    //LoginFormComponent.apply(LogtestComponent),

    /*  AppModule,
 /*
               Background1Component,*/
  ],
  exports: [
    //Login2Component
  ]

  //bootstrap: [Login2Component]
})
export class Login2Module { }
