// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { ButtonAppsComponent } from './button-apps.component';
import {moduleMetadata} from "@storybook/angular";
import {CommonModule} from "@angular/common";

// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
  title: 'Example/AppsButton',
  component: ButtonAppsComponent,
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [CommonModule],
    }),
  ],
  // More on argTypes: https://storybook.js.org/docs/angular/api/argtypes
  argTypes: {
    application: { control: 'select', options: ['Agent', 'WebRT', 'Admin', 'GCCS'] },
  },
} as Meta;

// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args
const Template: Story<ButtonAppsComponent> = (args: ButtonAppsComponent) => ({
  props: args,
});

export const Agent = Template.bind({});
// More on args: https://storybook.js.org/docs/angular/writing-stories/args
Agent.args = {
  primary: true,
  application: 'Agent',
  label: 'language button1',
};
Agent.parameters = {
  backgrounds: {
    values: [
      { name: 'red', value: '#f00' },
      { name: 'green', value: '#0f0' },
      { name: 'blue', value: '#00f' },
    ],
  },
};

export const WebRT = Template.bind({});
WebRT.args = {
  application: 'WebRT',
  label: 'WebRT',
};


export const Admin = Template.bind({});
Admin.args = {
  application: 'Admin',
  label: 'Admin',
};

export const GCCS = Template.bind({});
GCCS.args = {
  application: 'GCCS',
  label: 'GCCS',
};
