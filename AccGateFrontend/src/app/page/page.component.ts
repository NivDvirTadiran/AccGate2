import {Component, Input} from '@angular/core';



@Component({
  selector: 'storybook-page2',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export default class Page2Component {

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
}

