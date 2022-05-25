import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Dropdown from './Dropdown.component';

export default {
  title: 'Dropdown',
  component: Dropdown,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = (args) => (
  <div className='flex flex-col'>
    <Dropdown {...args} />
  </div>
);

export const Main = Template.bind({});
Main.args = {
  text: 'Select Train Station',
  items: [
    'Van Ness',
    'Foggy Bottom',
    'NoMa-Galludet',
    'West Hyattsville',
    'Largo Town Center',
  ],
  className: 'text-white self-end',
};
