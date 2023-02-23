// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import Card from './card.component';
import { StoryInputComponent } from "../inputs/input/story-input.component";
import {componentWrapperDecorator, moduleMetadata} from "@storybook/angular";
import {CommonModule} from "@angular/common";

// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
  title: 'Design System/Atoms/Card',
  component: Card,
  decorators: [
    moduleMetadata({
      declarations: [ StoryInputComponent ],
      imports: [CommonModule],
    }),
    componentWrapperDecorator(story => `<div id="main-login-card" class="col-md-12">${story}</div>`),
  ],
  // More on argTypes: https://storybook.js.org/docs/angular/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
    size: { control: 'select' },
  },
} as Meta;

// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args
const Template: Story<Card> = (args: Card) => ({
  props: args,
});

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/angular/writing-stories/args
Primary.args = {
  primary: true,
  label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  size: 'large',
  label: 'Button',
};


