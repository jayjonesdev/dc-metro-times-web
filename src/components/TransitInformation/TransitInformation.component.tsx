import React from 'react';
import {
  Line,
  LineColor,
  RailPrediction,
  VehicleField,
} from '../../types/rail.types';

const FilledCircle: React.FC<{ bgColor: string; line: Line }> = ({
  bgColor,
  line,
}) => (
  <div
    className={`rounded-full h-3 w-3 ring-1 ring-slate-400 ${bgColor}`}
    data-message={`${line} line`}
  />
);

const TransitInformation: React.FC<{
  vehicle: RailPrediction;
  fields: VehicleField[];
}> = ({ vehicle, fields }, index) => (
  <tr
    key={index}
    data-testid='row'
    className='border-b border-gray-700 odd:bg-gray-800 even:bg-gray-700 hover:bg-gray-600'
  >
    {fields.map(({ key }, index) => {
      const fieldValue = () => {
        switch (key) {
          case 'Line':
            const lineColor = LineColor[vehicle.Line];
            return lineColor ? (
              <FilledCircle bgColor={lineColor} line={vehicle.Line} />
            ) : (
              '-'
            );
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
        <td key={index} className={`px-6 py-4`}>
          -
        </td>
      );
    })}
  </tr>
);

export default TransitInformation;
