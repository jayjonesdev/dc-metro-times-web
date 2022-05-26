import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Header from './Header.component';
import { trainFields } from '../../constants/transitFields';

export default {
  title: 'Table/Header',
  component: Header,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => (
  <table className='relative w-full border text-gray-400 text-base text-left'>
    <Header {...args} />
  </table>
);

export const Train = Template.bind({});
Train.args = {
  fields: trainFields,
};
