import { RefObject, useEffect } from 'react';

export const useOnClickOutside = (ref: RefObject<HTMLElement>, action: () => void): void => {
  useEffect(() => {
    let x = NaN;
    let y = NaN;

    const handleMouseDown = (event: MouseEvent) => {
      x = event.offsetX;
      y = event.offsetY;
    };

    const listener = (event: MouseEvent) => {
      // Do nothing if clicking ref's element or descendent elements
      if (!ref.current || ref.current.contains(event.target as HTMLElement)) {
        return;
      }

      if (
        event.offsetX > x + 3 ||
        event.offsetX < x - 3 ||
        event.offsetY < y - 3 ||
        event.offsetY > y + 3
      ) {
        return;
      }

      action();
    };

    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', listener);

    return () => {
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', listener);
    };
  }, [ref, action]);
};
