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
    <Dropdown {...args}>Select Train Station</Dropdown>
  </div>
);

export const Main = Template.bind({});
Main.args = {
  items: [
    'Van Ness',
    'Foggy Bottom',
    'NoMa-Galludet',
    'West Hyattsville',
    'Largo Town Center',
    'Ronald Reagan Washington National Airport',
  ],
  className: 'text-white self-end',
};
