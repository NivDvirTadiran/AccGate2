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
import { StoryInput } from "src/stories/inputs/story-input.model";
import { AuthService } from 'src/app/_services/auth.service';
//import {BehaviorSubject} from "rxjs";
//import {StoryInputComponent} from "../../inputs/story-input.component";

/*
@Directive({selector: 'storybook-input'})
export class StoryInput {
  @Input() storyInput!: StoryInput;
}
*/
@Component({
  selector: 'storybook-replace-pass-form',
  templateUrl: './replace-pass-form.component.html',
  styleUrls: ['./replace-pass-form.css'],
})
export default class ReplacePassFormComponent implements OnInit, AfterViewChecked, OnChanges {

/*
  @ViewChild('storybook-input')
  set mStoryInput(v: StoryInput) {
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

  isLoginFailed = false;
  loginErrorMessage = '';

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



  @Input() isRepSuccess = false;

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

    //this.renderer.setAttribute(this.storybookInput?.nativeElement ,'hidden', 'true');
    //this.renderer.setAttribute(this.mainHeader?.nativeElement ,'hidden', 'true');
    //this.renderer.setProperty(this.mainHeader?.nativeElement ,'innerHTML','You have successfully complete your registeration!');
    console.log("fghjghjhghjgfhj   "+this.storybookInput?.nativeElement.mHidden.value);

    //this.renderer.setAttribute(this.storybookInput?.nativeElement ,'innerHTML','true');
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
    this.renderer.setProperty(this.mainHeader?.nativeElement ,'innerHTML','You have successfully complete your registeration!');


  }

}

