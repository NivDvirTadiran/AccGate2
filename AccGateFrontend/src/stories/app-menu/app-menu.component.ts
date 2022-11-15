import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { StoryInput } from "../inputs/story-input.model";
import { AuthService } from '../../app/_services/auth.service';
import {MdbModalRef} from "mdb-angular-ui-kit/modal";


export interface AeonixAppCenterForm {
  username: null, //new FormControl('ea2', Validators.min(2)),
  password: null  //new FormControl('zaqwsx', Validators.min(2))
}


@Component({
  selector: 'storybook-app-menu',
  templateUrl: './app-menu.component.html',
  styleUrls: ['./app-menu.css'],
})
export class AppMenuComponent implements OnInit {

  /*form: AeonixAppCenterForm = {
    username: null,     //new FormControl('ea2', Validators.min(2)),
    password: null      //new FormControl('zaqwsx', Validators.min(2))
  };*/



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
    this.validationForm = new FormGroup({
      username: new FormControl('Telecom2', Validators.minLength(2)),
      //email: new FormControl(null, Validators.email),
      password: new FormControl('T@diran2022', Validators.minLength(2)),
      //phone: new FormControl(null, Validators.pattern(new RegExp("[0-9 ]{12}")))
    });
  }

  /**
   * @ignore
   * Component property to define ordering of tasks
   */
  storyInputsInOrder: StoryInput[] = [];

  validationForm: FormGroup;

  @Input() isLoggedIn = false;

  // tslint:disable-next-line: no-output-on-prefix
  @Output() onPinInput: EventEmitter<any> = new EventEmitter();

  // tslint:disable-next-line: no-output-on-prefix
  @Output() onArchiveInput: EventEmitter<any> = new EventEmitter();

  @Output() openNewWinForApp = new EventEmitter<any>();

  @Output() openNewTabForApp = new EventEmitter<any>();


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
    this.credentials.username=this.validationForm.get('username')?.value;
    this.credentials.password=this.validationForm.get('password')?.value;

    this.openNewWinForApp.emit(this.credentials);
  }

  ngOnInit(): void {
  }


  get userName(): AbstractControl {
    return this.validationForm.get('username')!;
  }

  get email(): AbstractControl {
    return this.validationForm.get('email')!;
  }

  get password(): AbstractControl {
    return this.validationForm.get('password')!;
  }

  get phone(): AbstractControl {
    return this.validationForm.get('phone')!;
  }


}

