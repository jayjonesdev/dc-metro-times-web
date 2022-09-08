import React from 'react';
import useDetectClickOut from '../../hooks/useDetectOutsideClick';
import Button from '../Button/Button.component';
import List from './List.component';

// TODO: Fix button jusitification
const Dropdown: React.FC<{
  children: React.ReactNode;
  items: string[];
  className?: string;
  itemClick: (item: string) => void;
}> = ({ children, items, className, itemClick }) => {
  const { show, nodeRef, triggerRef, setShow } = useDetectClickOut(false);

  const onClick = (item: string) => {
    itemClick(item);
    setShow(false);
  };

  return (
    <div className={className}>
      <Button
        id='dropdown'
        dataDropDownToggle='dropdown-list'
        className='dropdown-button'
        triggerRef={triggerRef}
      >
        {children}
      </Button>
      <List items={items} show={show} nodeRef={nodeRef} onClick={onClick} />
    </div>
  );
};

export default Dropdown;
