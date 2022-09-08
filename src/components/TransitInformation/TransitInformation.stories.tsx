import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import TransitInformation from './TransitInformation.component';
import { railFields } from '../../constants/transitFields';
import { railPredictions } from '../../constants/mockTrainData';

export default {
  title: 'Table/TransitInformation',
  component: TransitInformation,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof TransitInformation>;

const Template: ComponentStory<typeof TransitInformation> = (args) => (
  <table className='relative w-full border text-gray-400 text-base text-left'>
    <tbody className='divide-y'>
      <TransitInformation {...args} />
    </tbody>
  </table>
);

export const Train = Template.bind({});
Train.args = {
  vehicle: railPredictions[0],
  fields: railFields,
};
