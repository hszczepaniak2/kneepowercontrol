import React from 'react';
import styled from 'styled-components';

const StyledSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #f2f2f2;
  color: ${props => (props.color ? props.color : '#000')};
`;

const SectionLayout = ({ children, title, ...props }) => {
  return (
    <StyledSection {...props}>
      <h1>{title}</h1>
      {children}
    </StyledSection>
  );
};

export default SectionLayout;
