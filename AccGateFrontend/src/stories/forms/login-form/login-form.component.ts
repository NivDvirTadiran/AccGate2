import {Component, ElementRef, EventEmitter, Input, OnInit, Output, Renderer2, ViewChild} from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { StoryInput } from "../../inputs/input/story-input.model";
import { AuthService } from '../../../app/_services/auth.service';
//import {ApiErrorMessageService} from "../../../app/storybook/pipes/api-error-message.service";
//import {ApiErrorMessageService} from "../../../app/storybook/pipes/api-error-message.service";




@Component({
  selector: 'storybook-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.css'],
})
export default class LoginFormComponent implements OnInit {


  param = {language: 'login-main'};

  @Input() formService!: AuthService;

  @Input() isLoginFailed = false;

  @Input() loginErrorMessage = '';

  @Input() isLoading: boolean = false;


  openReplacePassword() {
    //this.replacePassFormService.open(ReplacePassForm2Component);
  }

  constructor(/*private apiErrorMessage: ApiErrorMessageService*/) {

  }



  /**
   * @ignore
   * Component property to define ordering of Inputs
   */
  storyInputsInOrder: StoryInput[] = [];

  @Input() mForm: FormGroup = new FormGroup({});

  @Input() isLoggedIn = false;

  // tslint:disable-next-line: no-output-on-prefix
  @Output() onPinInput: EventEmitter<any> = new EventEmitter();

  // tslint:disable-next-line: no-output-on-prefix
  @Output() onArchiveInput: EventEmitter<any> = new EventEmitter();

  @Output() sendLoginReq = new EventEmitter();

  @Output() openForgetPassForm = new EventEmitter();


  @Input()
  set storyInputs(arr: StoryInput[]) {
    const initialTasks = [
      ...arr.filter(t => t.state === 'USER NAME'),
      ...arr.filter(t => t.state !== 'USER NAME'),
    ];
    const filteredTasks = initialTasks.filter(
      t => t.type === 'password' || t.state === 'USER NAME'
    );
    this.storyInputsInOrder = filteredTasks.filter(
      t => t.type === 'password' || t.state === 'USER NAME'
    );
  }

  onSubmit(): void {
    console.warn('Login Request!');

    this.sendLoginReq.emit();
  }

  ngOnInit(): void {
  }


  get userName(): AbstractControl {
    return this.mForm?.get('username')!;
  }

  get email(): AbstractControl {
    return this.mForm?.get('email')!;
  }

  get password(): AbstractControl {
    return this.mForm?.get('password')!;
  }

  get phone(): AbstractControl {
    return this.mForm?.get('phone')!;
  }


}

