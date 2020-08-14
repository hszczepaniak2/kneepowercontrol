import React from 'react';
import styled from 'styled-components';

const StyledSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: ${props => (props.color ? props.color : '#000')};
`;

const SectionLayout = ({ children, ...props }) => {
  return <StyledSection {...props}>{children}</StyledSection>;
};

export default SectionLayout;
