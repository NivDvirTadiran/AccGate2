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
    state: 'INPUT_INBOX',
  },
};

export const Pinned = Template.bind({});
Pinned.args = {
  storyInput: {
    ...Default.args['storyInput'],
    state: 'INPUT_PINNED',
  },
};

export const Archived = Template.bind({});
Archived.args = {
  storyInput: {
    ...Default.args['storyInput'],
    state: 'INPUT_ARCHIVED',
  },
};
