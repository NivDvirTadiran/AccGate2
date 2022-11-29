import { Component, OnInit } from '@angular/core';
import {ActionInput} from "./action-input.interface";


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
  actionHeader?: string = "The password must contain:";

  constructor() {

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
