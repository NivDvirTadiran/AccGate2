import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'storybook-button-successfully',
  templateUrl: './button-successfully.component.html',
  styleUrls: ['./button-successfully.component.css']
})
export class ButtonSuccessfullyComponent {
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
    const mode = this.primary ? 'storybook-button-successfully--primary' : 'storybook-button-successfully--secondary';

    return ['storybook-button-successfully', `storybook-button-successfully--${this.size}`, mode];
  }


  constructor() { }

  ngOnInit(): void {
  }

}
