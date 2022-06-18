import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconLookup } from '@fortawesome/free-solid-svg-icons';
import { useAppContext } from 'shared/context';
import { Theme } from 'shared/theme';

type Props = {
  icon: IconLookup;
  danger?: boolean;
  onClick?: () => void;
};

export const IconButton = (props: Props): JSX.Element => {
  const {
    icon,
    danger = false,
    onClick = () => {
      /** */
    },
  } = props;
  const { theme } = useAppContext();

  return (
    <StyledButton onClick={onClick} theme={theme} danger={danger}>
      <FontAwesomeIcon icon={icon} />
    </StyledButton>
  );
};

const StyledButton = styled.div.attrs(
  ({ theme, danger }: { theme: Theme; danger: boolean }) => {
    return {
      style: {
        backgroundColor: danger ? theme.dangerBg : theme.tertiaryBg,
        color: danger ? theme.dangerText : theme.tertiaryText,
      },
    };
  },
)<{ theme: Theme; danger: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 4px;
`;
