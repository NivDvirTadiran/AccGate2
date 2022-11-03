import {Component, Input, OnInit} from '@angular/core';



@Component({
  selector: 'storybook-background1',
  templateUrl: './background1Component.html',
  styleUrls: ['./background1Component.scss']
})
export default class Background1Component implements OnInit {


  /**
   * Is this the principal call to action on the login2?
   */
  @Input()
  primary = true;

  /**
   * What background color to use
   */
  @Input()
  backgroundColor?: string;


  /**
   * What background color to use
   */
  @Input()
  background?: string;

  /**
   * Button contents
   *
   * @required
   */
  @Input()
  label = 'Page2Component';

  /*user: User | null = null;

  doLogout() {
    this.user = null;
  }

  doLogin() {
    this.user = { name: 'Jane Doe' };
  }

  doCreateAccount() {
    this.user = { name: 'Jane Doe' };

  }*/

  public get classes(): string[] {
    const mode = this.primary ? 'storybook-background1--primary' : 'storybook-background1--secondary';

    return ['storybook-background1', mode];
  }

  constructor() {}

  ngOnInit(): void {};


}

