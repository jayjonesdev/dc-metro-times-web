import React from 'react';

const Label: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className='text-sm font-semibold mr-2'>{children}:</div>
);

export default Label;
