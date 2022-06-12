import styled from '@emotion/styled';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  /* display: flex;
  justify-content: center;
  align-items: center; */
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1200;
`;

export const ModalImg = styled.div`
  position: absolute;
  /* max-width: 600px;
  min-height: 380px; */
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
