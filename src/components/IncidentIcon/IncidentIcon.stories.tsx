import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import IncidentIcon from './IncidentIcon.component';

export default {
  title: 'IncidentIcon',
  component: IncidentIcon,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof IncidentIcon>;

const Template: ComponentStory<typeof IncidentIcon> = (args) => (
  <IncidentIcon {...args} className='ml-6 mt-6 h-7 w-7 font-bold'/>
);

export const Default = Template.bind({});
Default.args = {
  incident: '',
};

export const Alert = Template.bind({});
Alert.args = {
  incident: 'Alert',
};

export const Delay = Template.bind({});
Delay.args = {
  incident: 'Delay',
};