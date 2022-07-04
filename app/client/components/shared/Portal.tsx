import { FunctionComponent, PropsWithChildren, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

interface ComponentProps {
    id: string
}

export const Portal: FunctionComponent<PropsWithChildren<ComponentProps>> = ({ id, children }):JSX.Element => {
  const domElementToAppend = useRef<HTMLDivElement>();
  const [isClientSide, setIsClientSide] = useState(false);

  useEffect(() => {
    const target = document.getElementById(id);
    domElementToAppend.current = document.createElement('div');

    if (!domElementToAppend.current) {
      return;
    }

    target?.appendChild(domElementToAppend.current);

    setIsClientSide(true);

    return () => {
      if (domElementToAppend.current) {
        target?.removeChild(domElementToAppend.current);
      }
    };
  }, []);

  return (
    <>
      {
        (isClientSide && domElementToAppend.current) && createPortal(children, domElementToAppend.current)
      }
    </>
  );
};