import React from 'react';
import { VehicleField } from '../../types/rail.types';
import './header.styles.css';

const Header: React.FC<{ fields: VehicleField[] }> = ({ fields }) => (
  <thead className='header' data-testid='header'>
    <tr>
      {fields.map((field, index) => (
        <th key={index} scope='col' className='header-col'>
          {field.label}
        </th>
      ))}
    </tr>
  </thead>
);

export default Header;
