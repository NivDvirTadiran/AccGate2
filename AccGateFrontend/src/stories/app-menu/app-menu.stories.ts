// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { componentWrapperDecorator, moduleMetadata, Meta, Story  } from '@storybook/angular';
import { AppMenuComponent } from './app-menu.component';
import CardComponent from '../cards/card/card.component'
import { StoryInputComponent } from "../inputs/input/story-input.component";

import {CommonModule} from "@angular/common";

import * as StoryInput from "../inputs/input/story-input.stories";
import StoryInputStories from "../inputs/input/story-input.stories";
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {ButtonContinueComponent} from "../buttons/button-continue/button-continue.component";
import {ButtonAppsComponent} from "../buttons/button-apps/button-apps.component";
import {Spinner1Component} from "../spinners/spinner1/spinner1.component";

// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
  title: 'Design System/AppMenu',
  component: AppMenuComponent,
  decorators: [
    moduleMetadata({
      declarations: [ AppMenuComponent, CardComponent, StoryInputComponent, ButtonContinueComponent,
        Spinner1Component, ButtonAppsComponent ],
      imports: [ReactiveFormsModule],
    }),
    componentWrapperDecorator(story => `<div style="margin: 3em">${story}</div>`),
  ],
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
    { ...StoryInput.Default.args?.['storyInput'], id: '1', title: 'username', state: 'USER NAME' },
    { ...StoryInput.Default.args?.['storyInput'], id: '2', title: 'password', state: 'PASSWORD' },
  ],
 /* currentForm: [
    { ...AccountInput.Default.args?.['currentForm'], username: new FormControl('ea5', Validators.minLength(2)), },
    { ...AccountInput.Default.args?.['currentForm'], password: new FormControl('ea5', Validators.minLength(2)), },
  ],*/
};



export const WithPinnedTasks = Template.bind({});
WithPinnedTasks.args = {
  // Shaping the stories through args composition.
  // Inherited data coming from the Default story.
  storyInputs: [
    ...Default.args['storyInputs'].slice(0, 2),
    { id: '3', title: 'AccountInput 6 (pinned)', state: 'INPUT_PINNED' },
  ],
};

export const Loading = Template.bind({});
Loading.args = {
  storyinputs: [],
  isLoggedIn: true,
  isLoading: true,
};

export const Empty = Template.bind({});
Empty.args = {
  // Shaping the stories through args composition.
  // Inherited data coming from the Loading story.
  ...Loading.args,
  isLoggedIn: false,
};


