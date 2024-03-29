import React from 'react';
import Header from '../Header/Header.component';
import TransitInformation from '../TransitInformation/TransitInformation.component';
import { RailPrediction, VehicleField } from '../../types/rail.types';
import './table.styles.css';

const TableSkeleton: React.FC = () => {
  const rows = [...Array(100)];

  return (
    <div id='tableSkeleton' className='table-container animate-fade-in'>
      <div className='table animate-pulse'>
        <div className='flex-1 space-y-6 py-2 px-2'>
          {rows.map((_, index) => (
            <div key={index} className='h-10 bg-gray-600 rounded' />
          ))}
        </div>
      </div>
    </div>
  );
};

const Table: React.FC<{
  fields: VehicleField[];
  data: RailPrediction[];
  isLoading: boolean;
}> = ({ fields, data, isLoading }) => {
  if (isLoading) return <TableSkeleton />;

  return (
    <div id='table' className='table-container animate-fade-in'>
      <table className='table'>
        <Header fields={fields} />
        <tbody className='table-body'>
          {data.map((vehicle, index) => (
            <TransitInformation key={index} vehicle={vehicle} fields={fields} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
