// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/';
import { ButtonExclamationMarkComponent } from './button-exclamation-mark.component';
import {moduleMetadata} from "@storybook/angular";
import {CommonModule} from "@angular/common";

// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
  title: 'Design System/Atoms/Buttons/ExclamationMarkButton',
  component: ButtonExclamationMarkComponent,
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [CommonModule],
    }),
  ],
} as Meta;

// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args
const Template: Story<ButtonExclamationMarkComponent> = (args: ButtonExclamationMarkComponent) => ({
  props: args,
});


export const Exclamation = Template.bind({});
// More on args: https://storybook.js.org/docs/angular/writing-stories/args
Exclamation.args = {
  primary: true,
  label: 'language button1',
};
