import {Component, EventEmitter, Input, Output} from '@angular/core';


@Component({
  selector: 'storybook-pass-strength',
  templateUrl: './pass-strength.component.html',
  styleUrls: ['./pass-strength.scss']
})
export default class PassStrengthComponent {

  /**
   * Is this the principal call to action on the login-main?
   */
  @Input() primary: boolean = false;


  /**
   * The password strength in percentage.
   */
  @Input() strength: number = 10;

  /**
   * What background color to use
   */
  @Input() backgroundColor?: string;

  public strengthColor() {
    let strength=this.strength;

    if (strength < 30) return 0;
    if (strength < 40) return 30;
    if (strength < 50) return 40;
    if (strength < 60) return 50;
    if (strength < 70) return 60;
    if (strength < 90) return 70;
    if (strength < 99) return 90;
    return 100;
  }

  public get classes(): string[] {
    const mode = this.primary ? 'storybook-pass-strength--primary' : 'storybook-pass-strength--secondary';

    return ['storybook-pass-strength', `storybook-pass-strength--${this.strengthColor()}`, mode];
  }

}

