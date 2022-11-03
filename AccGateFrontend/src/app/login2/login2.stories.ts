import { moduleMetadata, Story, Meta } from '@storybook/angular';
import  Login2Component from './login2.component';
import {AppModule} from "../app.module";
import {CommonModule} from "@angular/common";


export default {
  title: 'Example/Login2',
  component: Login2Component,
  /*parameters: {
    // More on Story layout: https://storybook.js.org/docs/angular/configure/story-layout
    layout: 'fullscreen',
  },*/
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
export const Agent = Template.bind({});
// More on args: https://storybook.js.org/docs/angular/writing-stories/args
Agent.args = {
  primary: true,
  label: 'Button',
};*/



const Template: Story<Login2Component> = (args: Login2Component) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Button7',
  backgroundColor: '#ff0',
  background: 'linear-gradient(228.37deg, #EFF8FF 22.25%, #B0DCFF 88.18%)',
};
Primary.parameters = {
  backgrounds: {
    values: [
      { name: 'red', value: '#f00' },
      { name: 'green', value: '#0f0' },
      { name: 'blue', value: '#00f' },
    ],
  },
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
  backgroundColor: '#ff0',
};


export const LoggedOut = Template.bind({});


// More on interaction testing: https://storybook.js.org/docs/angular/writing-tests/interaction-testing
export const LoggedIn = Template.bind({});


