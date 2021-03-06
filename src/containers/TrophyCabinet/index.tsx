import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';

import { useAppContext } from 'shared/context';
import { Flex, Title } from 'components';
import { Theme } from 'shared/theme';

type Props = {
  title: string;
  description: string;
  img?: string;
  icon?: IconProp;
  bonus?: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
};

export const TrophyCabinet = (props: Props): JSX.Element => {
  const {
    title,
    description,
    img,
    icon,
    bonus = null,
    onClick = () => {
      /** */
    },
  } = props;
  const { theme } = useAppContext();

  return (
    <Trophy theme={theme} onClick={onClick}>
      {icon && (
        <PicWrapper theme={theme}>
          <FontAwesomeIcon icon={icon} />
        </PicWrapper>
      )}
      {img && <Picture src={img} />}
      {!icon && !img && (
        <PicWrapper theme={theme}>
          <FontAwesomeIcon icon={faQuestionCircle} />
        </PicWrapper>
      )}
      <Flex column style={{ flex: '1 1 auto' }}>
        <Title level={3}>{title}</Title>
        <div>{description}</div>
      </Flex>
      {bonus}
    </Trophy>
  );
};

const Trophy = styled(Flex).attrs(({ theme }: { theme: Theme }) => {
  return { style: { backgroundColor: theme.secondaryBg } };
})`
  align-items: center;
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
`;

const PicWrapper = styled.div.attrs(({ theme }: { theme: Theme }) => {
  return {
    style: { backgroundColor: theme.primaryBg, color: theme.secondaryText },
  };
})`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 48px;
  min-height: 48px;
  max-width: 48px;
  max-height: 48px;
  box-sizing: border-box;
  margin-right: 8px;
`;

const Picture = styled.img`
  min-width: 48px;
  min-height: 48px;
  max-width: 48px;
  max-height: 48px;
  box-sizing: border-box;
  margin-right: 8px;
  object-fit: contain;
  filter: drop-shadow(0 0 7px #000);
`;
