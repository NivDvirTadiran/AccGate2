import {Component, ElementRef, EventEmitter, Input, OnInit, Output, Renderer2, ViewChild} from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { StoryInput } from "../../inputs/story-input.model";
import { AuthService } from '../../../app/_services/auth.service';




@Component({
  selector: 'storybook-login-form',
  templateUrl: './login-form-component.html',
  styleUrls: ['./login-form.css'],
})
export default class LoginFormComponent implements OnInit {




  @Input() formService!: AuthService;

  credentials: any = {
    username: null,
    password: null
  };


  isLoginFailed = false;
  loginErrorMessage = '';

  openReplacePassword() {
    //this.replacePassFormService.open(ReplacePassForm2Component);
  }

  constructor() {

  }



  /**
   * @ignore
   * Component property to define ordering of tasks
   */
  storyInputsInOrder: StoryInput[] = [];

  @Input() mForm: FormGroup = new FormGroup({}); /* = new FormGroup({
  username: new FormControl('Telecom4', Validators.minLength(2)),
  password: new FormControl('T@diran2022', Validators.minLength(2)),
});*/

/*
  validationFormInOrder: { [p: string]: AbstractControl } =[];
  @Input()
  set registerForm(arr: FormGroup) {
    this.validationFormInOrder = arr.controls
  }*/

  @Input() isLoggedIn = false;

  // tslint:disable-next-line: no-output-on-prefix
  @Output() onPinInput: EventEmitter<any> = new EventEmitter();

  // tslint:disable-next-line: no-output-on-prefix
  @Output() onArchiveInput: EventEmitter<any> = new EventEmitter();

  @Output() newItemEvent = new EventEmitter<any>();


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
    this.credentials.username=this.mForm?.get('username')?.value;
    this.credentials.password=this.mForm?.get('password')?.value;

    this.newItemEvent.emit(this.credentials);
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

