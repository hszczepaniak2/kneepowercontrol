import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const StyledButton = styled(motion.button)`
  padding: 10px 30px;
  background: linear-gradient(
    132deg,
    rgba(232, 93, 0, 1) 0%,
    rgba(255, 0, 161, 1) 100%
  );
  font-family: inherit;
  border: none;
  border-radius: 10px;
  outline: none;
  color: #fff;
  -webkit-box-shadow: 5px 5px 16px -5px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 5px 5px 16px -5px rgba(0, 0, 0, 0.75);
  box-shadow: 5px 5px 16px -5px rgba(0, 0, 0, 0.75);
`;

const MainText = styled.h3`
  font-size: 18px;
  font-weight: 700;
`;

const SubText = styled.h5`
  font-size: 15px;
  font-weight: 500;
`;

const Button = ({ mainText, subText }) => {
  return (
    <StyledButton whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
      <MainText>{mainText}</MainText>
      <SubText>{subText}</SubText>
    </StyledButton>
  );
};

export default Button;
