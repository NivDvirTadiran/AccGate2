// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { componentWrapperDecorator, moduleMetadata, Meta, Story  } from '@storybook/angular';
import ConfigurationFormComponent from './configuration-form.component';
import CardComponent from '../../cards/card/card.component'
import { StoryInputComponent } from "src/stories/inputs/input/story-input.component";

import {CommonModule} from "@angular/common";

import * as ConfigurationInput from "src/stories/inputs/configuration-input/configuration-input.stories";
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {ButtonContinueComponent} from "../../buttons/button-continue/button-continue.component";
import {ButtonExComponent} from "../../buttons/button-ex/button-ex.component";
import {ButtonSuccessfullyComponent} from "../../buttons/button-successfully/button-successfully.component";
import {ButtonConfigurationComponent} from "../../buttons/button-configuration/button-configuration.component";
import {ConfigurationInputComponent} from "../../inputs/configuration-input/configuration-input.component";
import {PinCodeLength, PinCodeValDura} from "src/stories/inputs/configuration-input/configuration-input.stories";

// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
  title: 'Design System/Forms/ConfigurationForm',
  component: ConfigurationFormComponent,
  decorators: [
    moduleMetadata({
      declarations: [ ConfigurationFormComponent, CardComponent, ConfigurationInputComponent, ButtonContinueComponent,
                      ButtonExComponent, ButtonSuccessfullyComponent, ButtonConfigurationComponent],
      imports: [CommonModule, FormsModule, ReactiveFormsModule],
    }),
    componentWrapperDecorator(story => `<div style="margin: 3em">${story}</div>`),
  ],
} as Meta;


const storyForm = new FormGroup({
  tadiran_gate_passExpDays: new FormControl(23),
  tadiran_gate_PreviousAlertPassExpDays: new FormControl(15),
  tadiran_gate_TSV: new FormControl(true),/**/
  spring_jpa_hibernate_ddlAuto: new FormControl(''),
  tadiran_gate_pinCodeLength: new FormControl('4'),
  tadiran_gate_pinCodeValDura: new FormControl('15'),
});



// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args
const Template: Story = args => ({
  props: {
      ...args,
      onPinTask: ConfigurationInput.actionsData.onPinInput,
      onArchiveTask: ConfigurationInput.actionsData.onArchiveInput,
      mForm: storyForm,
    },
});

export const Default = Template.bind({});
Default.args = {
  storyInputs: [
    { ...ConfigurationInput.PassExpDays.args?.['storyInput'], id: '1' },
    { ...ConfigurationInput.PreviousAlertPassExpDays.args?.['storyInput'], id: '2'},
    { ...ConfigurationInput.TSV.args?.['storyInput'], id: '3' },
    //{ ...ConfigurationInput.DdlAuto.args?.['storyInput'], id: '4'  },
    { ...ConfigurationInput.PinCodeLength.args?.['storyInput'], id: '5'  },
    { ...ConfigurationInput.PinCodeValDura.args?.['storyInput'], id: '6'  },
  ],

};

export const AllConfigForm = Template.bind({});
AllConfigForm.args = {
  // Shaping the stories through args composition.
  // Inherited data coming from the Default story.
  storyInputs: [
    { ...ConfigurationInput.PassExpDays.args?.['storyInput'], id: '1' },
    { ...ConfigurationInput.PreviousAlertPassExpDays.args?.['storyInput'], id: '2'},
    { ...ConfigurationInput.TSV.args?.['storyInput'], id: '3' },
    { ...ConfigurationInput.DdlAuto.args?.['storyInput'], id: '4'  },
    { ...ConfigurationInput.PinCodeLength.args?.['storyInput'], id: '5'  },
],
};

export const RegistryForm = Template.bind({});
RegistryForm.args = {
  storyInputs: [
    ...Default.args['storyInputs'].slice(0, 4),
  ],
};

export const RegistryFailed = Template.bind({});
RegistryFailed.args = {
  storyInputs: [
    ...Default.args['storyInputs'].slice(0, 4),
  ],
  isRegFailed: true,
  regErrorMessage: JSON.parse('{"message":"Error: A registry process should be made!", "data": {"email": "must be a well-formed email address"}}'),

};

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  storyinputs: [],
  isRegSuccess: true,

};

