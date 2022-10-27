import {Component, Input, OnInit} from '@angular/core';
import { StoryInput } from "../../stories/inputs/story-input.model";
//import {Default} from "../../stories/inputs/story-input.stories";


@Component({
  selector: 'storybook-page2',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export default class Page2Component implements OnInit {

  /**
   * Is this the principal call to action on the page?
   */
  storyInputsInOrder: StoryInput[]  = [
    { /*...Default.args?.['storyInput'],*/ id: '1', title: 'Ex.Saul Ramirez', state: 'USER NAME', icon: './assets/images/User2ldpi.png', type: 'text' },
    { /*...Default.args?.['storyInput'],*/ id: '2', title: 'password', state: 'PASSWORD', icon: './assets/images/LockIcon2ldpi.png', type: 'password'  },
  ];

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

  ngOnInit(): void {};

}

