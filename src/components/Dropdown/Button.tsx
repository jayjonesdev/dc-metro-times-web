import React from 'react';

const Button: React.FC<{
  children: React.ReactNode;
  triggerRef: React.MutableRefObject<any>;
}> = ({ children, triggerRef }) => (
  <button
    id='dropdown'
    data-dropdown-toggle='dropdown-list'
    className='dropdown-button'
    type='button'
    ref={triggerRef}
  >
    {children}
  </button>
);

export default Button;
