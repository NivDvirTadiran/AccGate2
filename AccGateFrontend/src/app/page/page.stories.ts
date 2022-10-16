import { moduleMetadata, Story, Meta } from '@storybook/angular';
import  Page2Component from './page.component';
import {AppModule} from "../app.module";
import {CommonModule} from "@angular/common";


export default {
  title: 'Example/Page2',
  component: Page2Component,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/angular/configure/story-layout
    layout: 'fullscreen',
  },
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [CommonModule],
    }),
  ],
  // More on argTypes: https://storybook.js.org/docs/angular/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

/*
export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/angular/writing-stories/args
Primary.args = {
  primary: true,
  label: 'Button',
};*/



const Template: Story = (args) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Button',
  backgroundColor: '#ff0',
  background: 'linear-gradient(228.37deg, #EFF8FF 22.25%, #B0DCFF 88.18%)',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
  backgroundColor: '#ff0',
};


export const LoggedOut = Template.bind({});


// More on interaction testing: https://storybook.js.org/docs/angular/writing-tests/interaction-testing
export const LoggedIn = Template.bind({});


