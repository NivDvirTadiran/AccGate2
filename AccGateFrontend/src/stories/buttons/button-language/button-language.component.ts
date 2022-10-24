import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'storybook-button-language',
  templateUrl: './button-language.component.html',
  styleUrls: ['./button-language.component.css']
})
export class ButtonLanguageComponent {
  /**
   * Is this the principal call to action on the page?
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
    const mode = this.primary ? 'storybook-button-language--primary' : 'storybook-button-language--secondary';

    return ['storybook-button-language', `storybook-language-icon--${this.size}`, mode];
  }


  constructor() { }

  ngOnInit(): void {
  }

}
