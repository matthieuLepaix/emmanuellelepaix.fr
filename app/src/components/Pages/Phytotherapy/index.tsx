import React from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

import { FlexVertical } from '../../shared';
import { PageHeader } from '../PageHeader/PageHeader';

const MainBlock = styled(FlexVertical)`
  width: 100%;
`;

const Content = styled(FlexVertical)``;

const _Phytotherapy = () => {
  const { t } = useTranslation('header');
  const { pathname } = useLocation();

  const title = t(`navs.${pathname.substring(1)}`);
  return (
    <MainBlock>
      <PageHeader title={title}></PageHeader>
      <Content></Content>
    </MainBlock>
  );
};

export const Phytotherapy = _Phytotherapy;
