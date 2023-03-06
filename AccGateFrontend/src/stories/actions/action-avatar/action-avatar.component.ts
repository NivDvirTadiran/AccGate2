import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ActionInput} from "../action-input/action-input.interface";
import {TranslateService} from "../../../app/storybook/pipes/translate/translate.service";

@Component({
  selector: 'action-avatar',
  templateUrl: './action-avatar.component.html',
  styleUrls: ['./action-avatar.component.css']
})
export class ActionAvatarComponent implements OnInit {

  bubbleOn?: boolean;
  actionHeader: string = "Your password will expire in 3 Days.";

  @Output() actionButton = new EventEmitter<any>();

  constructor(public _translate: TranslateService) {
  }

  ngOnInit() {
  }

  public setHeader(actionHeader: string) {
    this.actionHeader = this._translate.translate(actionHeader);
  }

  public setBubbleOn(bubbleOn: boolean) {
    this.bubbleOn = bubbleOn;
  }


}
