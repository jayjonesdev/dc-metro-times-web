import React from 'react';

interface List {
  nodeRef: React.MutableRefObject<any>;
  show: boolean;
  items: string[];
  onClick: (item: string) => void;
}

const List: React.FC<List> = ({ nodeRef, show, items, onClick }) => (
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
);

export default List;
