import React from 'react';
import { debounce } from '..';

const useIsMobile = (): boolean => {
  const [isMobile, setIsMobile] = React.useState(window.innerWidth <= 390);

  React.useLayoutEffect(() => {
    const updateSize = (): void => {
      setIsMobile(window.innerWidth <= 390);
    };

    window.addEventListener('resize', debounce(updateSize, 250));

    return (): void => window.removeEventListener('resize', updateSize);
  }, []);

  return isMobile;
};

export default useIsMobile;
