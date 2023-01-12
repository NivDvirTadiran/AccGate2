import {
  Component, ComponentFactoryResolver, ComponentRef,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  Renderer2,
  SimpleChanges, Type,
  ViewChild
} from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { StoryInput } from "src/stories/inputs/input/story-input.model";
import { AuthService } from 'src/app/_services/auth.service';
import {CodeInputComponent} from "../../inputs/code-input/code-input.component";
import {DynamicCompDirective} from "../../directive/dynamic-comp.directive";
import {PopoverOptions} from "../../directive/popover.interface";


export interface AdComponent {
  content: any;
}


@Component({
  selector: 'storybook-reset-pass-form',
  templateUrl: './reset-pass-form.component.html',
  styleUrls: ['./reset-pass-form.component.scss'],
})
export default class ResetPassFormComponent implements OnInit {

  codeLength: number = 4;
  code: string = '';
  param = {language: 'login-main'};
  formButtonLabel: string = 'Send me a Verification Code';
  formButtonClick: string = 'generateNewCodeFor2SV.emit()';

  @Input() status?: any;

  @Input() isLoading: boolean = false;

  // tslint:disable-next-line: no-output-on-prefix
  @Output() onPinInput: EventEmitter<any> = new EventEmitter();

  // tslint:disable-next-line: no-output-on-prefix
  @Output() onArchiveInput: EventEmitter<any> = new EventEmitter();

  // tslint:disable-next-line: no-output-on-prefix
  @Output() sendVerificationReq: EventEmitter<string> = new EventEmitter();

  @Output() generateNewCodeFor2SV: EventEmitter<void> = new EventEmitter();

  @ViewChild(DynamicCompDirective, {static: true}) appDynamicComp!: DynamicCompDirective;
  //@ViewChild('codeInput') codeInput!: CodeInputComponent;

  @Output() clickXButton: EventEmitter<void> = new EventEmitter();

  @ViewChild('secondHeader', { static: false }) secondHeader?: ElementRef;

  @ViewChild('formHeader', { static: false }) formHeader?: ElementRef;

  @ViewChild('formFields', { static: false }) formFields?: ElementRef;

  @ViewChild('formButton', { static: false }) formButton?: ElementRef;

  @Input() isVerSuccess = false;

  @Input() isRecSuccess = false;

  constructor(private renderer: Renderer2,
              private componentFactoryResolver: ComponentFactoryResolver) {}

  changeLog: string[] = [];


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


  ngOnChanges(changes: SimpleChanges) {
    if (changes.isRecSuccess) {
      if (!changes.isRecSuccess.previousValue &&  changes.isRecSuccess.currentValue) {
        console.warn('Identify Request Succeeded!');
        this.movToVerifyState();
      }
    }

    if (changes.isVerSuccess) {
      if (!changes.isVerSuccess.previousValue &&  changes.isVerSuccess.currentValue) {
        console.warn('Verify Request Succeeded!');
        //this.changeFormToPinCodeState();
      }
    }
  }


  onSubmit(): void {
    if (!this.isRecSuccess) {this.generateNewCodeFor2SV.emit();}
    else if (!this.isVerSuccess) {
      console.info('Send Verification Request!');
      this.sendVerificationReq.emit(this.code);
      if (!this.status.isVerSuccess) {this.codeInputComponentRef?.instance.reset();/*this.codeInput.reset();*/}
    }
    else {}
  }

  ngOnInit(): void {
  }

  /**
   * @ignore
   * Component property to define ordering of Inputs
   */
  storyInputsInOrder: StoryInput[] = [];

  @Input() mForm: FormGroup = new FormGroup({});

  // this called every time when user changed the code
  onCodeChanged(code: string) {
    this.code = code;
    //console.log('code entered: '+ this.code);
  }

  // this called only if user entered full code
  onCodeCompleted(code: string) {
    //
  }

  popoverOptions: AdComponent = {
    content: CodeInputComponent
  };

  codeInputComponentRef?: ComponentRef<any>;

  movToVerifyState(){
    this.renderer.setProperty(this.secondHeader?.nativeElement ,'innerHTML',
      'Please enter the Verification Code<br>you received in your mail:');

    this.renderer.setProperty(this.formHeader?.nativeElement ,'innerHTML',
      'Change Password');


    this.formButtonLabel = 'Continue';

    this.formButtonClick = '"onSubmit()"';

    //this.renderer.setAttribute(this.formButton.  nativeElement, 'onClick', '"onSubmit()"' );

    /*this.renderer.setProperty(this.formFields?.nativeElement ,'innerHTML',
      '<code-input #codeInput [codeLength]="codeLength" (codeChanged)="onCodeChanged($event)" (codeCompleted)="onCodeCompleted($event)"> </code-input>'
    );*/

    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(<Type<any>>this.popoverOptions.content);
    const viewContainerRef = this.appDynamicComp.viewContainerRef;
    viewContainerRef.clear();
    this.codeInputComponentRef = viewContainerRef.createComponent(componentFactory);
    this.codeInputComponentRef.instance.codeChanged.subscribe(($event: string) => {
      this.onCodeChanged($event);
      console.log("Code Changed");
    });


    /*
    this.renderer.setAttribute(this.formButton?.nativeElement, 'label', 'Continue' );



    const viewContainerRef = this.appDynamicComp.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent<CodeInputComponent>(this.popover.content);
    componentRef.instance.reset()
*/
    //this.codeInput = this.formFields?.nativeElement.codeInput.getElement();
  }
}

