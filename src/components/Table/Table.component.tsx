import React from 'react';
import Header from '../Header/Header.component';
import TransitInformation from '../TransitInformation/TransitInformation.component';
import { RailPrediction, VehicleField } from '../../types/rail.types';
import './table.styles.css';

const Table: React.FC<{ fields: VehicleField[]; data: RailPrediction[] }> = ({
  fields,
  data,
}) => {
  return (
    <div className='table-container'>
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
