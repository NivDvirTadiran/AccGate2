import {Component, ElementRef, EventEmitter, OnInit, Output, Renderer2, ViewChild} from '@angular/core';
import {ActionInput} from "../action-input/action-input.interface";
import {TranslateService} from "../../../app/storybook/pipes/translate/translate.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AppConfig} from "../../../app/app.config";

@Component({
  selector: 'action-lang',
  templateUrl: './action-language.component.html',
  styleUrls: ['./action-language.component.css']
})
export class ActionLanguageComponent implements OnInit {



  bubbleOn?: boolean;
  actionHeader?: string = "";

  @Output() actionLanguage = new EventEmitter<any>();

  selectedLanguage:string="eng";
  changeLanguage(newLang: any){
    console.log("lang set to"+newLang);
    this._translate.use(newLang);
    AppConfig.translateLanguage.lang = newLang;
    AppConfig.translateLanguage.lang = (newLang == 'heb' ? 'rtl' : 'ltr');
  }


  constructor(public _translate: TranslateService) {}

  ngOnInit() {
    this._translate.use(AppConfig.translateLanguage.lang);
  }

  public setHeader(actionHeader: string) {
    this.actionHeader = actionHeader;
  }

  public setBubbleOn(bubbleOn: boolean) {
    this.bubbleOn = bubbleOn;
  }


}
