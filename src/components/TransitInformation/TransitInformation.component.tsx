import React from 'react';
import {
  LineColor,
  RailPrediction,
  VehicleField,
} from '../../types/rail.types';
import FilledCircle from '../FilledCircle/FilledCircle.component';
import './transitinformation.styles.css';

const TransitInformation: React.FC<{
  vehicle: RailPrediction;
  fields: VehicleField[];
}> = ({ vehicle, fields }, index) => (
  <tr key={index} data-testid='row' className='row'>
    {fields.map(({ key }, index) => {
      const fieldValue = () => {
        switch (key) {
          case 'Line':
            const lineColor = LineColor[vehicle.Line];
            return lineColor ? <FilledCircle line={vehicle.Line} /> : '-';
          default:
            return (
              <div className='vehicle-info'>
                {vehicle[key as keyof RailPrediction]}
              </div>
            );
        }
      };

      return vehicle[key as keyof RailPrediction] ? (
        <td key={index} className='vehicle-value'>
          {fieldValue()}
        </td>
      ) : (
        <td key={index} className='vehicle-value'>
          -
        </td>
      );
    })}
  </tr>
);

export default TransitInformation;
