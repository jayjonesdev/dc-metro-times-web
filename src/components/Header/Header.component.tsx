import React from 'react';
import { VehicleField } from '../../types/rail.types';

const Header: React.FC<{ fields: VehicleField[] }> = ({ fields }) => (
  <thead
    className='text-sm text-gray-300 uppercase bg-gray-700 sticky top-0'
    data-testid='header'
  >
    <tr>
      {fields.map((field, index) => (
        <th key={index} scope='col' className='px-6 py-3'>
          {field.label}
        </th>
      ))}
    </tr>
  </thead>
);

export default Header;
