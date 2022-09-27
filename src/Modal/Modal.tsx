import { ReactNode, useRef } from 'react';
import ReactDOM from 'react-dom';

import * as S from './Modal.style';
import { useOnClickOutside } from './useOnClickOutside';

export interface ModalProps {
  isVisible: boolean;
  children: ReactNode;
  backdropColor?: string;
  onBackdropClick?: () => void;
}
/**
 * @description This is a common basic modal.
 * @props `children` - The modal content.
 * @props `isVisible` - Shows the modal.
 * @props `backdropColor ` - Backdrop/mask color.
 * @props `onBackdropClick` - Event is called on backdrop/mask click.
 * @returns Modal.
 */

export const Modal = ({ isVisible, children, onBackdropClick, backdropColor }: ModalProps) => {
  const childrenRef = useRef(null);

  useOnClickOutside(childrenRef, onBackdropClick ?? (() => null));

  return isVisible
    ? ReactDOM.createPortal(
        <S.ModalBackdrop backdropColor={backdropColor}>
          <div ref={childrenRef}>{children}</div>
        </S.ModalBackdrop>,
        document.body,
      )
    : null;
};
