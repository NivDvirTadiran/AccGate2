// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { componentWrapperDecorator, moduleMetadata, Meta, Story  } from '@storybook/angular';
import MyAccountFormComponent from './my-account-form.component';
import CardComponent from '../../cards/card.component'
import { StoryInputComponent } from "src/stories/inputs/input/story-input.component";

import {CommonModule} from "@angular/common";

import * as StoryInput from "src/stories/inputs/input/story-input.stories";
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {ButtonContinueComponent} from "../../buttons/button-continue/button-continue.component";
import {ButtonExComponent} from "../../buttons/button-ex/button-ex.component";
import {ButtonSuccessfullyComponent} from "../../buttons/button-successfully/button-successfully.component";
import {AccountInputComponent} from "../../inputs/account-input/account-input.component";

// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
  title: 'Design System/Forms/MyAccountForm',
  component: MyAccountFormComponent,
  decorators: [
    moduleMetadata({
      declarations: [ MyAccountFormComponent, CardComponent, AccountInputComponent, ButtonContinueComponent,
                      ButtonExComponent, ButtonSuccessfullyComponent],
      imports: [CommonModule, FormsModule, ReactiveFormsModule],
    }),
    componentWrapperDecorator(story => `<div style="margin: 3em">${story}</div>`),
  ],
} as Meta;


const storyForm = new FormGroup({
  username: new FormControl('Telecom2', Validators.minLength(2)),
  email: new FormControl('Ex: abc@example.com', Validators.email),
  phone: new FormControl('Ex: +972547762084', Validators.pattern(new RegExp("[0-9 ]{12}"))),/**/
  password: new FormControl('', Validators.minLength(2)),
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
    { ...StoryInput.Default.args?.['storyInput'], id: '1', title: 'username', state: 'USER NAME', icon: './assets/images/User2ldpi.png', type: 'enable-profile-picture', placeholder: 'Saul Ramirez' },
    { ...StoryInput.Default.args?.['storyInput'], id: '2', title: 'email', state: 'EMAIL', icon: './assets/images/AtSign3ldpi.png', type: 'email', placeholder: 'Ex: abc@example.com' },
    { ...StoryInput.Default.args?.['storyInput'], id: '3', title: 'phone', state: 'PHONE NUMBER FOR AUTHENTICATION', icon: './assets/images/Phone3ldpi.png', type: 'tel', placeholder: 'Ex: +972547762084' },
    { ...StoryInput.Default.args?.['storyInput'], id: '4', title: 'password', state: 'PASSWORD', icon: './assets/images/LockIcon2ldpi.png', type: 'password', placeholder: 'your_password'   },
  ],
};

export const MainRegistryForm = Template.bind({});
MainRegistryForm.args = {
  // Shaping the stories through args composition.
  // Inherited data coming from the Default story.
  storyInputs: [
    { ...StoryInput.Default.args?.['storyInput'], id: '5', title: 'Saul Ramirez', state: 'USER NAME', icon: '', type: 'enable-profile-picture', placeholder: '', hide: false  },
    { ...StoryInput.Default.args?.['storyInput'], id: '6', title: 'email', state: 'EMAIL', icon: './assets/images/AtSign3ldpi.png', type: 'email', placeholder: 'Ex: abc@example.com', hide: false  },
    { ...StoryInput.Default.args?.['storyInput'], id: '7', title: 'phone', state: 'PHONE NUMBER FOR AUTHENTICATION', icon: './assets/images/Phone3ldpi.png', type: 'tel', placeholder: 'Ex: +972547762084', hide: false  },
    { ...StoryInput.Default.args?.['storyInput'], id: '8', title: 'password', state: 'PASSWORD', icon: './assets/images/LockIcon2ldpi.png', type: 'password', placeholder: 'your_password', hide: false    },
  // { id: '3', title: 'AccountInput 6 (pinned)', state: 'INPUT_PINNED' },
],
};

export const RegistryForm = Template.bind({});
RegistryForm.args = {
  storyInputs: [
    ...Default.args['storyInputs'].slice(0, 4),
  ],
};

export const RegistryFailed = Template.bind({});
RegistryFailed.args = {
  storyInputs: [
    ...Default.args['storyInputs'].slice(0, 4),
  ],
  isRegFailed: true,
  regErrorMessage: JSON.parse('{"message":"Error: A registry process should be made!", "data": {"email": "must be a well-formed email address"}}'),

};

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  storyinputs: [],
  isRegSuccess: true,

};

