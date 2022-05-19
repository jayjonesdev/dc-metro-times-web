import React from 'react';
import { VehicleField } from '../../types/rail.types';

const Header: React.FC<{ fields: VehicleField[] }> = ({ fields }) => {
  // const [headers, setHeaders] = React.useState<VehicleField[]>(fields);

  // React.useEffect(() => {
  //   setHeaders(fields);
  // }, [fields]);

  return (
    <thead className='text-sm text-gray-400 uppercase bg-gray-700'>
      <tr>
        {fields.map((field, index) => (
          <th key={index} scope='col' className='px-6 py-3'>{field.label}</th>
        ))}
      </tr>
    </thead>
  );
};

export default Header;
