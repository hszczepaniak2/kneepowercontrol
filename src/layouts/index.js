import React from 'react';
import GlobalStyle from '../assets/styles/globalStyles.js';
import Seo from '../components/SEO';

const MainLayout = ({ children }) => (
  <>
    <Seo />
    <GlobalStyle />
    {children}
  </>
);

export default MainLayout;
