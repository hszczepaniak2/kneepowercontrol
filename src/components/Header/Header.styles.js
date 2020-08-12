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
  z-index: 1;
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
