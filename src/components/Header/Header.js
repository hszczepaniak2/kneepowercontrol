import React from 'react';
import Button from '../Button';
import { StyledHeader, StyledLink, StyledLogo } from './Header.styles';

const Header = () => {
  return (
    <StyledHeader>
      <StyledLogo>Knee Power Control</StyledLogo>
      <StyledLink whileHover={{ y: -2 }} href="">
        Opinie klientów
      </StyledLink>
      <StyledLink href="">Ocena doktora</StyledLink>
      <StyledLink href="">Skład</StyledLink>
      <StyledLink href="">Formularz zamówienia</StyledLink>
      <Button mainText="ZAMÓW" subText="Knee Power Control" />
    </StyledHeader>
  );
};
export default Header;
