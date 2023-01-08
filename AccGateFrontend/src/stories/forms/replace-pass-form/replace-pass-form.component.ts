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
import {PopoverOptions} from "../../directive/popover.interface";
import {ActionInputComponent} from "../../actions/action-input/action-input.component";
//import {BehaviorSubject} from "rxjs";
//import {AccountInputComponent} from "../inputs/input/story-input.component";

/*
@Directive({selector: 'storybook-input'})
export class AccountInput {
  @Input() storyInput!: AccountInput;
}
*/
@Component({
  selector: 'storybook-replace-pass-form',
  templateUrl: './replace-pass-form.component.html',
  styleUrls: ['./replace-pass-form.css'],
})
export default class ReplacePassFormComponent implements OnInit, AfterViewChecked, OnChanges {

  popover: PopoverOptions = {
    content: ActionInputComponent
  };

  param = {language: 'login-main'};





  @Input() formService!: AuthService;

  credentials: any = {
    username: null,
    password: null
  };

  @Input() isRepFailed = false;
  @Input() repErrorMessage = '';

  openReplacePassword() {
    //this.replacePassFormService.open(ReplacePassForm2Component);
  }

  @ViewChild('formHeader', { static: false }) mainHeader?: ElementRef;
  @ViewChild('storybook-input', { static: false }) storybookInput?: ElementRef;



  constructor(private renderer: Renderer2) {
  }

  /**
   * @ignore
   * Component property to define ordering of tasks
   */
  storyInputsInOrder: StoryInput[] = [];

  @Input() mForm: FormGroup  = new FormGroup({});
  /*username: new FormControl('', Validators.minLength(2)),
  password: new FormControl('T@diran2022', Validators.minLength(2)),
  email: new FormControl('', Validators.email),
  phone: new FormControl(null, Validators.pattern(new RegExp("[0-9 ]{12}")))*/

  changeLog: string[] = [];

  ngOnChanges(changes: SimpleChanges) {
    if (changes.isRegSuccess) {
      if (!changes.isRegSuccess.previousValue &&  changes.isRegSuccess.currentValue) {
        console.warn('Register Request Succeeded!');
        this.loadSuccessfullyLoggedIn();
      }
    }
  }

  @Input() status?: any;

  @Input() isLoading: boolean = false;

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
    console.warn('ReplacePassForm Request Sent!');

    //this.renderer.setAttribute(this.storybookInput?.nativeElement ,'hidden', 'true');
    //this.renderer.setAttribute(this.mainHeader?.nativeElement ,'hidden', 'true');
    //this.renderer.setProperty(this.mainHeader?.nativeElement ,'innerHTML','You have successfully complete your registeration!');


    //this.renderer.setAttribute(this.storybookInput?.nativeElement ,'innerHTML','true');
    this.sendRegReq.emit();
  }

  ngOnInit(): void {

  }


  get userName(): AbstractControl {
    return this.mForm?.get('username')!;
  }

  get oldPassword(): AbstractControl {
    return this.mForm?.get('oldPassword')!;
  }

  get password(): AbstractControl {
    return this.mForm?.get('password')!;
  }

  get confirmPassword(): AbstractControl {
    return this.mForm?.get('confirmPassword')!;
  }





  ngAfterViewChecked(): void {
    //console.log(this.childComp?.length)
  }

  loadSuccessfullyLoggedIn(){
    this.renderer.setProperty(this.mainHeader?.nativeElement ,'innerHTML','You have successfully changed your password!');
  }

}

