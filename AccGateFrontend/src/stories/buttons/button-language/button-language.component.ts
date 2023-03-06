import { Component, Input, Output, EventEmitter } from '@angular/core';
import {PopoverOptions} from "../../directive/popover.interface";
import {ActionLanguageComponent} from "../../actions/action-language/action-language.component";
import {AppConfig} from "../../../app/app.config";


@Component({
  selector: 'storybook-button-language',
  templateUrl: './button-language.component.html',
  styleUrls: ['./button-language.component.css']
})
export class ButtonLanguageComponent {
  /**
   * Is this the principal call to action on the login-main?
   */
  @Input()
  primary = false;

  /**
   * What background color to use
   */
  @Input()
  backgroundColor?: string;

  /**
   * How large should the button be?
   */
  @Input()
  size: 'small' | 'medium' | 'large' = 'medium';

  /**
   * Button contents
   *
   * @required
   */
  @Input()
  label = 'accGateButton2';

  /**
   * Optional click handler
   */
  @Output()
  onClick = new EventEmitter<Event>();

  public get classes(): string[] {
    const mode = this.primary ? 'storybook-button-form--primary' : 'storybook-button-form--secondary';

    return ['storybook-button-form', `storybook-language-icon--${this.size}`, mode];
  }

  popover: PopoverOptions = {
    content: ActionLanguageComponent
  };

  @Input()
  isNotify: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }



}
