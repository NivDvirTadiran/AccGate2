import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


import {ButtonLanguageComponent} from "../../stories/buttons/button-language/button-language.component";
import {ButtonFortestComponent} from '../login2/login-main/button-fortest/button-fortest.component';
import {ButtonGlobeComponent} from "../../stories/buttons/button-globe/button-globe.component";
import Background1Component from "../../stories/pages/background1/background1Component";
import {ButtonTadiranComponent} from "../../stories/buttons/button-tadiran/button-tadiran.component";
import CardComponent from "../../stories/cards/card.component";
import LoginFormComponent from "../../stories/forms/login-form/login-form-component";
import RegistryFormComponent from "../../stories/forms/registry-form/registry-form.component";
import {ButtonContinueComponent} from "../../stories/buttons/button-continue/button-continue.component";
import {ButtonExComponent} from "../../stories/buttons/button-ex/button-ex.component";
import {ButtonAppsComponent} from "../../stories/buttons/button-apps/button-apps.component";
import {ButtonSuccessfullyComponent} from "../../stories/buttons/button-successfully/button-successfully.component";
import Button from "../../stories/buttons/button-example/button.component";
import {AppMenuComponent} from "../../stories/app-menu/app-menu.component";
import {StoryInputComponent} from "../../stories/inputs/story-input.component";



@NgModule({
  declarations: [
    ButtonGlobeComponent, Background1Component, ButtonTadiranComponent, ButtonLanguageComponent,
    ButtonFortestComponent,
    CardComponent,
    LoginFormComponent, LoginFormComponent, RegistryFormComponent,
    ButtonContinueComponent, ButtonExComponent, ButtonAppsComponent, ButtonSuccessfullyComponent, Button,
    AppMenuComponent,
    StoryInputComponent,
  ],
  imports: [
    CommonModule,
    FormsModule, ReactiveFormsModule,
  ],
  exports: [
    ButtonGlobeComponent, Background1Component, ButtonTadiranComponent, ButtonLanguageComponent,
    ButtonFortestComponent,
    CardComponent,
    LoginFormComponent, LoginFormComponent, RegistryFormComponent,
    ButtonContinueComponent, ButtonExComponent, ButtonAppsComponent, ButtonSuccessfullyComponent, Button,
    AppMenuComponent,
    StoryInputComponent,
    CommonModule,
    FormsModule, ReactiveFormsModule,
  ],
})
export class StorybookModule { }
