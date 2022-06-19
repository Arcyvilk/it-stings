import React from 'react';
import styled from 'styled-components';

import { useAppContext } from 'shared/context';
import { ZINDEX } from 'shared/utils';
import { Theme } from 'shared/theme';

type Props = {
  visible: boolean;
  setVisible: (visible: boolean) => void;
  children: React.ReactNode;
  fullScreen?: boolean;
};

export const Modal = (props: Props): JSX.Element => {
  const { visible, setVisible, children, fullScreen } = props;
  const { theme } = useAppContext();

  const onModalMaskClick = () => {
    setVisible(false);
  };

  const disablePropagation = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  return (
    <ModalWrapper isVisible={visible} onClick={onModalMaskClick}>
      <StyledModal
        theme={theme}
        fullScreen={fullScreen}
        onClick={disablePropagation}>
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
  padding: 24px;
  box-sizing: border-box;
  background-color: #00000088;
  z-index: ${ZINDEX.MODAL};
`;

type StyledModalProps = { theme: Theme; fullScreen?: boolean };

const StyledModal = styled.div.attrs(
  ({ theme, fullScreen }: StyledModalProps) => {
    return {
      style: {
        backgroundColor: theme.primaryBg,
        color: theme.primaryText,
        height: fullScreen ? '100%' : 'auto',
        maxHeight: fullScreen ? '100%' : 'auto',
      },
    };
  },
)<StyledModalProps>`
  position: relative;
  width: 100%;
  height: auto;
  max-height: 100%;
  padding: 12px;
  box-sizing: border-box;
  border-radius: 8px;
  overflow: hidden;
`;
