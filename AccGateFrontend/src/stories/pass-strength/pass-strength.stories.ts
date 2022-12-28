import Card from "../cards/card.component";
import {componentWrapperDecorator, moduleMetadata} from "@storybook/angular";
import {StoryInputComponent} from "../inputs/input/story-input.component";
import {CommonModule} from "@angular/common";
import {Meta, Story} from "@storybook/angular/types-6-0";
import PassStrengthComponent from "./pass-strength.component";


export default {
  title: 'Design System/Atoms/PassStrength',
  component: PassStrengthComponent,
  decorators: [
    moduleMetadata({
      declarations: [ StoryInputComponent ],
      imports: [CommonModule],
    }),
    componentWrapperDecorator(story => `<div id="main-login-card" class="col-md-12">${story}</div>`),
  ],
  // More on argTypes: https://storybook.js.org/docs/angular/api/argtypes
  argTypes: {
    strength: { control: 'number' },
    backgroundColor: { control: 'color' },
  },
} as Meta;


const Template: Story<PassStrengthComponent> = (args: PassStrengthComponent) => ({
  props: args,
});

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/angular/writing-stories/args
Primary.args = {
  primary: true,
  strength: 0,
  /*backgroundColor: linear-gradient(\"to right, rgb(255, 47, 0), rgb(255, 159, 0)) rgb(255, 47, 0)",*/
  backgroundColor: 'linear-gradient(to right, rgb(255, 47, 0), rgb(255, 159, 0)) rgb(255, 47, 0)',
};

export const Secondary = Template.bind({});
Secondary.args = {
  strength: 0,
};
