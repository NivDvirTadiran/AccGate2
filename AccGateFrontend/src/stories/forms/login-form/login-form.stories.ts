// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { componentWrapperDecorator, moduleMetadata, Meta, Story  } from '@storybook/angular';
import CardComponent from '../../cards/card.component'
import { StoryInputComponent } from "../../inputs/input/story-input.component";

import {CommonModule} from "@angular/common";

import * as StoryInput from "../../inputs/input/story-input.stories";
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {ButtonContinueComponent} from "../../buttons/button-continue/button-continue.component";
import PassStrengthComponent from "../../pass-strength/pass-strength.component";
import {ApiErrorMessagePipe} from "../../../app/storybook/pipes/api-error-message.pipe";
import {ApiErrorMessageService} from "../../../app/storybook/pipes/api-error-message.service";
import LoginFormComponent from "./login-form.component";
import {Spinner1Component} from "../../spinners/spinner1/spinner1.component";

// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
  title: 'Design System/Forms/LoginForm',
  component: LoginFormComponent,
  decorators: [
    moduleMetadata({
      declarations: [ CardComponent, StoryInputComponent, ButtonContinueComponent,
        Spinner1Component, PassStrengthComponent, ApiErrorMessagePipe],
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

export const LoginForm = Template.bind({});
LoginForm.args = {
  // Shaping the stories through args composition.
  // Inherited data coming from the Default story.
  storyInputs: [
    { /*...AccountInput.Default.args?.['storyInput'],*/ id: '1', title: 'username', state: 'USER NAME', icon: './assets/images/User2ldpi.png', type: 'text', placeholder: 'Ex.Saul Ramirez', hide: false },
    { /*...AccountInput.Default.args?.['storyInput'],*/ id: '2', title: 'password', state: 'PASSWORD', icon: './assets/images/LockIcon2ldpi.png', type: 'password', placeholder: 'your_password', hide: false   },
    // { id: '3', title: 'AccountInput 6 (pinned)', state: 'INPUT_PINNED' },
  ],
  mForm: [
    {username: new FormControl('Telecom2')}
  ],
};

export const MainLoignForm = Template.bind({});
MainLoignForm.args = {
  // Shaping the stories through args composition.
  // Inherited data coming from the Default story.
  storyInputs: [
    ...Default.args['storyInputs'].slice(0, 2),
   // { id: '3', title: 'AccountInput 6 (pinned)', state: 'INPUT_PINNED' },
  ],
  validationForm: {
    username: new FormControl('Telecom2', Validators.minLength(2)),
    password: new FormControl('T@diran2022', Validators.minLength(2))
  },
};

export const LoignFailed = Template.bind({});
LoignFailed.args = {
  // Shaping the stories through args composition.
  // Inherited data coming from the Default story.
  storyInputs: [
    ...Default.args['storyInputs'].slice(0, 2),
    // { id: '3', title: 'AccountInput 6 (pinned)', state: 'INPUT_PINNED' },
  ],
  validationForm: {
    username: new FormControl('Telecom2', Validators.minLength(2)),
    password: new FormControl('T@diran2023', Validators.minLength(2))
  },
  isLoginFailed: true,
  loginErrorMessage: 'Incorrect user name or password'
};

export const Loading = Template.bind({});
Loading.args = {
  storyInputs: [
    ...Default.args['storyInputs'].slice(0, 2),
    // { id: '3', title: 'AccountInput 6 (pinned)', state: 'INPUT_PINNED' },
  ],
  isLoginFailed: false,
  isLoading: true,


};

