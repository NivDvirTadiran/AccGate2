import {Component, Input, OnInit} from '@angular/core';



@Component({
  selector: 'storybook-page2',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export default class Page2Component implements OnInit {

  /**
   * Is this the principal call to action on the page?
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
    const mode = this.primary ? 'storybook-page2--primary' : 'storybook-page2--secondary';

    return ['storybook-page2', mode];
  }

  constructor() {}

  ngOnInit(): void {}
}

