// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { ButtonSuccessfullyComponent } from './button-successfully.component';
import {moduleMetadata} from "@storybook/angular";
import {CommonModule} from "@angular/common";

// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
  title: 'Design System/Atoms/Buttons/SuccessfullyButton',
  component: ButtonSuccessfullyComponent,
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [CommonModule],
    }),
  ],
} as Meta;

// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args
const Template: Story<ButtonSuccessfullyComponent> = (args: ButtonSuccessfullyComponent) => ({
  props: args,
});

export const Vee = Template.bind({});
// More on args: https://storybook.js.org/docs/angular/writing-stories/args
Vee.args = {
  primary: true,
  label: 'language button1',
};


