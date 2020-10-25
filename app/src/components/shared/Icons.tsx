import styled from 'styled-components';
import { FiPhone, FiMail, FiInstagram } from 'react-icons/fi';

export const Phone = styled(FiPhone)<{
  margin?: string;
}>`
  margin: ${({ margin }) => margin};
`;

export const Mail = styled(FiMail)<{
  margin?: string;
}>`
  margin: ${({ margin }) => margin};
`;

export const Instagram = styled(FiInstagram)<{
  margin?: string;
}>`
  margin: ${({ margin }) => margin};
`;
