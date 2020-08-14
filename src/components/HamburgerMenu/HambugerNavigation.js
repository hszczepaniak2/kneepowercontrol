import * as React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { MenuItem } from './MenuItem';

const StyledUl = styled(motion.ul)`
  padding: 25px;
  position: absolute;
  top: 100px;
  width: 100%;
`;

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

export const HambugerNavigation = () => (
  <StyledUl variants={variants}>
    <MenuItem text="Opinie" />
    <MenuItem text="Skład" />
    <MenuItem text="Zamów" />
    <MenuItem text="Co to jest?" />
  </StyledUl>
);
