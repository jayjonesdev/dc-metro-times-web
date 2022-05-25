import React from 'react';
import useDetectClickOut from '../../helpers/useDetectOutsideClick';
import Button from './Button';
import List from './List.component';

// TODO: Fix button jusitification 
const Dropdown: React.FC<{
  text: string;
  items: string[];
  className?: string;
  itemClick: (item: string) => void;
}> = ({ text, items, className, itemClick }) => {
  const { show, nodeRef, triggerRef, setShow } = useDetectClickOut(false);

  const onClick = (item: string) => {
    itemClick(item);
    setShow(false);
  };

  return (
    <div className={className}>
      <Button text={text} triggerRef={triggerRef} />
      <List items={items} show={show} nodeRef={nodeRef} onClick={onClick} />
    </div>
  );
};

export default Dropdown;
