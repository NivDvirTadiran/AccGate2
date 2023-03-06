import {Component, ElementRef, EventEmitter, Input, OnInit, Output, Renderer2, ViewChild} from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { StoryInput } from "src/stories/inputs/input/story-input.model";
import { AuthService } from 'src/app/_services/auth.service';
import {CodeInputComponent} from "../../inputs/code-input/code-input.component";
import {TranslateService} from "../../../app/storybook/pipes/translate/translate.service";





@Component({
  selector: 'storybook-verification-form',
  templateUrl: './verification-form.component.html',
  styleUrls: ['./verification-form.component.scss'],
})
export default class VerificationFormComponent implements OnInit {

  codeLength: number = 4;
  code: string = '';
  param = {language: 'login-main'};

  @Input() status?: any;

  @Input() _translate?: TranslateService;

  @Input() isLoading: boolean = false;

  // tslint:disable-next-line: no-output-on-prefix
  @Output() sendVerificationReq: EventEmitter<string> = new EventEmitter();

  @Output() generateNewCodeFor2SV: EventEmitter<void> = new EventEmitter();

  @ViewChild('codeInput') codeInput !: CodeInputComponent;

  @Output() clickXButton: EventEmitter<void> = new EventEmitter();


  onSubmit(): void {
    console.warn('Send Verification Request!');

    this.sendVerificationReq.emit(this.code);
    if (!this.status.isVerSuccess) {this.codeInput.reset();}
  }

  ngOnInit(): void {
  }



  // this called every time when user changed the code
  onCodeChanged(code: string) {
    this.code = code;
    //console.log('code entered: '+ this.code);
  }

  // this called only if user entered full code
  onCodeCompleted(code: string) {
    //
  }


}

