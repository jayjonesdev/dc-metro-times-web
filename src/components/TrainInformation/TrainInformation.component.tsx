import React from 'react';
import { Row, Label } from '..';
import { Line, RailPrediction } from '../../types/rail.types';

// TODO: Fix Component styling
const TrainInformation: React.FC<{ train: RailPrediction }> = ({ train }) => (
  <div className='p-4 items-center w-1/4 h-24 bg-slate-500 rounded-xl shadow-lg text-sm flex flex-auto text-white items-center'>
    <div className='flex flex-col justify-start'>
      <Row>
        <Label>Station</Label>
        <div className='col-span-2'>{train.LocationName}</div>
      </Row>
      <Row>
        <Label>Destination</Label>
        <div className='col-span-2'>{train.Destination}</div>
      </Row>
      <Row>
        <Label>Cars</Label>
        <div className='col-span-2'>{train.Car ?? '--'}</div>
      </Row>
      <Row>
        <Label>Minutes</Label>
        <div className='col-span-2'>{train.Min}</div>
      </Row>
      <Row>
        <Label>Line</Label>
        {Line[train.Line] ? <div
          className={`rounded-full h-3 w-3 ring-1 ring-white ${
            Line[train.Line]
          }`}
        /> : '--'}
      </Row>
    </div>
  </div>
);

export default TrainInformation;
