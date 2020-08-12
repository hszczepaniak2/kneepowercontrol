import React from 'react';
import styled from 'styled-components';

const StyledImage = styled.img`
  width: 300px;
  height: auto;
`;

const Image = ({ file }) => {
  return <StyledImage src={file} />;
};

export default Image;
