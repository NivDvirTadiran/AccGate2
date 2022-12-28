import {
  Component, ElementRef,
  EventEmitter,
  HostBinding,
  Inject,
  Injector,
  Input,
  OnInit,
  Output, ViewChild,
  ViewContainerRef
} from '@angular/core';
import { DigitcodeInput } from './digitcode-input.model'
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
  selector: 'storybook-digitcode-input',
  templateUrl: './digitcode-input.component.html',
  styleUrls: ['./digitcode-input.scss']
})
export class DigitcodeInputComponent implements OnInit{

  @Input() digitInput?: DigitcodeInput;

  @ViewChild('input') public input!: ElementRef<HTMLInputElement>;
  @Input() inputType !: string;
  @Input() inputMode !: string;
  @Input() disabled !: boolean;
  @Input() autocapitalize ?: string;
  @Input() isFirst ?: boolean;
  @Input() isLast ?: boolean;
  @Output() onClick: EventEmitter<Event> = new EventEmitter<Event>();
  @Output() onPaste: EventEmitter<any> = new EventEmitter<any>();
  @Output() onInput: EventEmitter<any> = new EventEmitter<any>();
  @Output() onKeydown: EventEmitter<Event> = new EventEmitter<Event>();
  value: string = '';


  public get classes(): string[] {

    //const isFirst = (this.index === 1) ? 'storybook-digitcode-input--first' : 'storybook-digitcode-input--notFirst';

    return ['storybook-digitcode-input'];
  }


  ngOnInit(): void {

  }

}
