// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { ButtonEditSaveComponent } from './button-edit-save.component';
import {componentWrapperDecorator, moduleMetadata} from "@storybook/angular";
import {CommonModule} from "@angular/common";
import {action} from "@storybook/addon-actions";

// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
  title: 'Design System/Atoms/Buttons/EditSaveButton',
  component: ButtonEditSaveComponent,
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [CommonModule],
    }),
    componentWrapperDecorator(story => `<div style="position: absolute; width: 3em; top: 3em; left: 3em">${story}</div>`),
  ],
  excludeStories: /.*Data$/,
  // More on argTypes: https://storybook.js.org/docs/angular/api/argtypes
} as Meta;

export const actionsData = {
  onStateChange: action('onStateChange'),
  onClick: action('onClick'),
};

// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args
const Template: Story<ButtonEditSaveComponent> = (args: ButtonEditSaveComponent) => ({
  props: {
    args,
  }
});

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/angular/writing-stories/args
Primary.args = {
  primary: true,
  state: 'edit'
};
Primary.parameters = {
  backgrounds: {
    values: [
      { name: 'white', value: '#fff' },
      { name: 'green', value: '#0f0' },
      { name: 'blue', value: '#00f' },
    ],
  },
};


