// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import {Story, Meta, moduleMetadata, componentWrapperDecorator} from '@storybook/angular';
import {action} from "@storybook/addon-actions";
import {ConfigurationInputComponent} from "./configuration-input.component";
import {CommonModule} from "@angular/common";
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import PassStrengthComponent from "src/stories/pass-strength/pass-strength.component";

// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
  title: 'Design System/Atoms/Inputs/ConfigurationInput',
  component: ConfigurationInputComponent,
  decorators: [
    moduleMetadata({
      declarations: [ ConfigurationInputComponent, PassStrengthComponent  ],
      imports: [CommonModule, FormsModule, ReactiveFormsModule ],
    }),
    componentWrapperDecorator(story => `<div style="margin: 3em 1em 0 1em/*; width: 445px*/;">${story}</div>`),
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
  storyInput: {
    id: '1',
    title: 'Ex.Saul Ramirez',
    state: 'USER NAME',
    value: '',
    icon: './assets/images/User2ldpi.png',
    type: 'text',
    placeholder: 'placeholder',
    hide: false
  },
  /*currentForm: {
    username: new FormControl('ea6', Validators.minLength(2)),
    password: new FormControl('', []),
  },*/
  hideInput: false,

};

export const PassExpDays = Template.bind({});
PassExpDays.args = {
  ...Default.args,
  storyInput: {
    id: '2',
    name: 'tadiran_gate_passExpDays',
    title: 'Maximum time period for password to expired (in days):',
    state: 'PASSWORD EXPIRATION POLICES',
    value: '',
    icon: '',
    type: 'tadiran.gate.pass-exp-days',
    placeholder: '',
    hide: false
  },
  currentForm: {
    ...Default.args['currentForm'],
    password: new FormControl('ea6', Validators.minLength(2)),
  },
};

export const PreviousAlertPassExpDays = Template.bind({});
PreviousAlertPassExpDays.args = {
  storyInput: {
    id: '3',
    name: 'tadiran_gate_PreviousAlertPassExpDays',
    title: 'Time period for display message - password about to expired:',
    state: 'PASSWORD EXPIRED ALERT DURATION',
    value: '',
    icon: '',
    type: 'tadiran.gate.PreviousAlertPassExpDays',
    placeholder: 20,
    hide: false
  },
};

export const TSV = Template.bind({});
TSV.args = {
  storyInput: {
    id: '4',
    name: 'tadiran_gate_TSV',
    title: 'tadiran.gate.TSV',
    state: 'TWO STEP VERIFICATION',
    value: '',
    icon: './assets/images/LockIcon2ldpi.png',
    type: 'tadiran.gate.TSV',
    placeholder: 'your_password',
    hide: false
  },
};

export const DdlAuto = Template.bind({});
DdlAuto.args = {
  storyInput: {
    id: '5',
    name: 'spring_jpa_hibernate_ddlAuto',
    title: 'DataBase Privilege',
    state: '',
    value: '',
    icon: '',
    type: 'spring.jpa.hibernate.ddl-auto',
    placeholder: 'Ex: abc@example.com',
    hide: false
  },
};


export const PinCodeLength = Template.bind({});
PinCodeLength.args = {
  storyInput: {
    id: '6',
    name: 'tadiran_gate_pinCodeLength',
    title: 'Pin-Code - Amount of digits',
    state: '',
    value: '',
    icon: '',
    type: 'tadiran.gate.pin-code-length',
    placeholder: '4',
    hide: false
  },
};


export const PinCodeValDura = Template.bind({});
PinCodeValDura.args = {
  storyInput: {
    id: '7',
    name: 'tadiran_gate_pinCodeValDura',
    title: 'Pin-Code - Duration before expired (in Minutes).',
    state: '',
    value: '',
    icon: '',
    type: 'tadiran.gate.pin-code-val-dura',
    placeholder: '15',
    hide: false
  },
};


export const Phone = Template.bind({});
Phone.args = {
  storyInput: {
    id: '8',
    title: 'phone',
    state: 'PHONE NUMBER FOR AUTHENTICATION',
    value: '',
    icon: './assets/images/Phone3ldpi.png',
    type: 'tel',
    placeholder: 'Ex: +972547762084',
    hide: false
  },
  hideInput: true,
};


