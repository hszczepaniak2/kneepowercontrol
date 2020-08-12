import React from 'react';
import SectionLayout from '../../layouts/section';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

const query = graphql`
  query {
    file(name: { eq: "avatar" }) {
      childImageSharp {
        fixed(width: 100, quality: 100) {
          ...GatsbyImageSharpFixed_tracedSVG
        }
      }
    }
  }
`;

const Section2 = () => {
  const data = useStaticQuery(query);
  return (
    <SectionLayout title="Gosia też" color="pink">
      <Img fixed={data.file.childImageSharp.fixed} />
    </SectionLayout>
  );
};

export default Section2;
