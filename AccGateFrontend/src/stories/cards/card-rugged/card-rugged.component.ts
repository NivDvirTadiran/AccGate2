import {Component, EventEmitter, Input, Output} from '@angular/core';


@Component({
  selector: 'storybook-card-rugged',
  templateUrl: './card-rugged.component.html',
  styleUrls: ['./card-rugged.css']
})
export default class CardRuggedComponent {



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
  size: 'small' | 'medium' | 'large'  = 'medium';

  /**
   * Button contents
   *
   * @required
   */
  @Input()
  label = 'Button';

  /**
   * Optional click handler
   */
  @Output()
  onClick = new EventEmitter<Event>();

  public get classes(): string[] {
    const mode = this.primary ? 'storybook-card--primary' : 'storybook-card--secondary';

    return ['storybook-card', `storybook-card--${this.size}`, mode];
  }



}
