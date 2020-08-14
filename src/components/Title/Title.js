import React from 'react';
import styled from 'styled-components';

const StyledTitle = styled.h2`
  font-size: 32px;
  text-transform: uppercase;
  width: 60%;
  text-align: center;
  margin: 20px 0;
  color: #000;
`;

const Title = ({ text }) => {
  return <StyledTitle>{text}</StyledTitle>;
};

export default Title;
