import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import MobileTransitInformation from './MobileTransitInformation.component';
import { railFields } from '../../constants/transitFields';
import { railPredictions } from '../../constants/mockTrainData';
import useIsMobile from '../../utils/hooks/useMobileDetect.hook';

export default {
  title: 'MobileTransitInformation',
  component: MobileTransitInformation,
} as ComponentMeta<typeof MobileTransitInformation>;

const Template: ComponentStory<typeof MobileTransitInformation> = (args) => {
  const isMobile = useIsMobile();
  return <MobileTransitInformation {...args} />;
};

export const Train = Template.bind({});
Train.args = {
  vehicle: railPredictions[0],
  fields: railFields,
  isLoading: false,
};
