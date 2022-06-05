import React from 'react';

interface IList {
  nodeRef: React.MutableRefObject<any>;
  show: boolean;
  items: string[];
  onClick: (item: string) => void;
}

const List: React.FC<IList> = ({ nodeRef, show, items, onClick }) => (
  <div
    id='dropdown-list'
    ref={nodeRef}
    style={{ zIndex: 101, visibility: !show ? 'hidden' : 'visible' }}
    className={'dropdown-list'}
  >
    <ul aria-labelledby='dropdown'>
      {items.map((item, index) => (
        <li key={index} onClick={() => onClick(item)}>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  </div>
);

export default List;
