import {Component, EventEmitter, Input, Output} from '@angular/core';

import { StoryInput } from "../inputs/story-input.model";


@Component({
  selector: 'storybook-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.css'],
})
export class FormComponent  {

  /**
   * @ignore
   * Component property to define ordering of tasks
   */
  storyInputsInOrder: StoryInput[] = [];

  @Input() loading = false;

  // tslint:disable-next-line: no-output-on-prefix
  @Output() onPinInput: EventEmitter<any> = new EventEmitter();

  // tslint:disable-next-line: no-output-on-prefix
  @Output() onArchiveInput: EventEmitter<any> = new EventEmitter();

  @Input()
  set storyInputs(arr: StoryInput[]) {
    const initialTasks = [
      ...arr.filter(t => t.state === 'INPUT_PINNED'),
      ...arr.filter(t => t.state !== 'INPUT_PINNED'),
    ];
    const filteredTasks = initialTasks.filter(
      t => t.state === 'INPUT_INBOX' || t.state === 'INPUT_PINNED'
    );
    this.storyInputsInOrder = filteredTasks.filter(
      t => t.state === 'INPUT_INBOX' || t.state === 'INPUT_PINNED'
    );
  }

}

