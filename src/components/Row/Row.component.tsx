import React from 'react';
// TODO: Use grid instead of flex
const Row: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div data-testid='row' className='flex basis-1/2 break-words items-center'>
    {children}
  </div>
);

export default Row;
