import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'storybook-tadiran-icon',
  templateUrl: './tadiran-icon.component.html',
  styleUrls: ['./tadiran-icon.component.css']
})
export class TadiranIconComponent {
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
    const mode = this.primary ? 'storybook-tadiran-icon--primary' : 'storybook-tadiran-icon--secondary';

    return ['storybook-tadiran-icon', `storybook-tadiran-icon--${this.size}`, mode];
  }


  constructor() { }

  ngOnInit(): void {
  }

}
