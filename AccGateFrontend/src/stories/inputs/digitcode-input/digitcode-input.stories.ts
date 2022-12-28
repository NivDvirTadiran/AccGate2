// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import {Story, Meta, moduleMetadata, componentWrapperDecorator} from '@storybook/angular';
import {action} from "@storybook/addon-actions";
import {DigitcodeInputComponent} from "./digitcode-input.component";
import {CommonModule} from "@angular/common";
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import PassStrengthComponent from "src/stories/pass-strength/pass-strength.component";

// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
  title: 'Design System/Atoms/Inputs/DigitcodeInput',
  component: DigitcodeInputComponent,
  decorators: [
    moduleMetadata({
      declarations: [ DigitcodeInputComponent  ],
      imports: [CommonModule, FormsModule, ReactiveFormsModule ],
    }),
    componentWrapperDecorator(story => `<div style="margin: 3em">${story}</div>`),
  ],
  /*argTypes: {
    registerForm: new FormGroup({
      username: new FormControl('', Validators.minLength(2)),
      password: new FormControl('zaqwsx', Validators.minLength(2))
    }),
  },*/
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
  digitInput: {
    id: '1',
    val: '1',
    empty: false,
    boxStyle: '',
  },

};

export const Empty = Template.bind({});
Empty.args = {
  digitInput: {
    id: '2',
    val: '2',
    empty: true,
    boxStyle: '',
  },
};
