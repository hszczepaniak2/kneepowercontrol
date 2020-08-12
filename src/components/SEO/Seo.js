import React from 'react';
import { Helmet } from 'react-helmet';

const Seo = ({ children }) => {
  return (
    <>
      <Helmet>
        <html lang="pl" />
        <title>Knee Power Control PAD</title>
        <meta charSet="utf-8" />
      </Helmet>
      {children}
    </>
  );
};

export default Seo;
