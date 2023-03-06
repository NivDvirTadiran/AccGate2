import { Component, Input, Output, EventEmitter } from '@angular/core';
import {TranslateService} from "../../../app/storybook/pipes/translate/translate.service";

@Component({
  selector: 'storybook-button-configuration',
  templateUrl: './button-configuration.component.html',
  styleUrls: ['./button-configuration.component.css']
})
export class ButtonConfigurationComponent {
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

  @Input() _translate?: TranslateService;
  /**
   * Optional click handler
   */
  @Output()
  onClick = new EventEmitter<Event>();

  public get classes(): string[] {
    const mode = this.primary ? 'storybook-button-form--primary' : 'storybook-button-form--secondary';

    return ['storybook-button-form', `storybook-language-icon--${this.size}`, mode];
  }


  constructor() { }

  ngOnInit(): void {
  }

}
