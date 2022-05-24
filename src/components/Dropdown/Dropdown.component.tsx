import React from 'react';
import useDetectClickOut from '../../helpers/useDetectOutsideClick';

const Dropdown: React.FC<{
  text: string;
  items: string[];
  itemClick: (item: string) => void;
}> = ({ text, items, itemClick }) => {
  const { show, nodeRef, triggerRef, setShow } = useDetectClickOut(false);

  const onClick = (item: string) => {
    itemClick(item);
    setShow(false);
  };

  return (
    <div className='text-white self-end'>
      <button
        id='dropdown'
        data-dropdown-toggle='dropdown-list'
        className='focus:ring-1 focus:outline-none font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-white mb-1'
        type='button'
        ref={triggerRef}
      >
        {text}
      </button>
      <div
        id='dropdown-list'
        ref={nodeRef}
        style={{ zIndex: 101, visibility: !show ? 'hidden' : 'visible' }}
        className={
          'absolute bg-white border divide-y divide-gray-100 rounded drop-shadow-lg w-44 dark:bg-gray-700 right-5'
        }
      >
        <ul
          className='py-1 text-sm text-gray-700 dark:text-gray-200 overflow-y-auto max-h-96'
          aria-labelledby='dropdown'
        >
          {items.map((item, index) => (
            <li key={index} onClick={() => onClick(item)}>
              <span className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer select-none'>
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dropdown;
