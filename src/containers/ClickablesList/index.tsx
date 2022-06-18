import React from 'react';
import styled from 'styled-components';

import { useStoryModeContext } from 'shared/context';
import { Modal } from 'components';

export const ClickablesList = (): JSX.Element => {
  const { showClickablesList, setShowClickablesList } = useStoryModeContext();
  return (
    <Modal visible={showClickablesList} setVisible={setShowClickablesList}>
      <Wrapper>hehe</Wrapper>
    </Modal>
  );
};

const Wrapper = styled.div``;
