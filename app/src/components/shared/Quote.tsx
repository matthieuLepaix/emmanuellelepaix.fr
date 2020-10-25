import React, { FC } from 'react';
import styled from 'styled-components';
import { FlexHorizontal, FlexVertical } from './StyledComponents';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

interface QuoteProps {
  text: string | JSX.Element;
  author: string | JSX.Element;
}

const Main = styled(FlexHorizontal)`
  align-items: center;
`;

const Content = styled(FlexVertical)`
  margin: 5rem;
  space-between: around;
  font-family: 'Open Sans', sans-serif;

  > :nth-child(2) {
    margin-top: 1.5rem;
  }
`;

const QuoteLeft = styled(FaQuoteLeft)`
  position: relative;
  bottom: 0.5rem;
  right: 0.5rem;
  color: lightgray;
`;

const QuoteRight = styled(FaQuoteRight)`
  position: relative;
  top: 0.5rem;
  left: 0.5rem;
  color: lightgray;
`;

export const Quote: FC<QuoteProps> = ({ text, author }) => {
  return (
    <Main>
      <Content>
        <div>
          <QuoteLeft />
          {text}
          <QuoteRight />
        </div>
        <div>{author}</div>
      </Content>
    </Main>
  );
};
