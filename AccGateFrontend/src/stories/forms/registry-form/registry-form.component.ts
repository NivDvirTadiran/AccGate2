import {
  AfterViewChecked,
  Component,
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
import {BehaviorSubject} from "rxjs";





@Component({
  selector: 'storybook-registry-form',
  templateUrl: './registry-form.component.html',
  styleUrls: ['./registry-form.css'],
})
export default class RegistryFormComponent implements OnInit, AfterViewChecked, OnChanges {




  @Input() formService!: AuthService;

  credentials: any = {
    username: null,
    password: null
  };

  isLoginFailed = false;
  loginErrorMessage = '';

  openReplacePassword() {
    //this.replacePassFormService.open(ReplacePassFormComponent);
  }

  @ViewChild('formHeader', { static: false }) mainHeader?: ElementRef;

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
      t => t.state === 'PASSWORD' || t.state === 'USER NAME' || t.state === 'EMAIL' || t.state === 'PHONE NUMBER FOR AUTHENTICATION'
    );
    this.storyInputsInOrder = filteredTasks.filter(
      t => t.state === 'PASSWORD' || t.state === 'USER NAME' || t.state === 'EMAIL' || t.state === 'PHONE NUMBER FOR AUTHENTICATION'
    );
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
    this.renderer.setProperty(this.mainHeader?.nativeElement ,'innerHTML','You have successfully complete your registeration!');
  }

}

