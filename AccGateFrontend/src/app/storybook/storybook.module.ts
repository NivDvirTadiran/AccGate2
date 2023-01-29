import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


import {ButtonLanguageComponent} from "../../stories/buttons/button-language/button-language.component";
import {ButtonFortestComponent} from '../../stories/buttons/button-fortest/button-fortest.component';
import {ButtonGlobeComponent} from "../../stories/buttons/button-globe/button-globe.component";
import Background1Component from "../../stories/pages/background1/background1Component";
import {ButtonTadiranComponent} from "../../stories/buttons/button-tadiran/button-tadiran.component";
import CardComponent from "../../stories/cards/card/card.component";
import CardRuggedComponent from "../../stories/cards/card-rugged/card-rugged.component";
import LoginFormComponent from "../../stories/forms/login-form/login-form.component";
import RegistryFormComponent from "../../stories/forms/registry-form/registry-form.component";
import {ButtonContinueComponent} from "../../stories/buttons/button-continue/button-continue.component";
import {ButtonExComponent} from "../../stories/buttons/button-ex/button-ex.component";
import {ButtonAppsComponent} from "../../stories/buttons/button-apps/button-apps.component";
import {ButtonSuccessfullyComponent} from "../../stories/buttons/button-successfully/button-successfully.component";
import Button from "../../stories/buttons/button-example/button.component";
import {AppMenuComponent} from "../../stories/app-menu/app-menu.component";
import {StoryInputComponent} from "../../stories/inputs/input/story-input.component";
import {HighlightDirective} from "src/stories/buttons/button-fortest/custom-directive/Highlight.directive";
import ReplacePassFormComponent from "../../stories/forms/replace-pass-form/replace-pass-form.component";
import PassStrengthComponent from "../../stories/pass-strength/pass-strength.component";
import {ApiErrorMessagePipe} from "./pipes/api-error-message.pipe";
import {AvatarComponent} from "../../stories/avatars/avatar.component";
import {AppComponent} from "../app.component";
import { DynamicCompDirective } from '../../stories/directive/dynamic-comp.directive';
import {PopoverDirective} from "../../stories/directive/bubble-avatar/popover.directive";
import { BubbleAvatarComponent } from '../../stories/directive/bubble-avatar/bubble-avatar.component';
import { ActionAvatarComponent } from '../../stories/actions/action-avatar/action-avatar.component';
import {PopoverInputDirective} from "../../stories/directive/bubble-input/popover-input.directive";
import { BubbleInputComponent } from '../../stories/directive/bubble-input/bubble-input.component';
import { ActionInputComponent } from '../../stories/actions/action-input/action-input.component';
import {MdbPopoverModule} from "mdb-angular-ui-kit/popover";

import {MatButtonModule} from "@angular/material/button";
import {ButtonExclamationMarkComponent} from "../../stories/buttons/button-exclamation-mark/button-exclamation-mark.component"
import {ApiErrorMessageService} from "./pipes/api-error-message.service";
import {Spinner1Component} from "../../stories/spinners/spinner1/spinner1.component";
import VerificationFormComponent from "../../stories/forms/verification-form/verification-form.component";
import {DigitcodeInputComponent} from "../../stories/inputs/digitcode-input/digitcode-input.component";
import {CodeInputComponent} from "../../stories/inputs/code-input/code-input.component";
import MyAccountFormComponent from "../../stories/forms/my-account-form/my-account-form.component";
import {AccountInputComponent} from "../../stories/inputs/account-input/account-input.component";
import ForgotPassFormComponent from "../../stories/forms/forgot-pass-form/forgot-pass-form.component";
import ResetPassFormComponent from "../../stories/forms/reset-pass-form/reset-pass-form.component";
import {ButtonConfigurationComponent} from "../../stories/buttons/button-configuration/button-configuration.component";
import ConfigurationFormComponent from "../../stories/forms/configuration-form/configuration-form.component";
import {ConfigurationInputComponent} from "../../stories/inputs/configuration-input/configuration-input.component";







@NgModule({
    declarations: [
        ButtonGlobeComponent, Background1Component, ButtonTadiranComponent, ButtonLanguageComponent,
        ButtonFortestComponent,
        CardComponent, CardRuggedComponent,
        LoginFormComponent, LoginFormComponent, RegistryFormComponent, VerificationFormComponent,
        MyAccountFormComponent, ForgotPassFormComponent, ResetPassFormComponent, ConfigurationFormComponent,
        ButtonContinueComponent, ButtonExComponent, ButtonAppsComponent, ButtonSuccessfullyComponent, Button,
        ButtonConfigurationComponent,
        AppMenuComponent,
        StoryInputComponent, DigitcodeInputComponent, CodeInputComponent, AccountInputComponent, ConfigurationInputComponent,
        HighlightDirective,
        ReplacePassFormComponent,
        PassStrengthComponent,
        ApiErrorMessagePipe,
        AvatarComponent,
        DynamicCompDirective,
        ActionAvatarComponent, PopoverDirective, BubbleAvatarComponent,
        ActionInputComponent, PopoverInputDirective, BubbleInputComponent,
        ButtonExclamationMarkComponent,
        Spinner1Component,


    ],
  imports: [
    CommonModule,
    FormsModule, ReactiveFormsModule, MdbPopoverModule, MatButtonModule,
  ],
  providers: [ ApiErrorMessageService],
  exports: [
    ButtonGlobeComponent, Background1Component, ButtonTadiranComponent, ButtonLanguageComponent,
    ButtonFortestComponent,
    CardComponent, CardRuggedComponent,
    LoginFormComponent, LoginFormComponent, RegistryFormComponent, VerificationFormComponent,
    MyAccountFormComponent, ForgotPassFormComponent,  ResetPassFormComponent, ConfigurationFormComponent,
    ButtonContinueComponent, ButtonExComponent, ButtonAppsComponent, ButtonSuccessfullyComponent, Button,
    ButtonConfigurationComponent,
    AppMenuComponent,
    StoryInputComponent, DigitcodeInputComponent, CodeInputComponent, AccountInputComponent, ConfigurationInputComponent,
    CommonModule,
    FormsModule, ReactiveFormsModule,
    HighlightDirective,
    ReplacePassFormComponent,
    PassStrengthComponent,
    AvatarComponent,
    DynamicCompDirective,
    ActionAvatarComponent   , PopoverDirective, BubbleAvatarComponent,
    ActionInputComponent, PopoverInputDirective, BubbleInputComponent,
    ButtonExclamationMarkComponent,
    Spinner1Component,



  ],
  bootstrap: [AvatarComponent, ]
})
export class StorybookModule { }
