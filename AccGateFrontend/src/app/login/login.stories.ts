import { moduleMetadata, Story, Meta } from '@storybook/angular';
import  { LoginComponent}  from './login.component';
import {CommonModule} from "@angular/common";


export default {
  title: 'Login',
  component: LoginComponent,
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



const Template: Story<LoginComponent> = (args: LoginComponent) => ({
  props: args,
});

export const LoggedOut = Template.bind({});

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
};

