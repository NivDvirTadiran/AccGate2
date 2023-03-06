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
import { StoryInput } from "src/stories/inputs/input/story-input.model";
import { AuthService } from 'src/app/_services/auth.service';
import {TranslateService} from "../../../app/storybook/pipes/translate/translate.service";
//import {BehaviorSubject} from "rxjs";
//import {AccountInputComponent} from "../inputs/input/story-input.component";

/*
@Directive({selector: 'storybook-input'})
export class AccountInput {
  @Input() storyInput!: AccountInput;
}
*/
@Component({
  selector: 'storybook-registry-form',
  templateUrl: './registry-form.component.html',
  styleUrls: ['./registry-form.css'],
})
export default class RegistryFormComponent implements OnInit, AfterViewChecked, OnChanges {

/*
  @ViewChild('storybook-input')
  set mStoryInput(v: AccountInput) {
    setTimeout(() => {
      this.selectedPane = v.id;
      console.log('this.selectedPane'+this.selectedPane.toString())
    }, 30);
  }
  selectedPane: string = '';
  shouldShow = true;
  toggle() {
    this.shouldShow = !this.shouldShow;
  }
*/

  @Input() formService!: AuthService;

  credentials: any = {
    username: null,
    password: null
  };

  @Input() isRegFailed = false;

  @Input() regErrorMessage: any = {};

  @Input() isLoading: boolean = false;

  openReplacePassword() {
    //this.replacePassFormService.open(ReplacePassForm2Component);
  }

  @ViewChild('formHeader', { static: false }) mainHeader?: ElementRef;
  @ViewChild('storybook-input', { static: false }) storybookInput?: ElementRef;


  param = {language: 'login-main'};


  constructor(private renderer: Renderer2,
              public _translate: TranslateService) {

  }

  /**
   * @ignore
   * Component property to define ordering of tasks
   */
  storyInputsInOrder: StoryInput[] = [];

  @Input() mForm: FormGroup  = new FormGroup({});


  changeLog: string[] = [];

  ngOnChanges(changes: SimpleChanges) {
    if (changes.isRegSuccess) {
      if (!changes.isRegSuccess.previousValue &&  changes.isRegSuccess.currentValue) {
        console.warn('Register Request Succeeded!');
        this.loadSuccessfullyLoggedIn();
      }
    }
    /*if (changes.isConfigFailed || changes.configErrorMessage) {
      console.log('isConfigFailed' + this.configErrorMessage['message'])
    }*/
  }

  @Input() direction: 'rtl' | 'ltr' = 'ltr';

  @Input() isRegSuccess = false;

  // tslint:disable-next-line: no-output-on-prefix
  @Output() onPinInput: EventEmitter<any> = new EventEmitter();

  // tslint:disable-next-line: no-output-on-prefix
  @Output() onArchiveInput: EventEmitter<any> = new EventEmitter();

  @Output() sendRegReq: EventEmitter<void> = new EventEmitter();

  @Output() clickXButton: EventEmitter<void> = new EventEmitter();



  @Input()
  set storyInputs(arr: StoryInput[]) {
    const initialTasks = [
      ...arr.filter(t => t.state === 'USER NAME'),
      ...arr.filter(t => t.state !== 'USER NAME'),
    ];
    const filteredTasks = initialTasks.filter(
      t => t.type === 'password' || t.state === 'USER NAME' || t.state === 'EMAIL' || t.state === 'PHONE NUMBER FOR AUTHENTICATION'
    );
    this.storyInputsInOrder = filteredTasks.filter(
      t => t.type === 'password' || t.state === 'USER NAME' || t.state === 'EMAIL' || t.state === 'PHONE NUMBER FOR AUTHENTICATION');
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

  loadSuccessfullyLoggedIn(){
    this.renderer.setProperty(this.mainHeader?.nativeElement ,'innerHTML',this._translate.translate('You have successfully completed your registration!') );
  }

  public get classes(): string[] {
    return ['storybook-input-strength', `storybook-input--${this.direction}`];
  }

}

