// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import {Story, Meta, moduleMetadata, componentWrapperDecorator} from '@storybook/angular';
import {action} from "@storybook/addon-actions";
import {AccountInputComponent} from "./account-input.component";
import {CommonModule} from "@angular/common";
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import PassStrengthComponent from "src/stories/pass-strength/pass-strength.component";
import {ButtonEditSaveComponent} from "../../buttons/button-edit-save/button-edit-save.component";
import * as EditSaveButton from "src/stories/buttons/button-edit-save/button-edit-save.stories";
import {TranslatePipe} from "../../../app/storybook/pipes/translate/translate.pipe";
import {TranslateService} from "../../../app/storybook/pipes/translate/translate.service";

// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
  title: 'Design System/Atoms/Inputs/AccountInput',
  component: AccountInputComponent,
  decorators: [
    moduleMetadata({
      declarations: [ AccountInputComponent, PassStrengthComponent, ButtonEditSaveComponent, TranslatePipe, TranslateService  ],
      imports: [CommonModule, FormsModule, ReactiveFormsModule ],
    }),
    componentWrapperDecorator(story => `<div style="margin: 0 1em 1em 1em/*; width: 445px*/;">${story}</div>`),
  ],
  /*argTypes: {
    registerForm: new FormGroup({
      username: new FormControl('', Validators.minLength(2)),
      password: new FormControl('zaqwsx', Validators.minLength(2))
    }),
  },*/
  excludeStories: /.*Data$/,
} as Meta;

export const actionsData = {
  onPinInput: action('onPinInput'),
  onSaveChanges: action('onArchiveInput'),
};

const Template: Story = args => ({
  props: {
    ...args,
    onStateChange: EditSaveButton.actionsData.onStateChange,
    onClick: EditSaveButton.actionsData.onClick,
  },
});



export const Default = Template.bind({});
Default.args = {
  storyInput: {
    id: '1',
    title: 'Ex.Saul Ramirez',
    state: 'USER NAME',
    icon: './assets/images/User2ldpi.png',
    type: 'text',
    placeholder: 'placeholder',
    hide: false
  },
  /*currentForm: {
    username: new FormControl('ea6', Validators.minLength(2)),
    password: new FormControl('', []),
  },*/
  hideInput: false,

};

export const Username = Template.bind({});
Username.args = {
  ...Default.args,
  storyInput: {
    id: '2',
    name: 'username',
    title: 'Saul Ramirez',
    state: 'USER NAME',
    icon: '',
    type: 'enable-profile-picture',
    placeholder: '',
    hide: false
  },
  currentForm: {
    ...Default.args['currentForm'],
    password: new FormControl('ea6', Validators.minLength(2)),
  },
};

export const Password = Template.bind({});
Password.args = {
  storyInput: {
    id: '3',
    name: 'password',
    title: 'password',
    state: 'PASSWORD',
    icon: './assets/images/LockIcon2ldpi.png',
    type: 'password',
    placeholder: 'your_password',
    hide: false
  },
};

export const NewPassword = Template.bind({});
NewPassword.args = {
  ...Default.args,
  storyInput: {
    id: '6',
    name: 'newPassword',
    title: 'password',
    state: 'NEW PASSWORD',
    icon: './assets/images/LockIcon2ldpi.png',
    type: 'password',
    placeholder: 'your_password',
    hide: false
  },
};

export const Email = Template.bind({});
Email.args = {
  storyInput: {
    id: '4',
    name: 'email',
    title: 'email',
    state: 'EMAIL',
    icon: './assets/images/AtSign3ldpi.png',
    type: 'email',
    placeholder: 'Ex: abc@example.com',
    hide: false
  },
};
export const Phone = Template.bind({});
Phone.args = {
  storyInput: {
    id: '5',
    name: 'phone',
    title: 'phone',
    state: 'PHONE NUMBER FOR AUTHENTICATION',
    icon: './assets/images/Phone3ldpi.png',
    type: 'phone',
    placeholder: 'Ex: +972547762084',
    hide: false
  },
  hideInput: true,
};


