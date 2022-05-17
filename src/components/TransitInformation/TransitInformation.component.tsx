import React from 'react';
import { Row, Label } from '..';
import {
  LineColor,
  RailPrediction,
  VehicleField,
} from '../../types/rail.types';

const FilledCircle: React.FC<{ bgColor: string }> = ({ bgColor }) => (
  <div className={`rounded-full h-3 w-3 ring-1 ring-white ${bgColor}`} />
);

// TODO: Fix Component styling
const TransitInformation: React.FC<{
  vehicle: RailPrediction;
  fields: VehicleField[];
}> = ({ vehicle, fields }) => (
  <div className='p-4 items-center w-1/4 h-24 bg-slate-500 rounded-xl shadow-lg text-sm flex flex-auto text-white items-center'>
    <div className='flex flex-col justify-start'>
      {fields
        .sort((a, b) => a.order - b.order)
        .map(({ key, label }) => {
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

          return (
            vehicle[key as keyof RailPrediction] && (
              <Row>
                <Label>{label}</Label>
                {fieldValue()}
              </Row>
            )
          );
        })}
    </div>
  </div>
);

export default TransitInformation;
