// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import {Story, Meta, moduleMetadata, componentWrapperDecorator} from '@storybook/angular';
import { AvatarComponent } from './avatar.component';
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {PopoverDirective} from "../directive/bubble-avatar/popover.directive";
import {BubbleAvatarComponent} from "../directive/bubble-avatar/bubble-avatar.component";
import {ButtonExclamationMarkComponent} from "../buttons/button-exclamation-mark/button-exclamation-mark.component";
import {ActionAvatarComponent} from "../actions/action-avatar/action-avatar.component";

// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
  title: 'Design System/Avatars/Avatar',
  component: AvatarComponent,
  decorators: [
    moduleMetadata({
      declarations: [ PopoverDirective, BubbleAvatarComponent, ButtonExclamationMarkComponent, ActionAvatarComponent],
      imports: [CommonModule, FormsModule, ReactiveFormsModule],
    }),
    componentWrapperDecorator(story => `<div style="margin: 3em">${story}</div>`),
  ],
  // More on argTypes: https://storybook.js.org/docs/angular/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },/*
  design: {
    type: "figma",
    url: "https://www.figma.com/file/LKQ4FJ4bTnCSjedbRpk931/Sample-File",
  },*/
} as Meta;

// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args
const Template: Story<AvatarComponent> = (args: AvatarComponent) => ({
  props: args,
});

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/angular/writing-stories/args
Primary.args = {
  primary: true,
  label: 'DanK203',
  isNotify: true,
  header: 'Your password will expire in 7',

};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'DanK203',
  isNotify: true,
  header: 'Your password will expire in 7',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
};
