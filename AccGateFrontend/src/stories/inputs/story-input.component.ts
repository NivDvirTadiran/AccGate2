import {Component, EventEmitter, Input, Output} from '@angular/core';
import { StoryInput } from './story-input.model'
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";

export interface GroupForm {
  username:  FormControl,
  password:  FormControl,
}

export interface ValidationForm {
  validationForm2: GroupForm,
}


@Component({
  selector: 'storybook-input',
  templateUrl: './story-input.component.html',
  styleUrls: ['./story-input.scss']
})
export class StoryInputComponent {

  @Input() storyInput!: StoryInput;

  // tslint:disable-next-line: no-output-on-prefix
  @Output()
  onPinInput = new EventEmitter<Event>();

  // tslint:disable-next-line: no-output-on-prefix
  @Output()
  onArchiveInput = new EventEmitter<Event>();



  showPassChange(): void {
    this.storyInput.type = (this.storyInput?.type == 'password' ? 'text' : 'password')
  }

  @Input() currentForm!: FormGroup;

  /*validationForm = new FormGroup({
    username: new FormControl('', Validators.minLength(2)),
    password: new FormControl('zaqwsx', Validators.minLength(2))
  });


  get username2(): FormControl  {
    return this.currentForm?.controls.username.get();
  }*/

  get username(): AbstractControl {
    return this.currentForm.get('username')!;
  }


  get password(): AbstractControl {
    return this.currentForm.get('password')!;
  }

  get formControler(): AbstractControl {

    let alertType = this.storyInput?.title.toString();

    switch (alertType) {
      case "username":
        return this.currentForm.get('username')!;
      case "password":
        return this.currentForm.get('password')!;
      default:
        console.log('N');
        break;
    }
    return this.currentForm.get('username')!;
  }
/*
*/

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
