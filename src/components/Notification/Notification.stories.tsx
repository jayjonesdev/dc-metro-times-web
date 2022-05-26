import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Notification from './Notification.component';
import incidents from './mockIncidentData';

export default {
  title: 'Notification',
  component: Notification,
} as ComponentMeta<typeof Notification>;

const Template: ComponentStory<typeof Notification> = (args) => (
  <Notification {...args} />
);

export const Default = Template.bind({});
Default.args = {
  ...incidents[0],
  IncidentType: 'Default',
};

export const Alert = Template.bind({});
Alert.args = {
  ...incidents[0],
  IncidentType: 'Alert',
};

export const Delay = Template.bind({});
Delay.args = {
  ...incidents[0],
  IncidentType: 'Delay',
};
