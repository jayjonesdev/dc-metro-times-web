import React from 'react';

const Button: React.FC<{
  text: string;
  triggerRef: React.MutableRefObject<any>;
}> = ({ text, triggerRef }) => (
  <button
    id='dropdown'
    data-dropdown-toggle='dropdown-list'
    className='focus:ring-1 focus:outline-none font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-white mb-1'
    type='button'
    ref={triggerRef}
  >
    {text}
  </button>
);

export default Button;