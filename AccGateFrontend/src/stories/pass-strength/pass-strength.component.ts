import {Component, OnChanges, Input, SimpleChange} from '@angular/core';


@Component({
  selector: 'storybook-pass-strength',
  templateUrl: './pass-strength.component.html',
  styleUrls: ['./pass-strength.scss']
})
export default class PassStrengthComponent implements OnChanges  {

  /**
   * Is this the principal call to action on the login-main?
   */
  @Input() primary: boolean = false;


  /**
   * The password strength in percentage.
   */
  @Input() strength: number = 0;

  /**
   * What background color to use
   */
  @Input() backgroundColor?: string;

  /**
   * The password to measure.
   */
  @Input() passwordToCheck?: string;

  private static measureStrength(pass: string) {
    let score = 0;
    // award every unique letter until 5 repetitions
    let letters: any = {};
    for (let i = 0; i< pass.length; i++) {
      letters[pass[i]] = (letters[pass[i]] || 0) + 1;
      score += 5.0 / letters[pass[i]];
    }
    // bonus points for mixing it up
    let variations: any = {
      digits: /\d/.test(pass),
      lower: /[a-z]/.test(pass),
      upper: /[A-Z]/.test(pass),
      nonWords: /\W/.test(pass),
    };

    let variationCount = 0;
    for (let check in variations) {
      variationCount += (variations[check]) ? 1 : 0;
    }
    score += (variationCount - 1) * 10;
    return Math.trunc(score);
  }

  public strengthColor(strength: number) {

    if (strength < 10) return 0;
    if (strength < 20) return 10;
    if (strength < 30) return 20;
    if (strength < 40) return 30;
    if (strength < 50) return 40;
    if (strength < 60) return 50;
    if (strength < 70) return 60;
    if (strength < 90) return 70;
    if (strength < 99) return 90;

    return 100;
  }

  ngOnChanges(changes: {[propName: string]: SimpleChange}): void {
    var password = changes['passwordToCheck'].currentValue;
    if (password) {
      this.strength = PassStrengthComponent.measureStrength(password);
    }
  }


  public get classes(): string[] {
    const mode = this.primary ? 'storybook-pass-strength--primary' : 'storybook-pass-strength--secondary';

    return ['storybook-pass-strength', `storybook-pass-strength--${this.strengthColor(this.strength)}`, mode];
  }

}

