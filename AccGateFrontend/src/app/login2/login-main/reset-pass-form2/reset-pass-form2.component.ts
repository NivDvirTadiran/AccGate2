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
  selector: 'reset-pass-form2',
  templateUrl: './reset-pass-form2.component.html',
  styleUrls: ['./reset-pass-form2.component.css']
})
export default class ResetPassForm2Component implements OnInit {
  forgotPassForm: FormGroup;
  status = {
    isVerSuccess: false,
    isRecSuccess: false,
    isVerFailed: false,
    verErrorMessage: {},
  }

  public isLoading = false;
  submitted = false;
  empList: Array<String> = [];
  apiResponse = { message: '', error: false };
  errorFieldSubmitted: any = {};
  closeResult = '';

  storyInputsInOrder: StoryInput[]  = [
    {/*...mStoryInput.Default.args?.['storyInput'],*/ id: '2', title: 'username', state: 'USER NAME', icon: './assets/images/User2ldpi.png', type: 'text', placeholder: 'Ex.Saul Ramirez', hide: false  },
  ];


  constructor(private authService: AuthService,
              private renderer: Renderer2,
              private tokenStorage: TokenStorageService,
              public dialogRef: MatDialogRef<ResetPassForm2Component>,
              @Inject(MAT_DIALOG_DATA) public data: TSVData) {
    this.forgotPassForm = new FormGroup({
      username: new FormControl(data.username.toString(), Validators.minLength(2)),
    });/*Validators.pattern(new RegExp("[0-9 ]{12}")*/
    this.empList.push("admin");
  }

  ngOnInit(): void {
    //this.generateNewCodeFor2SV();
  }

  onSubmit(code: string): void {
    if (this.status.isVerSuccess) {
      this.dialogRef.close({message: 'Successful verification', data: this.data});
    }
    this.submitted = true;
    const { username } = this.forgotPassForm.getRawValue();
    this.data.username = username;

    this.isLoading = true;
    this.authService.TSV_ValidateCodeByName(username, this.data.email, code).subscribe(
      data => {
        console.log(data);
        this.tokenStorage.savePinCodeToken(data.pinCodeToken);
        this.status.isVerSuccess = true;
        this.status.isVerFailed = false;
        this.errorFieldSubmitted = {} ;
        this.apiResponse.error = false;
        this.apiResponse.message = 'Successful verification';
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
    const { username } = this.forgotPassForm.getRawValue();
    this.isLoading = true;
    this.authService.ResetPassByMail(username, this.data.email).subscribe(
      data => {
          if (data.message == "Password successfully sent to email!") {
            this.status.isRecSuccess = true;
            this.status.isVerSuccess = true;
          }
        console.log("Generating Temporary Password Succeeded", data);
      },
      error => {
        this.isLoading = false;
        console.log("Error: Can't generate temporary password for user ");
      },
      () => {
        this.isLoading = false;
        console.log("Sending generation temporary password request complete");
      });
  }

  get username(): AbstractControl {
    return this.forgotPassForm.get('username')!;
  }

  get email(): AbstractControl {
    return this.forgotPassForm.get('email')!;
  }

  get password(): AbstractControl {
    return this.forgotPassForm.get('password')!;
  }

  get phone(): AbstractControl {
    return this.forgotPassForm.get('phone')!;
  }
}
