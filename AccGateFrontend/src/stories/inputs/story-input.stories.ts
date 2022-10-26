// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular';
import {action} from "@storybook/addon-actions";
import {StoryInputComponent} from "./story-input.component";

// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
  title: 'StoryInput',
  component: StoryInputComponent,
  excludeStories: /.*Data$/,
} as Meta;

export const actionsData = {
  onPinInput: action('onPinInput'),
  onArchiveInput: action('onArchiveInput'),
};

const Template: Story = args => ({
  props: {
    ...args,
    onPinInput: actionsData.onPinInput,
    onArchiveInput: actionsData.onArchiveInput,
  },
});



export const Default = Template.bind({});
Default.args = {
  storyInput: {
    id: '1',
    title: 'Ex.Saul Ramirez',
    state: 'USER NAME',
    icon: '../../assets/images/User2ldpi.png',
    type: 'text',
  },
};

export const Username = Template.bind({});
Username.args = {
  storyInput: {
    id: '2',
    title: 'Ex.Saul Ramirez',
    state: 'USER NAME',
    icon: '../../assets/images/User2ldpi.png',
    type: 'text',
  },
};

export const Password = Template.bind({});
Password.args = {
  storyInput: {
    id: '3',
    title: 'password',
    state: 'PASSWORD',
    icon: '../../assets/images/LockIcon2ldpi.png',
    type: 'password',
  },
};

export const Email = Template.bind({});
Email.args = {
  storyInput: {
    id: '4',
    title: 'Ex: abc@example.com',
    state: 'EMAIL',
    icon: '../../assets/images/AtSign3ldpi.png',
    type: 'email',
  },
};
export const Phone = Template.bind({});
Phone.args = {
  storyInput: {
    id: '4',
    title: 'Ex: +972547762084',
    state: 'PHONE NUMBER FOR AUTHENTICATION',
    icon: '../../assets/images/Phone3ldpi.png',
    type: 'phone',
  },
};

