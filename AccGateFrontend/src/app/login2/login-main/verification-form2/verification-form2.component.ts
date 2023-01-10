import {Component, ElementRef, Inject, OnInit, Renderer2, ViewChild} from '@angular/core';
import { AuthService } from 'src/app/_services/auth.service';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import {StoryInput} from "src/stories/inputs/input/story-input.model";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {TokenStorageService} from "../../../_services/token-storage.service";
export interface TSVData {
  username: string;
  email: string;
}



@Component({
  selector: 'verification-form2',
  templateUrl: './verification-form2.component.html',
  styleUrls: ['./verification-form2.component.css']
})
export default class VerificationForm2Component implements OnInit {
  verificationForm: FormGroup;
  status = {
    isVerSuccess: false,
    isVerFailed: false,
    verErrorMessage: {},
  }

  public isLoading = false;
  submitted = false;
  empList: Array<String> = [];
  apiResponse = { message: '', error: false };
  @ViewChild('form', { static: false }) form?: ElementRef;
  errorFieldSubmitted: any = {};
  closeResult = '';

  storyInputsInOrder: StoryInput[]  = [
    {/*...mStoryInput.Default.args?.['storyInput'],*/ id: '2', title: 'username', state: 'USER NAME', icon: './assets/images/User2ldpi.png', type: 'text', placeholder: 'Ex.Saul Ramirez', hide: false  },
    {/*...mStoryInput.Default.args?.['storyInput'],*/ id: '3', title: 'password', state: 'PASSWORD', icon: './assets/images/LockIcon2ldpi.png', type: 'password', placeholder: 'your_password' , hide: true },
    {/*...mStoryInput.Default.args?.['storyInput'],*/ id: '5', title: 'phone', state: 'PHONE NUMBER FOR AUTHENTICATION', icon: './assets/images/Phone3ldpi.png', type: 'tel', placeholder: 'Ex: +972547762084', hide: false  },
    {/*...mStoryInput.Default.args?.['storyInput'],*/ id: '4', title: 'email', state: 'EMAIL', icon: './assets/images/AtSign3ldpi.png', type: 'email', placeholder: 'Ex: abc@example.com', hide: false   },

  ];

  constructor(private authService: AuthService,
              private renderer: Renderer2,
              private tokenStorage: TokenStorageService,
              public dialogRef: MatDialogRef<VerificationForm2Component>,
              @Inject(MAT_DIALOG_DATA) public data: TSVData) {
    this.verificationForm = new FormGroup({
      username: new FormControl(data.username.toString(), Validators.minLength(2)),
      email: new FormControl(data.email.toString(), Validators.email),
    });/*Validators.pattern(new RegExp("[0-9 ]{12}")*/
    this.empList.push("admin");
  }

  ngOnInit(): void {
    this.generateNewCodeFor2SV();
  }

  onSubmit(code: string): void {
    this.submitted = true;

    this.isLoading = true;
    this.authService.TSV_ValidateCodeByName(this.data.username, this.data.email, code).subscribe(
      data => {
        console.log(data);
        this.tokenStorage.savePinCodeToken(data.pinCodeToken);
        this.status.isVerSuccess = true;
        this.status.isVerFailed = false;
        this.errorFieldSubmitted = {} ;
        this.apiResponse.error = false;
        this.apiResponse.message = 'Successful verification';
        this.dialogRef.close('User Validate');
      },
      error => {
        const errorResponse = error.error;
        this.apiResponse.error = true;
        this.apiResponse.message = 'Verification error';
        this.status.verErrorMessage = error.error.message;
        this.status.isVerFailed = true;
        this.errorFieldSubmitted = errorResponse.message;
        console.log(errorResponse);
        this.isLoading = false;
      },
      () => {
        this.isLoading = false;
        console.log("Validate Code Request Finished");}
    );
  }

  generateNewCodeFor2SV() {
    this.isLoading = true;
    this.authService.TSV_GenerateCodeByName(this.data.username, this.data.email).subscribe(
      data => {
        console.log("Generating Code Succeeded", data);
      },
      error => {
        this.isLoading = false;
        console.log("Error: Can't generate code for user ");
      },
      () => {
        this.isLoading = false;
        console.log("Sending Generation Code Request Complete");
      });
  }

  get username(): AbstractControl {
    return this.verificationForm.get('username')!;
  }

  get email(): AbstractControl {
    return this.verificationForm.get('email')!;
  }

  get password(): AbstractControl {
    return this.verificationForm.get('password')!;
  }

  get phone(): AbstractControl {
    return this.verificationForm.get('phone')!;
  }
}
