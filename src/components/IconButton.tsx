import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconLookup } from '@fortawesome/free-solid-svg-icons';
import { useAppContext } from 'shared/context';
import { Theme } from 'shared/theme';

type Props = {
  icon: IconLookup;
  danger?: boolean;
  giant?: boolean;
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
};

export const IconButton = (props: Props): JSX.Element => {
  const {
    icon,
    danger = false,
    giant = false,
    onClick = () => {
      /** */
    },
  } = props;
  const { theme } = useAppContext();

  return (
    <StyledButton onClick={onClick} theme={theme} danger={danger} giant={giant}>
      <FontAwesomeIcon icon={icon} />
    </StyledButton>
  );
};

type StyledProps = {
  theme: Theme;
  danger: boolean;
  giant: boolean;
};

const StyledButton = styled.div.attrs(
  ({ theme, danger, giant }: StyledProps) => {
    const size = giant ? 100 : 48;
    const fontSize = giant ? '4em' : '1.5em';
    const borderRadius = giant ? 16 : 4;

    return {
      style: {
        width: `${size}px`,
        height: `${size}px`,
        fontSize,
        borderRadius: `${borderRadius}px`,
        backgroundColor: danger ? theme.dangerBg : theme.secondaryBg,
        color: danger ? theme.dangerText : theme.secondaryText,
      },
    };
  },
)<StyledProps>`
  display: flex;
  flex: 0 0 auto;
  align-items: center;
  justify-content: center;
`;
