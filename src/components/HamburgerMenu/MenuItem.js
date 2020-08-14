import * as React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const StyledMenuItem = styled(motion.li)`
  margin-bottom: 10px;
  text-align: center;
  cursor: pointer;
  color: #fff;
  list-style: none;
`;

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

export const MenuItem = ({ text }) => {
  return (
    <>
      <StyledMenuItem
        variants={variants}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        {text}
      </StyledMenuItem>
    </>
  );
};
