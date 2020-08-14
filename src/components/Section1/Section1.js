import React from 'react';
import SectionLayout from '../../layouts/section';
import ImageComparison from '../ImageComparison';
import styled from 'styled-components';
import Header from '../Header/Header';
import Title from '../Title/Title';

const StyledP = styled.p`
  padding: 0 20px;
`;

const Section1 = () => {
  return (
    <SectionLayout title="Zamów już dziś">
      <Header />
      <Title text="Zamów już dzisiaj to cudo albo i nie" />
      <StyledP>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti,
        consequatur. Consequuntur non praesentium voluptatibus qui, tenetur
        dicta explicabo fuga, quas a, accusamus iste laborum libero labore?
        Ratione id ipsam repudiandae? Nam illum voluptate suscipit a quibusdam
        harum sapiente velit consequuntur? Eveniet perferendis iusto nostrum
        rem! Deserunt quasi a dicta neque quidem odio officia doloribus officiis
        voluptas praesentium dolore, iste id! Inventore tenetur omnis sunt. Cum
        excepturi ea rem autem placeat, et reiciendis hic perferendis, voluptas,
        quidem nam blanditiis iure. Cum aliquid laboriosam placeat debitis odit
        tempore a nulla. Ipsum, exercitationem. Sit vitae porro corrupti rerum
        vel perferendis aliquam. Fugiat, vero, voluptatum suscipit consequatur
        sapiente officia natus expedita ea dignissimos odio mollitia officiis
        temporibus reprehenderit rerum quas alias ipsum commodi. Corporis.
        Voluptatibus, rerum consectetur optio a veniam iste earum dolorem
        laboriosam officia? Ex in alias voluptatum beatae delectus sequi aperiam
        temporibus id blanditiis. Ut repudiandae laudantium quidem consectetur
        illum unde veniam?
      </StyledP>
      <ImageComparison />
      <StyledP>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti,
        consequatur. Consequuntur non praesentium voluptatibus qui, tenetur
        dicta explicabo fuga, quas a, accusamus iste laborum libero labore?
        Ratione id ipsam repudiandae? Nam illum voluptate suscipit a quibusdam
        harum sapiente velit consequuntur? Eveniet perferendis iusto nostrum
        rem! Deserunt quasi a dicta neque quidem odio officia doloribus officiis
        voluptas praesentium dolore, iste id! Inventore tenetur omnis sunt. Cum
        excepturi ea rem autem placeat, et reiciendis hic perferendis, voluptas,
        quidem nam blanditiis iure. Cum aliquid laboriosam placeat debitis odit
        tempore a nulla. Ipsum, exercitationem. Sit vitae porro corrupti rerum
        vel perferendis aliquam. Fugiat, vero, voluptatum suscipit consequatur
        sapiente officia natus expedita ea dignissimos odio mollitia officiis
        temporibus reprehenderit rerum quas alias ipsum commodi. Corporis.
        Voluptatibus, rerum consectetur optio a veniam iste earum dolorem
        laboriosam officia? Ex in alias voluptatum beatae delectus sequi aperiam
        temporibus id blanditiis. Ut repudiandae laudantium quidem consectetur
        illum unde veniam?
      </StyledP>
    </SectionLayout>
  );
};

export default Section1;

// export const query = graphql`
//   query {
//     allFile(filter: { extension: { eq: "png" } }) {
//       edges {
//         node {
//           childImageSharp {
//             fixed(width: 300, height: 300) {
//               ...GatsbyImageSharpFixed_tracedSVG
//             }
//           }
//         }
//       }
//     }
//     section1Json {
//       title
//       first_paragraph
//       second_paragraph
//       third_paragraph
//     }
//   }
// `;

// <StyledParagraph>{data.section1Json.first_paragraph}</StyledParagraph>
// <StyledParagraph>{data.section1Json.second_paragraph}</StyledParagraph>
// <StyledParagraph>{data.section1Json.third_paragraph}</StyledParagraph>
