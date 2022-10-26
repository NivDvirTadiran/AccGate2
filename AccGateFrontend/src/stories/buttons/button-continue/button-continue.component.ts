import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'storybook-button-continue',
  templateUrl: './button-continue.component.html',
  /*template: `<div class="storybook-button-continue">
    <img (click)="onClick.emit($event)" [ngClass]="classes" [ngStyle]="{ 'background-color': backgroundColor }"
         src="/assets/images/img_2.png" class="Language-Desktop-Icon"  alt="language-desktop-icon"/>
  </div>`,*/
  styleUrls: ['./button-continue.component.scss'],
})
export class ButtonContinueComponent {

  /**
   * Is this gallery attribute are set?
   */
  @Input()
  gallery = false;

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
  label = 'Continue';

  /**
   * Optional click handler
   */
  @Output()
  onClick = new EventEmitter<Event>();

  public get classes(): string[] {
    const mode = this.primary ? 'storybook-button-continue--primary' : 'storybook-button-continue--secondary';
    const galleryMode = this.gallery ? 'storybook-button-continue--set-in' : 'storybook-button-continue--set-out';

    return ['storybook-button-continue', `storybook-button-continue--${this.size}`, mode, galleryMode];
  }


}
