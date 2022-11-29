// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { componentWrapperDecorator, moduleMetadata, Meta, Story  } from '@storybook/angular';
import ReplacePassFormComponent from './replace-pass-form.component';
import CardComponent from '../../cards/card.component'
import { StoryInputComponent } from "../../inputs/story-input.component";

import {CommonModule} from "@angular/common";

import * as StoryInput from "../../inputs/story-input.stories";
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {ButtonContinueComponent} from "../../buttons/button-continue/button-continue.component";
import {ButtonExComponent} from "../../buttons/button-ex/button-ex.component";
import {ButtonSuccessfullyComponent} from "../../buttons/button-successfully/button-successfully.component";
//import {Password} from "../../inputs/story-input.stories";
import PassStrengthComponent from "../../pass-strength/pass-strength.component";
//import {ApiErrorMessagePipe} from "../../../app/storybook/pipes/api-error-message.pipe";

// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
  title: 'Design System/Forms/ReplacePassForm',
  component: ReplacePassFormComponent,
  decorators: [
    moduleMetadata({
      declarations: [ ReplacePassFormComponent, CardComponent, StoryInputComponent, ButtonContinueComponent,
                      ButtonExComponent, ButtonSuccessfullyComponent, PassStrengthComponent, ],
      imports: [CommonModule, FormsModule, ReactiveFormsModule],
    }),
    componentWrapperDecorator(story => `<div style="margin: 3em">${story}</div>`),
  ],
} as Meta;


const storyForm = new FormGroup({
  username: new FormControl('Telecom2', Validators.minLength(2)),
  oldPassword: new FormControl('old password', Validators.minLength(2)),
  password: new FormControl('new password', Validators.minLength(2)),
  confirmPassword: new FormControl('re-enter the new password', Validators.minLength(2)),/**/
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
    { ...StoryInput.Password.args?.['storyInput'], id: '1', title: 'oldPassword', state: 'INITIAL PASSWORD' },
    { ...StoryInput.Password.args?.['storyInput'], id: '2', title: 'password', state: 'NEW PASSWORD' },
    { ...StoryInput.Password.args?.['storyInput'], id: '3', title: 'confirmPassword', state: 'RE-ENTER NEW PASSWORD' },
  ],
  status: {
    isRepSuccess: false,
    isRepFailed: false,
    submitted: false,
    repErrorMessage: {},
    apiResponse: { message: '', error: false },
    errorFieldSubmitted: {},
    closeResult: '',
  },
};

export const SubscribedErrors = Template.bind({});
SubscribedErrors.args = {
  ...Default.args,
  status: {
    isRepSuccess: false,
    isRepFailed: true,
    submitted: true,
    repErrorMessage: {data: {confirmPassword: "Password must be 8 or more characters in length.,,, Password must contain 1 or more uppercase characters., Passwords do not match!"}},
    apiResponse: { message: '', error: false },
    errorFieldSubmitted: {oldPassword: 'old password error', password: 'password error', confirmPassword: 'confirm password error'},
    closeResult: '',
  },
};

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  storyinputs: [],
  status: {
    isRepSuccess: true,
    isRepFailed: true,
    submitted: true,
    repErrorMessage: {data: {confirmPassword: "Password must be 8 or more characters in length.,Password must contain 1 or more uppercase characters., Passwords do not match!"}},
    apiResponse: { message: '', error: false },
    errorFieldSubmitted: {oldPassword: 'old password error', password: 'password error', confirmPassword: 'confirm password error'},
    closeResult: '',
  },

};

