import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import ReactCompareImage from 'react-compare-image';
import FirstDog from '../../assets/images/dog1.jpg';
import SecondDog from '../../assets/images/dog2.jpg';

const StyledWrapper = styled.div`
  max-width: 575px;
  width: 100%;
`;

const ImageSlider = () => {
  return (
    <>
      <StyledWrapper>
        <ReactCompareImage
          leftImage={FirstDog}
          leftImageLabel="Gosia"
          rightImageLabel="Hubert"
          rightImage={SecondDog}
        />
      </StyledWrapper>
    </>
  );
};

export default ImageSlider;
