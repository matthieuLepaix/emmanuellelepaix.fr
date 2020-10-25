import React from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

import { FlexHorizontal, FlexVertical } from '../../shared';
import { Phone, Mail, Instagram } from '../../shared/Icons';
import { PageHeader } from '../PageHeader/PageHeader';

import * as data from '../../../data/contact.json';

const MainBlock = styled(FlexVertical)`
  width: 100%;
`;

const Content = styled(FlexHorizontal)`
  height: 100%;
  justify-content: center;
`;

const ContactBlock = styled(FlexVertical)`
  justify-content: center;
`;

const ContactElement = styled(FlexHorizontal)`
  font-size: 1.5rem;
  margin: 0.5rem 0;

  a {
    text-decoration: none;
    color: black;
  }

  @media (max-width: ${({ theme }) => theme.mobile}px) {
    font-size: 1rem;
  }
`;

const _Contact = () => {
  const { t } = useTranslation('header');
  const { pathname } = useLocation();

  const title = t(`navs.${pathname.substring(1)}`);
  return (
    <MainBlock>
      <PageHeader title={title}></PageHeader>
      <Content>
        <ContactBlock>
          <ContactElement>
            <span>
              {data.firstname} {data.lastname}
            </span>
          </ContactElement>
          <ContactElement>
            <Phone size={23} title="Phone" margin=" 0 1rem 0 0" />
            <a href={`tel:${data.phone.brut}`}>{data.phone.formatted}</a>
          </ContactElement>
          <ContactElement>
            <Mail size={23} title="Phone" margin=" 0 1rem 0 0" />
            <a href={`mailto:${data.email}`}>{data.email}</a>
          </ContactElement>
          <ContactElement>
            <Instagram size={23} title="Phone" margin=" 0 1rem 0 0" />
            <a href={data.instagram.link} target="_blank">
              {data.instagram.username}
            </a>
          </ContactElement>
        </ContactBlock>
      </Content>
    </MainBlock>
  );
};

export const Contact = _Contact;
