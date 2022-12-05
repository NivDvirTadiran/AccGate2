import { NgModule } from '@angular/core';

import { Login2RoutingModule } from './login2-routing.module';
import RegisterForm2Component  from './login-main/register-form2/register-form2.component';
import { LogtestComponent } from './logtest/logtest.component';
import {LoginMainComponent, /*DialogOverviewExampleDialog*/} from './login-main/login-main.component';
import {TaskComponent } from "src/stories/task/task.component";
import {TaskListComponent} from "../../stories/task-list/task-list.component";
import {Login2Component} from "./login2.component";
import {StorybookModule} from "../storybook/storybook.module";
import {MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";
import {ReplacePassForm2Component} from "./login-main/replace-pass-form2/replace-pass-form2.component";




@NgModule({
  declarations: [
    ReplacePassForm2Component,
    RegisterForm2Component,
    TaskComponent, TaskListComponent,
    LogtestComponent,
    Login2Component,
    LoginMainComponent,


    //PopoverDirective,
    //ExtentionDialog,
    //DialogOverviewExampleDialog


  ],
  imports: [
    Login2RoutingModule,
    StorybookModule,
    MatDialogModule,
    MatButtonModule,
  ],
  exports: [
    ReplacePassForm2Component
  ],
  bootstrap: [Login2Component]
})
export class Login2Module { }
