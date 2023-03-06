import { Component, OnInit } from '@angular/core';
import {ActionInput} from "./action-input.interface";
import {TranslateService} from "../../../app/storybook/pipes/translate/translate.service";


interface USERS {
  conditionName: String;
  presentingMessage: String;
  isFulfilled: boolean;
}

@Component({
  selector: 'action-input',
  templateUrl: './action-input.component.html',
  styleUrls: ['./action-input.component.css']
})
export class ActionInputComponent implements OnInit {

  actionInputs?: ActionInput[];
  actionHeader: string = "The password must contain:";
  direction = this._translate.currentDir;

  constructor(public _translate: TranslateService) {

  }

  ngOnInit() {
  }

  public setConditions(actionInputs: ActionInput[]) {
    this.actionInputs = actionInputs;
  }

  public setHeader(actionHeader: string) {
    this.actionHeader = actionHeader;
  }
}
