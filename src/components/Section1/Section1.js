import React from 'react';
import SectionLayout from '../../layouts/section';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import ReactCompareImage from 'react-compare-image';
import FirstDog from '../../assets/images/dog1.jpg';
import SecondDog from '../../assets/images/dog2.jpg';
import Header from '../Header/Header';

const StyledParagraph = styled.p`
  margin: 0;
  padding: 0;
  font-size: 16px;
  color: blue;
`;

const StyledWrapper = styled.div`
  max-width: 375px;
  width: 100%;
`;

export const query = graphql`
  query {
    allFile(filter: { extension: { eq: "png" } }) {
      edges {
        node {
          childImageSharp {
            fixed(width: 300, height: 300) {
              ...GatsbyImageSharpFixed_tracedSVG
            }
          }
        }
      }
    }
    section1Json {
      title
      first_paragraph
      second_paragraph
      third_paragraph
    }
  }
`;

const Section1 = () => {
  const data = useStaticQuery(query);
  console.log(data.section1Json);

  return (
    <SectionLayout>
      <Header />
      <StyledWrapper>
        <ReactCompareImage
          leftImage={FirstDog}
          leftImageLabel="Gosia"
          rightImageLabel="Hubert"
          rightImage={SecondDog}
        />
      </StyledWrapper>
      <StyledParagraph>{data.section1Json.first_paragraph}</StyledParagraph>
      <StyledParagraph>{data.section1Json.second_paragraph}</StyledParagraph>
      <StyledParagraph>{data.section1Json.third_paragraph}</StyledParagraph>
    </SectionLayout>
  );
};

export default Section1;

// <p>{data.dataJson.paragraphs[0].first_paragraph}</p>
