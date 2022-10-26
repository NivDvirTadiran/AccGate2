import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

import { StoryInput } from "../inputs/story-input.model";


@Component({
  selector: 'storybook-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.css'],
})
export class FormComponent implements OnInit {

  form: any = {
    username: null, //new FormControl('ea2', Validators.min(2)),
    password: null  //new FormControl('zaqwsx', Validators.min(2))
  };

  isLoginFailed = false;
  loginErrorMessage = '';

  openReplacePassword() {
    //this.replacePassFormService.open(ReplacePassFormComponent);
  }



  /**
   * @ignore
   * Component property to define ordering of tasks
   */
  storyInputsInOrder: StoryInput[] = [];

  @Input() isLoggedIn = false;

  // tslint:disable-next-line: no-output-on-prefix
  @Output() onPinInput: EventEmitter<any> = new EventEmitter();

  // tslint:disable-next-line: no-output-on-prefix
  @Output() onArchiveInput: EventEmitter<any> = new EventEmitter();

  @Input()
  set storyInputs(arr: StoryInput[]) {
    const initialTasks = [
      ...arr.filter(t => t.state === 'USER NAME'),
      ...arr.filter(t => t.state !== 'USER NAME'),
    ];
    const filteredTasks = initialTasks.filter(
      t => t.state === 'PASSWORD' || t.state === 'USER NAME'
    );
    this.storyInputsInOrder = filteredTasks.filter(
      t => t.state === 'PASSWORD' || t.state === 'USER NAME'
    );
  }

  onSubmit(): void {
    console.warn('Login Request!');
  }

  ngOnInit(): void {
  }

}

