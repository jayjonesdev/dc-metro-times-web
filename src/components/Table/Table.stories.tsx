import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Table from './Table.component';
import { railFields } from '../../constants/transitFields';
import { railPredictions } from '../TransitInformation/mockTrainData';

export default {
  title: 'Table/Table',
  component: Table,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Table>;

const Template: ComponentStory<typeof Table> = (args) => (
  <div className='flex flex-col h-screen p-6'>
    <Table {...args} />
  </div>
);

export const Train = Template.bind({});
Train.args = {
  fields: railFields,
  data: railPredictions,
};
