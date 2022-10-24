import {Component, EventEmitter, Input, Output} from '@angular/core';
import { StoryInput } from './story-input.model'


@Component({
  selector: 'storybook-input',
  templateUrl: './story-input.component.html',
  styleUrls: ['./story-input.css']
})
export class StoryInputComponent {

  @Input() storyInput!: StoryInput;

  // tslint:disable-next-line: no-output-on-prefix
  @Output()
  onPinInput = new EventEmitter<Event>();

  // tslint:disable-next-line: no-output-on-prefix
  @Output()
  onArchiveInput = new EventEmitter<Event>();



  /**
   * Component method to trigger the onPin event
   * @param id string
   */
  onPin(id: any) {
    this.onPinInput.emit(id);
  }
  /**
   * Component method to trigger the onArchive event
   * @param id string
   */
  onArchive(id: any) {
    this.onArchiveInput.emit(id);
  }

}
