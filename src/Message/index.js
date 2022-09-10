import React from 'react';
import styled from 'styled-components';
import Divider from '../Divider/Divider';
import { Grid } from '@mui/material';
import Letter from './Letter.png';
import Form from './Form';
import Typography from '@mui/material/Typography';
import Flower from './Flower2.png';
import { useNav } from '../hooks/useNav';

const MessagesContainer = styled.div`
  padding-bottom: 150px;
  position: relative;
`;

const Content = styled(Grid)`
  padding-top: 86px;
  @media (max-width: 1024px) {
    padding-top: 46px;
  }
`
const LetterImg = styled.img`
  height: 42px;
  margin-bottom: 45px;
`;

const Col = styled(Grid)`
  align-items: center;
`;

const FlowerImg = styled.img`
  position: absolute;
  left: 0;
  top: -230px;
  width: 350px;
  
  @media (max-width: 1024px) {
    display: none;
  }
`;

const TitleStyled = styled(Typography) `
  @media (max-width: 1024px) {
    margin-left: 10px !important;
    margin-right: 10px !important;
  }
`;

const DescStyled = styled(Typography) `
  margin-top: 32px !important;
  font-weight: 700 !important;
  @media (max-width: 1024px) {
    margin-top: 20px !important;
  }
`;

const Message = () => {
  const message = useNav('messages');

  return (
    <MessagesContainer ref={message} id="messages">
      <FlowerImg src={Flower} />
      <Divider />
      <TitleStyled variant="h3">Dejales un mensaje a los novios</TitleStyled>
      <Content
          container
          spacing={{ xs: 2, sm: 2, md: 2 }}
          columns={{ xs: 2, sm: 8, md: 12 }}
          justifyContent="center"
        >
          <Col item xs={2} sm={8} md={5}>
            <LetterImg src={Letter} />
            <Typography variant="h5">
              ¿Qué te gustaría decirles?
            </Typography>
            <Typography variant="h5">
              ¡Lo vamos a compartir en la fiesta!
            </Typography>
            <DescStyled variant="h5">
              Tenés tiempo hasta el 19 de noviembre
            </DescStyled>
          </Col>
          <Col item xs={2} sm={8} md={6} >
            <Form />
          </Col>
        </Content>
    </MessagesContainer>
  )
};

export default Message;