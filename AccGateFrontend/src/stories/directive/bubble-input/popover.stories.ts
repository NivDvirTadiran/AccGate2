import {Story, Meta, componentWrapperDecorator, moduleMetadata} from '@storybook/angular';
import {CommonModule} from "@angular/common";
import {PopoverInputDirective} from "./popover-input.directive";
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {ActionAvatarComponent} from "src/stories/actions/action-avatar/action-avatar.component";
import { PopoverOptions } from '../popover.interface';
import {BubbleAvatarComponent} from "../bubble-avatar/bubble-avatar.component";



export default {
  title: 'Design System/Atoms/Directives/PopoverInputDirective',
  component: PopoverInputDirective, // (2) don't forget it
  decorators: [
    moduleMetadata({
      declarations: [ PopoverInputDirective, ActionAvatarComponent, BubbleAvatarComponent],
      imports: [CommonModule, FormsModule, ReactiveFormsModule],
    }),
    componentWrapperDecorator(story => `<div style="margin: 9em">${story}</div>`),
  ],
} as Meta;

const mPopover: PopoverOptions = {
  content: ActionAvatarComponent
};

const Template: Story<PopoverInputDirective> = (args) => ({
  props: args,
  moduleMetadata: { // (3) don't forget it
    declarations: [PopoverInputDirective, ActionAvatarComponent, BubbleAvatarComponent],
    imports: [CommonModule]
  },
  template: `<button [inputPopover] = mPopover > PopoverDirective Example </button>`
});

export const Default = Template.bind({});
Default.args = {
  popover: mPopover,
};
