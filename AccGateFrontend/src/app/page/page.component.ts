import {Component, Input, OnInit} from '@angular/core';
import { StoryInput } from "../../stories/inputs/story-input.model";


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
    { id: '1', title: 'Something', state: 'INPUT_PINNED' },
    { id: '2', title: 'Something more', state: 'INPUT_PINNED' },
    { id: '3', title: 'Something else', state: 'INPUT_PINNED' },
    { id: '4', title: 'Something again', state: 'INPUT_INBOX' },
    { id: '6', title: 'StoryInput 6 (pinned)', state: 'INPUT_PINNED'}
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

