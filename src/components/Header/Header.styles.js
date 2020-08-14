import styled from 'styled-components';
import { motion } from 'framer-motion';

export const StyledHeader = styled.header`
  height: 100px;
  background: linear-gradient(
    90deg,
    rgba(79, 77, 165, 1) 0%,
    rgba(40, 39, 83, 1) 100%
  );
  margin: 0;
  padding: 0;
  width: 95%;
  border-radius: 5rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 10px;
  overflow: hidden;
  -webkit-box-shadow: 5px 5px 16px -5px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 5px 5px 16px -5px rgba(0, 0, 0, 0.75);
  box-shadow: 5px 5px 16px -5px rgba(0, 0, 0, 0.75);

  @media (max-width: 400px) {
    display: none;
  }
`;

export const StyledLink = styled(motion.a)`
  color: #fff;
  text-decoration: none;
  text-transform: uppercase;
`;

export const StyledLogo = styled.h2`
  font-size: 24px;
  text-transform: uppercase;
  color: #fff;
`;
