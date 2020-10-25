import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import {
  Flex,
  FlexVertical,
  Hero as HeroComponent,
  FlexHorizontal,
  Quote,
} from '../../shared';
import { Phone, Mail } from '../../shared/Icons';

import hero from '../../../assets/images/hero.jpg';
import tree from '../../../assets/images/tree.jpg';
import sea from '../../../assets/images/sea.jpg';
import mountain from '../../../assets/images/desert-mountain.jpg';

import * as contactData from '../../../data/contact.json';

const MainBlock = styled.div``;

const ContentHeader = styled(FlexVertical)`
  margin: 3rem;
  font-family: 'Open Sans', sans-serif;

  @media (max-width: ${({ theme }) => theme.mobile}px) {
    margin: 1rem;
  }
`;

const Title = styled.p`
  font-size: 3rem;
  font-weight: 600;
  margin: 1rem 0;

  @media (max-width: ${({ theme }) => theme.mobile}px) {
    font-size: 1.5rem;
    margin: 0;
  }
`;
const SubTitle = styled.p`
  font-size: 1.5rem;

  @media (max-width: ${({ theme }) => theme.mobile}px) {
    font-size: 1rem;
  }
`;

const CTA = styled(NavLink)`
  text-decoration: none;
  color: ${({ theme }) => theme.primaryLight};
  border-radius: 2px;
  background: ${({ theme }) => theme.primaryDark};

  font-size: 1.5rem;
  text-align: center;

  padding: 1rem 4rem;
  margin: 3rem;

  align-self: flex-end;

  &:visited {
    color: inherited;
  }

  @media (max-width: ${({ theme }) => theme.mobile}px) {
    font-size: 1rem;
    margin: 0;
    margin: 1rem;
    padding: 0.5rem 2rem;
  }
`;

const ContactElement = styled(FlexHorizontal)`
  font-size: 1.5rem;
  margin: 0.5rem 0;

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.primaryLight};
  }

  @media (max-width: ${({ theme }) => theme.mobile}px) {
    font-size: 1rem;
  }
`;

const BlockDivider = styled.div`
  width: 100vw;
  height: 1vh;
  margin-top: 70vh;
  background-color: ${({ theme }) => theme.primaryDark};
`;

const Quotes = styled(FlexVertical)`
  margin: 4rem 7rem 1rem 7rem;
`;

const QuoteBlock = styled(FlexHorizontal)`
  height: 25rem;
  margin: 1rem 0;
`;

const MyHero = () => (
  <HeroComponent imageSrc={hero}>
    <ContentHeader>
      <Title>
        {contactData.firstname} {contactData.lastname}
      </Title>
      <SubTitle>
        Coaching et formation en phytothérapie et aromathérapie
      </SubTitle>
      <ContactElement>
        <Phone size={23} title="Phone" margin=" 0 1rem 0 0" />
        <a href={`tel:${contactData.phone.brut}`}>
          {contactData.phone.formatted}
        </a>
      </ContactElement>
      <ContactElement>
        <Mail size={23} title="Phone" margin=" 0 1rem 0 0" />
        <a href={`mailto:${contactData.email}`}>{contactData.email}</a>
      </ContactElement>
    </ContentHeader>
    <CTA to="/more-info" exact>
      En savoir plus
    </CTA>
  </HeroComponent>
);

const citations = [
  {
    imgSrc: sea,
    author: (
      <span>
        <b>Frédéric Lenoir</b> - L’âme du monde
      </span>
    ),
    text:
      'Cultivez la foi et la confiance. Ce sont les deux bâtons sur lesquels vous appuyer pour avancer dans la vie. S’il n’avait foi et confiance en sa mère, le petit enfant ne pourrait pendre aucun risque. Il ne pourrait pas grandir intérieurement, il ne saurait se confronter au monde. Adultes, nous pouvons considérer que l’âme du monde est notre mère. Elle veille sur nous avec bienveillance et nous donne la force pour avancer.',
  },
  {
    imgSrc: mountain,
    author: (
      <span>
        <b>Paulo Coelho</b> - L’alchimiste
      </span>
    ),
    text:
      'Au cours de mes promenades à travers le monde, j’ai remarqué que beaucoup de gens parlaient de l’amour en regardant vers le ciel, dit le vent, [...] Peut être vaudrait-il mieux demander au ciel.',
  },
  {
    imgSrc: tree,
    author: (
      <span>
        <b>Frédéric Lenoir</b> - Coeur de cristal
      </span>
    ),
    text:
      'L’amour est sentiment bien exaltant à ses débuts, mais lorsqu’il prend racine, il devient toujours plus fort et intense avec le temps',
  },
];

const _Home = () => {
  return (
    <MainBlock>
      <MyHero />
      <BlockDivider />
      <Quotes>
        {citations.map(({ imgSrc, author, text }, index) => (
          <QuoteBlock>
            {index % 2 === 0 && <img src={imgSrc} width="50%" />}
            <Quote author={author} text={text} />
            {index % 2 !== 0 && <img src={imgSrc} width="50%" />}
          </QuoteBlock>
        ))}
      </Quotes>
    </MainBlock>
  );
};

export const Home = _Home;
