import React from 'react';
import Flower from './Flower.png';
import styled from 'styled-components';


const FlowerContainer = styled.div`
  height: 75px;
  width: 100%;
  padding-top: 100px;
  padding-bottom: 38px;
`;

const FlowerImg = styled.img`
  margin: auto;
  height: 75px;
`

const Divider = () => (
  <FlowerContainer>
    <FlowerImg src={Flower} />
  </FlowerContainer>
);

export default Divider;