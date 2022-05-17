import React from 'react';

const Label: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div data-testid='label' className='text-sm font-semibold mr-2'>
    {children}: {' '}
  </div>
);

export default Label;
