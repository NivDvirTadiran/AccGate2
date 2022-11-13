import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'storybook-button-apps',
  templateUrl: './button-apps.component.html',
  styleUrls: ['./button-apps.component.css']
})
export class ButtonAppsComponent {
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
   * What application should the button linked to?
   */
  @Input()
  application: 'Agent' | 'WebRT' | 'GCCS' | 'Admin' = 'Admin';

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
    const mode = this.primary ? 'storybook-button-apps--primary' : 'storybook-button-apps--secondary';

    return ['storybook-button-apps', `storybook-button-apps--${this.application}`, mode];
  }


  constructor() { }

  ngOnInit(): void {
  }

}
