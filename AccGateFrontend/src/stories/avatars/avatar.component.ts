import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit,
} from '@angular/core';
import {PopoverOptions} from "../directive/popover.interface";
import {ActionAvatarComponent} from "../actions/action-avatar/action-avatar.component";
/**/
@Component({
  selector: 'storybook-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.scss'],
})
export  class AvatarComponent {
  popover: PopoverOptions = {
    content: ActionAvatarComponent
  };


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
  size: 'small' | 'medium' | 'large' = 'medium';

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
    const mode = this.primary ? 'storybook-avatar--primary' : 'storybook-avatar--secondary';

    return ['sstorybook-avatar', `storybook-avatar--${this.size}`, mode];
  }

  ngOnInit(): void {
  }
}
