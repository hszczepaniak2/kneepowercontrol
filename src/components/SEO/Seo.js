import React from 'react';
import { Helmet } from 'react-helmet';

const Seo = ({ children }) => {
  return (
    <>
      <Helmet>
        <html lang="pl" />
        <title>Knee Power Control Pad</title>
        <meta
          name="description"
          content="Knee Power Pad Control odmieni Twoje życie na zawsze!"
        />
        <meta charSet="utf-8" />
      </Helmet>
      {children}
    </>
  );
};

export default Seo;
