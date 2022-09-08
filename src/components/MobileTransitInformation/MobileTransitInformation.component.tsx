import React from 'react';
import {
  LineColor,
  RailPrediction,
  VehicleField,
} from '../../types/rail.types';
import FilledCircle from '../FilledCircle/FilledCircle.component';
import './mobiletransitinformation.styles.css';

const MobileTransitInformation: React.FC<{
  vehicle: RailPrediction;
  fields: VehicleField[];
}> = ({ vehicle, fields }, key) => {
  const generateLineColor = () => {
    const lineColor = LineColor[vehicle.Line];
    return lineColor ? <FilledCircle line={vehicle.Line} /> : '-';
  };

  return (
    <div key={key} className='mobile-info-container'>
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
