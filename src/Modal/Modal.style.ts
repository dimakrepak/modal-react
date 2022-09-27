import styled, { css } from 'styled-components';

export const ModalBackdrop = styled.div<{ backdropColor?: string }>`
  position: fixed;
  display: flex;
  top: 0;
  left: 0;
  z-index: 1000000;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  ${({ backdropColor }) =>
    backdropColor ??
    css`
      backdrop-filter: blur(10px);
    `}
`;
