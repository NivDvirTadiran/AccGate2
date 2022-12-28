// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import {Story, Meta, moduleMetadata, componentWrapperDecorator} from '@storybook/angular';
import {action} from "@storybook/addon-actions";
import {CodeInputComponent} from "./code-input.component";
import {CommonModule} from "@angular/common";
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import PassStrengthComponent from "src/stories/pass-strength/pass-strength.component";
import {DigitcodeInputComponent} from "../digitcode-input/digitcode-input.component";
import * as DigitcodeInput from "../digitcode-input/digitcode-input.stories";

// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
  title: 'Design System/Atoms/Inputs/CodeInput',
  component: CodeInputComponent,
  decorators: [
    moduleMetadata({
      declarations: [ DigitcodeInputComponent, PassStrengthComponent  ],
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
    digitInputs: [
      { ...DigitcodeInput.Default.args?.['digitInput'], id: 1, val: 1, empty: false,  },
      { ...DigitcodeInput.Default.args?.['storyInput'], id: 2, val: 2, empty: false,  },
      { ...DigitcodeInput.Default.args?.['storyInput'], id: 3, val: 3, empty: false,  },
      { ...DigitcodeInput.Default.args?.['storyInput'], id: 4, val: 4, empty: false,  },
    ],
};

export const LengthFive = Template.bind({});
LengthFive.args = {
  codeLength: 5
};


export const LengthSix = Template.bind({});
LengthSix.args = {
  codeLength: 6
};


export const LengthSeven = Template.bind({});
LengthSeven.args = {
  codeLength: 7
};

