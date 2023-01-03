import {Component, EventEmitter, HostBinding, Inject, Injector, Input, OnInit, Output} from '@angular/core';
import { AccountInput } from './account-input.model'
import {
  AbstractControl,
  ControlValueAccessor,
  FormControl,
  FormGroup,
  NG_VALIDATORS,
  Validator,
  Validators
} from "@angular/forms";
import {PopoverOptions} from "src/stories/directive/popover.interface";
import {ActionInputComponent} from "src/stories/actions/action-input/action-input.component";
import {ActionInput} from "src/stories/actions/action-input/action-input.interface";


export interface GroupForm {
  username:  FormControl,
  password:  FormControl,
}

export interface ValidationForm {
  validationForm2: GroupForm,
}


@Component({
  selector: 'storybook-account-input',
  templateUrl: './account-input.component.html',
  styleUrls: ['./account-input.scss']
})
export class AccountInputComponent implements OnInit{



  popover: PopoverOptions = {
    content: ActionInputComponent
  };

  @Input() storyInput!: AccountInput;

  // tslint:disable-next-line: no-output-on-prefix
  @Output()
  onPinInput = new EventEmitter<Event>();

  // tslint:disable-next-line: no-output-on-prefix
  @Output()
  onArchiveInput = new EventEmitter<Event>();


  @Output() changePassword: EventEmitter<void> = new EventEmitter();


  @Input()
  hideInput = false;

  @Input() currentForm!: FormGroup;

  private isStrength: string = (this.storyInput?.state === 'NEW PASSWORD') ? 'storybook-input--addStrength' : 'storybook-input--clearStrength';

  public isPasswordTextHide: boolean = false;

  @Input() conditionList: string[] = [];
  /*registerForm = new FormGroup({
    username: new FormControl('', Validators.minLength(2)),
    password: new FormControl('zaqwsx', Validators.minLength(2))
  });


  get username2(): FormControl  {
    return this.currentForm?.controls.username.get();
  }*/

  get username(): AbstractControl {
    return this.currentForm.get('username')!;
  }


  get password(): AbstractControl {
    return this.currentForm.get('password')!;
  }

  public getErrorHeader(controllerType: string): string {
    let header: string = '';

    switch (controllerType) {
      case "phone":
        header = 'Must contain phone:';
        break;

      case "email":
        header = 'Must contain email:';
        break;

      case "oldPassword":
      case "confirmPassword":
      case "password":
        header = 'The password must contain:';
        break;

      default:
        header = controllerType;
    }

    return header;
  }

  public getErrorList(conditionList: String[]): ActionInput[] {

    let passConditions: string[] = [];


    var actionInputs: ActionInput[] = [];

    conditionList.forEach(condition => {
      switch (condition) {
        case "minLength":
          actionInputs.push({
            "conditionName": "minLengthValid",
            "presentingMessage": ' A minimum of 8 characters',
            "isFulfilled": !(this.minLengthValid || !(this.formControler.value.length > 0)),
          })
          break;

        case "requiresUppercase":
          actionInputs.push({
            "conditionName": "requiresUppercaseValid",
            "presentingMessage": ' At least 1 Uppercase letters',
            "isFulfilled": !(this.requiresUppercaseValid || !(this.formControler.value.length > 0)),
          })
          break;

        case "requiresLowercase":
          actionInputs.push({
            "conditionName": "requiresLowercaseValid",
            "presentingMessage": ' At least 1 lowercase letters',
            "isFulfilled": !(this.requiresLowercaseValid || !(this.formControler.value.length > 0)),
          })
          break;

        case "requiresDigit":
          actionInputs.push({
            "conditionName": "requiresDigitValid",
            "presentingMessage": ' A number',
            "isFulfilled": !(this.requiresDigitValid || !(this.formControler.value.length > 0))
          })
          break;

        case "requiresSpecialChars":
          actionInputs.push({
            "conditionName": "requiresSpecialCharsValid",
            "presentingMessage": ' At least 1 special character',
            "isFulfilled": !(this.requiresSpecialCharsValid || !(this.formControler.value.length > 0))
          })
          break;

        case "requiresEmail":
          actionInputs.push({
            "conditionName": "requiresEmailValid",
            "presentingMessage": ' A well-formed email address',
            "isFulfilled": !(this.requiresEmailValid || !(this.formControler.value.length > 0))
          })
          break;

        case "requiresPhone":
          actionInputs.push({
            "conditionName": "requiresPhoneValid",
            "presentingMessage": ' A well-formed phone number',
            "isFulfilled": !(this.requiresPhoneValid || !(this.formControler.value.length > 0))
          })
          break;
      }
    });


    return actionInputs;
  }

  get passwordValid() {
    return this.formControler.errors === null;
  }

  get requiredValid() {
    return this.formControler.hasError("required");
  }

  get minLengthValid() {
    return this.formControler.hasError("minlength");
  }

  get requiresDigitValid() {
    return this.formControler.hasError("requiresDigit");
  }

  get requiresUppercaseValid() {
    return this.formControler.hasError("requiresUppercase");
  }

  get requiresLowercaseValid() {
    return this.formControler.hasError("requiresLowercase") ;
  }

  get requiresSpecialCharsValid() {
    return this.formControler.hasError("requiresSpecialChars");
  }

  get requiresEmailValid() {
    return this.formControler.hasError("email");
  }

  get requiresPhoneValid() {
    return this.formControler.hasError("requiresPhoneChars");
  }

  get formControler(): AbstractControl {
    return this.currentForm.get(this.storyInput?.title.toString())!;
  }


  /**
   * Component method to trigger the onPin event
   * @param id string
   */
  onPin(id: any) {
    this.onPinInput.emit(id);
  }
  /**
   * Component method to trigger the onArchive event
   * @param id string
   */
  onArchive(id: any) {
    this.onArchiveInput.emit(id);
  }

  public get classes(): string[] {
    this.isStrength = (this.storyInput?.state === 'NEW PASSWORD') ? 'storybook-input--addStrength' : 'storybook-input--clearStrength';

    return ['storybook-input-strength',  this.isStrength];
  }


  ngOnInit(): void {
    this.isPasswordTextHide = this.storyInput?.state.includes('PASSWORD');

  }

}
