// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { Spinner1Component } from './spinner1.component';
import {moduleMetadata} from "@storybook/angular";
import {CommonModule} from "@angular/common";

// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
  title: 'Design System/Atoms/Spinners/Spinner1',
  component: Spinner1Component,
  // More on argTypes: https://storybook.js.org/docs/angular/api/argtypes
} as Meta;

// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args
const Template: Story<Spinner1Component> = (args: Spinner1Component) => ({
  props: args,
});

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/angular/writing-stories/args
Primary.args = {
  primary: true,
  label: 'form button1',
};


export const Secondary = Template.bind({});
Secondary.args = {
  label: 'button2',
};


export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'button3',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'button4',
};
