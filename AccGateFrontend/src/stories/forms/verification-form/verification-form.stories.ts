// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { componentWrapperDecorator, moduleMetadata, Meta, Story  } from '@storybook/angular';
import VerificationFormComponent from './verification-form.component';
import CardComponent from '../../cards/card.component'
import { StoryInputComponent } from "src/stories/inputs/input/story-input.component";

import {CommonModule} from "@angular/common";

import * as StoryInput from "src/stories/inputs/input/story-input.stories";
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {ButtonContinueComponent} from "../../buttons/button-continue/button-continue.component";
import PassStrengthComponent from "../../pass-strength/pass-strength.component";
import {ApiErrorMessagePipe} from "../../../app/storybook/pipes/api-error-message.pipe";
import {ApiErrorMessageService} from "../../../app/storybook/pipes/api-error-message.service";
import {CodeInputComponent} from "../../inputs/code-input/code-input.component";
import {DigitcodeInputComponent} from "../../inputs/digitcode-input/digitcode-input.component";
import {ButtonSuccessfullyComponent} from "../../buttons/button-successfully/button-successfully.component";
import {ButtonExComponent} from "../../buttons/button-ex/button-ex.component";

// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
  title: 'Design System/Forms/VerificationForm',
  component: VerificationFormComponent,
  decorators: [
    moduleMetadata({
      declarations: [ CardComponent, StoryInputComponent, ButtonContinueComponent, CodeInputComponent, DigitcodeInputComponent,
        PassStrengthComponent, ApiErrorMessagePipe, ButtonSuccessfullyComponent, ButtonExComponent ],
      imports: [CommonModule, FormsModule, ReactiveFormsModule ],
    }),
    componentWrapperDecorator(story => `<div style="margin: 3em">${story}</div>`),
  ],
} as Meta;



const storyForm = new FormGroup({
  username: new FormControl('Telecom2', Validators.minLength(2)),
  password: new FormControl('T@diran2022', Validators.minLength(2))
});

// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args
const Template: Story = args => ({
  props: {
      ...args,
      onPinTask: StoryInput.actionsData.onPinInput,
      onArchiveTask: StoryInput.actionsData.onArchiveInput,
      mForm: storyForm,
    },

});


export const Default = Template.bind({});
Default.args = {
  storyInputs: [
    { ...StoryInput.Default.args?.['storyInput'], id: '1', title: 'username', state: 'USER NAME', icon: './assets/images/User2ldpi.png', type: 'text', placeholder: 'Ex.Saul Ramirez', hide: false },
    { ...StoryInput.Default.args?.['storyInput'], id: '2', title: 'password', state: 'PASSWORD', icon: './assets/images/LockIcon2ldpi.png', type: 'password', placeholder: 'your_password', hide: false   },
  ],
};

export const VerificationForm = Template.bind({});
VerificationForm.args = {
  // Shaping the stories through args composition.
  // Inherited data coming from the Default story.
  storyInputs: [
    { /*...StoryInput.Default.args?.['storyInput'],*/ id: '1', title: 'username', state: 'USER NAME', icon: './assets/images/User2ldpi.png', type: 'text', placeholder: 'Ex.Saul Ramirez', hide: false },
    { /*...StoryInput.Default.args?.['storyInput'],*/ id: '2', title: 'password', state: 'PASSWORD', icon: './assets/images/LockIcon2ldpi.png', type: 'password', placeholder: 'your_password', hide: false   },
    // { id: '3', title: 'StoryInput 6 (pinned)', state: 'INPUT_PINNED' },
  ],
  mForm: [
    {username: new FormControl('Telecom2')}
  ],
  status: {
    isVerSuccess: false,
    isRepFailed: true,
    submitted: true,
    repErrorMessage: {data: {confirmPassword: "Password must be 8 or more characters in length.,,, Password must contain 1 or more uppercase characters., Passwords do not match!"}},
    apiResponse: { message: '', error: false },
    errorFieldSubmitted: {oldPassword: 'old password error', password: 'password error', confirmPassword: 'confirm password error'},
    closeResult: '',
  },
};

export const VerificationFailed = Template.bind({});
VerificationFailed.args = {
  // Shaping the stories through args composition.
  // Inherited data coming from the Default story.
  storyInputs: [
    ...Default.args['storyInputs'].slice(0, 2),
   // { id: '3', title: 'StoryInput 6 (pinned)', state: 'INPUT_PINNED' },
  ],
  validationForm: {
    username: new FormControl('Telecom2', Validators.minLength(2)),
    password: new FormControl('T@diran2022', Validators.minLength(2))
  },
  status: {
    isVerSuccess: false,
    isVerFailed: true,
    submitted: true,
    verErrorMessage: {"message":"Invalidate Pin-Code! User Not Approved"},
    apiResponse: { message: '', error: false },
    errorFieldSubmitted: {oldPassword: 'old password error', password: 'password error', confirmPassword: 'confirm password error'},
    closeResult: '',
  },
};

export const verificationSuccess = Template.bind({});
verificationSuccess.args = {
  // Shaping the stories through args composition.
  // Inherited data coming from the Default story.
  storyInputs: [
    ...Default.args['storyInputs'].slice(0, 2),
    // { id: '3', title: 'StoryInput 6 (pinned)', state: 'INPUT_PINNED' },
  ],
  validationForm: {
    username: new FormControl('Telecom2', Validators.minLength(2)),
    password: new FormControl('T@diran2022', Validators.minLength(2))
  },
  status: {
    isVerSuccess: true,
    isVerFailed: false,
    submitted: true,
    verErrorMessage: {data: {confirmPassword: "Password must be 8 or more characters in length.,,, Password must contain 1 or more uppercase characters., Passwords do not match!"}},
    apiResponse: { message: '', error: false },
    errorFieldSubmitted: {oldPassword: 'old password error', password: 'password error', confirmPassword: 'confirm password error'},
    closeResult: '',
  },
};

export const Loading = Template.bind({});
Loading.args = {
  storyinputs: [],
  isLoggedIn: true,
  isLoginFailed: false,


};

