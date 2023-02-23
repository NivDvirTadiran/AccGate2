import {
  AfterViewChecked,
  Component, Directive,
  ElementRef,
  EventEmitter,
  Input, OnChanges,
  OnInit,
  Output,
  QueryList,
  Renderer2, SimpleChanges, ViewChild,
  ViewChildren
} from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/_services/auth.service';
import {ApiErrorMessageService} from "../../../app/storybook/pipes/api-error-message.service";
import {AccountInput} from "../../inputs/account-input/account-input.model";
//import {BehaviorSubject} from "rxjs";
//import {AccountInputComponent} from "../inputs/input/story-input.component";

/*
@Directive({selector: 'storybook-input'})
export class AccountInput {
  @Input() storyInput!: AccountInput;
}
*/
@Component({
  selector: 'storybook-my-account-form',
  templateUrl: './my-account-form.component.html',
  styleUrls: ['./my-account-form.css'],
})
export default class MyAccountFormComponent implements OnInit, AfterViewChecked, OnChanges {

  @Output() onLogout = new EventEmitter<Event>();

  @Output() openUser = new EventEmitter<Event>();

  doLogout(event: Event) {
    this.onLogout.emit(event);
    this.clickXButton.emit();
  }

  @Input() formService!: AuthService;

  credentials: any = {
    username: null,
    password: null
  };

  @Input() isRegFailed = false;
  @Input() regErrorMessage: any = {};
  @Input() displayToolButton: boolean = false;


  @ViewChild('storybook-input', { static: false }) storybookInput?: ElementRef;


  param = {language: 'login-main'};

  constructor(private renderer: Renderer2) {
  }

  storyInputsInOrder: AccountInput[] = [];

  @Input() mForm: FormGroup  = new FormGroup({});

  changeLog: string[] = [];

  ngOnChanges(changes: SimpleChanges) {
    if (changes.isRegSuccess) {
      if (!changes.isRegSuccess.previousValue &&  changes.isRegSuccess.currentValue) {
        console.warn('Change Detail Succeeded!');
      }
    }
  }

  @Input() isLoading: boolean = false;

  @Input() isRegSuccess = false;

  // tslint:disable-next-line: no-output-on-prefix
  @Output() onPinInput: EventEmitter<any> = new EventEmitter();

  // tslint:disable-next-line: no-output-on-prefix
  @Output() onSaveChanges: EventEmitter<any> = new EventEmitter();

  @Output() sendRegReq: EventEmitter<void> = new EventEmitter();

  @Output() clickXButton: EventEmitter<void> = new EventEmitter();

  @Output() changePassword: EventEmitter<void> = new EventEmitter();

  @Output() changedDetailSave: EventEmitter<String> = new EventEmitter();



  @Input()
  set storyInputs(arr: AccountInput[]) {
    const initialTasks = [
      ...arr.filter(t => t.state === 'USER NAME'),
      ...arr.filter(t => t.state !== 'USER NAME'),
    ];
    const filteredTasks = initialTasks.filter(
      t =>  t.state === 'PASSWORD' || t.state === 'USER NAME' || t.state === 'EMAIL' || t.state === 'PHONE NUMBER FOR AUTHENTICATION'
    );
    this.storyInputsInOrder = filteredTasks.filter(
      t => t.state === 'PASSWORD' || t.state === 'USER NAME' || t.state === 'EMAIL' || t.state === 'PHONE NUMBER FOR AUTHENTICATION');
  }

  onSubmit(): void {
    console.warn('Registry Request Sent!');
    this.sendRegReq.emit();
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

  ngAfterViewChecked(): void {
    //console.log(this.childComp?.length)
  }

}

