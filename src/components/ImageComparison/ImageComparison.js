import React from 'react';
import styled from 'styled-components';
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from 'react-compare-slider';

import FirstDog from '../../assets/images/dog1.jpg';
import SecondDog from '../../assets/images/dog2.jpg';

const StyledWrapper = styled.div`
  max-width: 360px;
  height: auto;
  position: relative;
`;

const ImageComparison = () => {
  return (
    <StyledWrapper>
      <ReactCompareSlider
        itemOne={<ReactCompareSliderImage src={FirstDog} alt="Image one" />}
        itemTwo={<ReactCompareSliderImage src={SecondDog} alt="Image two" />}
        portrait={true}
      />
    </StyledWrapper>
  );
};

export default ImageComparison;
