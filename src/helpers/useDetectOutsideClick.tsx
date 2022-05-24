import { useEffect, useRef, useState } from 'react';

/**
 * Used to determine if a click event has happened outside of the referenced element
 * @param initialState boolean
 */
const useDetectOutsideClick = (initialState: boolean) => {
  const triggerRef = useRef<any>(null);
  const nodeRef = useRef<any>(null);

  const [show, setShow] = useState<boolean>(initialState);

  const handleOutsideClickEvent = (event: MouseEvent) => {
    // If the element is clicked, show it.
    if (triggerRef.current && triggerRef.current.contains(event.target)) {
      return setShow(!show);
    }

    // If element is showing, close it.
    if (nodeRef.current && !nodeRef.current.contains(event.target)) {
      return setShow(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleOutsideClickEvent, true);
    return () => {
      document.removeEventListener('click', handleOutsideClickEvent, true);
    };
  });
  
  return {
    triggerRef,
    nodeRef,
    show,
    setShow,
  };
};

export default useDetectOutsideClick;
