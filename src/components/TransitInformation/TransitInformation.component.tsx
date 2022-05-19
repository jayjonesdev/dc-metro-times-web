import React from 'react';
import {
  LineColor,
  RailPrediction,
  VehicleField,
} from '../../types/rail.types';

const FilledCircle: React.FC<{ bgColor: string }> = ({ bgColor }) => (
  <div className={`rounded-full h-3 w-3 ring-1 ring-white ${bgColor}`} />
);

const TransitInformation: React.FC<{
  vehicle: RailPrediction;
  fields: VehicleField[];
}> = ({ vehicle, fields }, index) => (
  <tr key={index} className='border-b bg-gray-800 border-gray-700'>
    {fields.map(({ key }, index) => {
      const fieldValue = () => {
        switch (key) {
          case 'Line':
            const lineColor = LineColor[vehicle.Line];
            return lineColor ? <FilledCircle bgColor={lineColor} /> : '--';
          default:
            return (
              <div className='col-span-2'>
                {vehicle[key as keyof RailPrediction]}
              </div>
            );
        }
      };

      return vehicle[key as keyof RailPrediction] ? (
        <td key={index} className={`px-6 py-4`}>
          {fieldValue()}
        </td>
      ) : (
        <td key={index} className={`px-6 py-4`}>--</td>
      );
    })}
  </tr>
);

export default TransitInformation;
