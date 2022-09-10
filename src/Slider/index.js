import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import styled from 'styled-components';
import LeftImg from './Left.png';
import RightImg from './Right.png';
import { AllPhotos } from './Photos';

const SliderContainer = styled.div`
  position: relative;
  margin-top: 60px;
  padding-left: 160px;
  padding-right: 160px;
  height: 95vh;
  @media (max-width: 1024px) {
    background-color: #FCF9F7;
    padding: 0;
    height: 40vh;
  }
`;

const CarouselContainer = styled.div`
  @media (max-width: 1024px) {
      margin: 0;
      position: absolute;
      top: 50%;
      -ms-transform: translateY(-50%);
      transform: translateY(-50%);
  }
`

const Image = styled.img`
  height: 90vh;
  object-fit: contain;
`;

const LeftImgContainer = styled.img`
  position: absolute;
  left: 0;
  top: -50px;
  z-index: 99;
  height: 500px;
  @media (max-width: 1024px) {
    display: none;
  }
`;

const RightImgContainer = styled.img`
  position: absolute;
  right: 0;
  top: -50px;
  z-index: 99;
  height: 500px;
  @media (max-width: 1024px) {
    display: none;
  }
`;

const Slider = () => {
    const images = [];
    AllPhotos.forEach( (photo, index) => {
      images.push(<div key={index}><Image src={photo} /></div>);
    })
    return (
      <SliderContainer>
        <LeftImgContainer src={LeftImg} />
        <RightImgContainer src={RightImg} />
        <CarouselContainer>
          <Carousel
            swipeable={false}
            autoPlay={true}
            infiniteLoop={true}
            renderIndicator={false}
            showArrows={false}
            showStatus={false}
            showIndicators={false}
            showThumbs={false}
            stopOnHover={false}
            emulateTouch={false}
            animationHandler="fade"
            interval={5000}
            dynamicHeight={false}
            > 
              {images}
          </Carousel>
        </CarouselContainer>
        
      </SliderContainer>
    );
};

export default Slider;