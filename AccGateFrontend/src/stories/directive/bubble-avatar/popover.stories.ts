import {Story, Meta, componentWrapperDecorator, moduleMetadata} from '@storybook/angular';
import {CommonModule} from "@angular/common";
import {PopoverDirective} from "./popover.directive";
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {ActionAvatarComponent} from "src/stories/actions/action-avatar/action-avatar.component";
import { PopoverOptions } from '../popover.interface';
import {BubbleAvatarComponent} from "./bubble-avatar.component";



export default {
  title: 'Design System/Atoms/Directives/PopoverAvatarDirective',
  component: PopoverDirective, // (2) don't forget it
  decorators: [
    moduleMetadata({
      declarations: [ PopoverDirective, ActionAvatarComponent, BubbleAvatarComponent],
      imports: [CommonModule, FormsModule, ReactiveFormsModule],
    }),
    componentWrapperDecorator(story => `<div style="margin: 9em">${story}</div>`),
  ],
} as Meta;

const mPopover: PopoverOptions = {
  content: ActionAvatarComponent
};

const Template: Story<PopoverDirective> = (args) => ({
  props: args,
  moduleMetadata: { // (3) don't forget it
    declarations: [PopoverDirective, ActionAvatarComponent, BubbleAvatarComponent],
    imports: [CommonModule]
  },
  template: `<button [twPopover] = "mPopover" > PopoverDirective Example </button>`
});

export const Default = Template.bind({});
Default.args = {
  popover: mPopover,
};
