import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'storybook-button-edit-save',
  templateUrl: './button-edit-save.component.html',
  styleUrls: ['./button-edit-save.component.scss']
})
export class ButtonEditSaveComponent {
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
   * Optional click handler
   */
  @Output()
  onStateChange: EventEmitter<string> = new EventEmitter<string>();

  @Input()
  state: string = 'edit';

  changeStae() {
    this.state = (this.state == 'edit' ? 'save' : 'edit')
    this.onStateChange.emit(this.state);
  }

  /**
   * Optional click handler
   */
  @Output()
  onClick = new EventEmitter<Event>();

  public get classes(): string[] {
    const mode = this.primary ? 'storybook-button-edit-save--primary' : 'storybook-button-edit-save--secondary';

    return ['storybook-button-edit-save', `storybook-button-edit-save--${this.state}`, mode];
  }


  constructor() { }

  ngOnInit(): void {
  }

}
