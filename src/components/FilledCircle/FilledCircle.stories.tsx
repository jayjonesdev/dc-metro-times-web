import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import FilledCircle from './FilledCircle.component';

export default {
  title: 'FilledCircle',
  component: FilledCircle,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof FilledCircle>;

const Template: ComponentStory<typeof FilledCircle> = (args) => (
  <FilledCircle {...args}/>
);

export const Default = Template.bind({});
Default.args = {
  line: 'BL',
  className: 'ml-6 mt-6'
};
