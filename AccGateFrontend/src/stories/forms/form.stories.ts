// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { componentWrapperDecorator, moduleMetadata, Meta, Story  } from '@storybook/angular';
import {FormComponent } from './form.component';
import { StoryInputComponent } from "../inputs/story-input.component";

import {CommonModule} from "@angular/common";

import * as StoryInput from "../inputs/story-input.stories";
import StoryInputStories from "../inputs/story-input.stories";

// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
  component: FormComponent,
  decorators: [
    moduleMetadata({
      declarations: [ FormComponent, StoryInputComponent ],
      imports: [CommonModule],
    }),
    componentWrapperDecorator(story => `<div style="margin: 3em">${story}</div>`),
  ],
  title: 'FormList',
} as Meta;

// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args
const Template: Story = args => ({
  props: {
      ...args,
      onPinTask: StoryInput.actionsData.onPinInput,
      onArchiveTask: StoryInput.actionsData.onArchiveInput,
    },
});

export const Default = Template.bind({});
Default.args = {
  storyInputs: [
    { ...StoryInput.Default.args?.['storyInput'], id: '1', title: 'StoryInput 1' },
    { ...StoryInput.Default.args?.['storyInput'], id: '2', title: 'StoryInput 2' },
    { ...StoryInput.Default.args?.['storyInput'], id: '3', title: 'StoryInput 3' },
    { ...StoryInput.Default.args?.['storyInput'], id: '4', title: 'StoryInput 4' },
    { ...StoryInput.Default.args?.['storyInput'], id: '5', title: 'StoryInput 5' },
    { ...StoryInput.Default.args?.['storyInput'], id: '6', title: 'StoryInput 6' },
  ],
};

export const WithPinnedTasks = Template.bind({});
WithPinnedTasks.args = {
  // Shaping the stories through args composition.
  // Inherited data coming from the Default story.
  storyInputs: [
    ...Default.args['storyInputs'].slice(0, 5),
    { id: '6', title: 'StoryInput 6 (pinned)', state: 'INPUT_PINNED' },
  ],
};

export const Loading = Template.bind({});
Loading.args = {
  storyinputs: [],
  loading: true,
};

export const Empty = Template.bind({});
Empty.args = {
  // Shaping the stories through args composition.
  // Inherited data coming from the Loading story.
  ...Loading.args,
  loading: false,
};


