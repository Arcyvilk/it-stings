import React from 'react';
import styled from 'styled-components';

import { useAppContext } from 'shared/context';
import { ZINDEX } from 'shared/utils';
import { Theme } from 'shared/theme';

type Props = {
  visible: boolean;
  setVisible: (visible: boolean) => void;
  children: React.ReactNode;
};

export const Modal = (props: Props): JSX.Element => {
  const { visible, setVisible, children } = props;
  const { theme } = useAppContext();

  const onModalMaskClick = () => {
    setVisible(false);
  };

  const disablePropagation = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
  };

  return (
    <ModalWrapper isVisible={visible} onClick={onModalMaskClick}>
      <StyledModal theme={theme} onClick={disablePropagation}>
        {children}
      </StyledModal>
    </ModalWrapper>
  );
};

const ModalWrapper = styled.div.attrs(
  ({ isVisible }: { isVisible: boolean }) => ({
    style: {
      display: isVisible ? 'flex' : 'none',
    },
  }),
)<{
  isVisible: boolean;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  /* padding: 24px; */
  box-sizing: border-box;
  background-color: #00000033;
  z-index: ${ZINDEX.MODAL};
`;

const StyledModal = styled.div.attrs(({ theme }: { theme: Theme }) => {
  return {
    style: { backgroundColor: theme.primaryBg, color: theme.primaryText },
  };
})<{ theme: Theme }>`
  width: 80%;
  height: 80%;
  padding: 8px;
  box-sizing: border-box;
`;
