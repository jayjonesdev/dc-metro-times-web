import React from 'react';
import {
  LineColor,
  RailPrediction,
  VehicleField,
} from '../../types/rail.types';
import FilledCircle from '../FilledCircle/FilledCircle.component';
import './mobiletransitinformation.styles.css';

const MobileTrainstInformationSkeleton: React.FC = () => {
  const items = [...Array(100)];
  const fields = [...Array(4)];

  return (
    <div id='mobileInformationSkeleton' className='animate-fade-in'>
      {items.map((_, index) => (
        <div key={index} className='mobile-info-container animate-pulse'>
          {fields.map((_, index) => (
            <div key={index} className='h-8 bg-gray-600 w-60 rounded mb-3' />
          ))}
        </div>
      ))}
    </div>
  );
};

const MobileTransitInformation: React.FC<{
  vehicle: RailPrediction;
  fields: VehicleField[];
  isLoading: boolean;
}> = ({ vehicle, fields, isLoading }, key) => {
  const generateLineColor = () => {
    const lineColor = LineColor[vehicle.Line];
    return lineColor ? <FilledCircle line={vehicle.Line} /> : '-';
  };

  return isLoading ? (
    <MobileTrainstInformationSkeleton />
  ) : (
    <div key={key} className='mobile-info-container animate-fade-in'>
      {fields.map(({ key, label }) => {
        switch (key) {
          case 'Line':
            return (
              <div key={key} className='info-data'>
                <div className='info-label'>Line:</div>
                {generateLineColor()}
              </div>
            );

          default:
            return (
              <div key={key} className='info-data'>
                <div className='info-label'>{label}:</div>
                <div>{vehicle[key as keyof RailPrediction]}</div>
              </div>
            );
        }
      })}
    </div>
  );
};

export default MobileTransitInformation;
