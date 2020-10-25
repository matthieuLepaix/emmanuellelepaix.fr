import React, { FC } from 'react';
import styled from 'styled-components';
import { FlexVertical } from './StyledComponents';

const MainBlock = styled.div`
  position: absolute;
  width: 100%;
`;

const Img = styled.div<{
  isFixed: boolean;
  imageSrc: string;
}>`
  position: absolute;
  width: 100%;
  height: 70vh;
  background-attachment: ${(props) => (props.isFixed ? 'fixed' : 'scroll')};
  background-image: url(${(props) => props.imageSrc});
  background-position: 50% 70%;
  background-repeat: no-repeat;
`;

const Overlay = styled.div<{
  opacity: number;
}>`
  position: absolute;
  width: 100%;
  height: 70vh;
  background: black;
  opacity: ${(props) => props.opacity};
`;

const Content = styled(FlexVertical)`
  justify-content: space-between;
  position: absolute;
  width: 100vw;
  height: 70vh;
  color: ${({ theme }) => theme.primaryLight};
`;

interface HeroProps {
  imageSrc: string;
}

const _Hero: FC<HeroProps> = ({ imageSrc, children }) => {
  return (
    <MainBlock>
      <Img imageSrc={imageSrc} isFixed={true} />
      <Overlay opacity={0.3} />
      <Content>{children}</Content>
    </MainBlock>
  );
};

export const Hero = _Hero;
