import React from 'react';
import styled from 'styled-components';
import { Grid } from '@mui/material';
import Instagram from './Instagram.png';
import Typography from '@mui/material/Typography';
import ArrowUpwardRoundedIcon from '@mui/icons-material/ArrowUpwardRounded';

const FooterContainer = styled.div`
  background-color: #525E22;
  width: 100%;
`;

const InstagramImg = styled.img`
  height: 39px;
  margin-top: 33px;
  margin-bottom: 20px;
`;

const GotToUpLink = styled(Typography)`
  padding-right: 10px;
`;

const GoToUpContainer = styled(Grid)`
  height: 100px;
  background-color: #E5E5E5;
  
`;

const StyledGrid = styled(Grid)`
  cursor: pointer;
`;

const TitleStyled = styled(Typography) `
  @media (max-width: 1024px) {
    margin-left: 15px !important;
    margin-right: 15px !important;
  }
`

const Details = () => {
  const goToUp = () => {
    window.scrollTo(0,0);
  };

  return (
    <FooterContainer id="footer">
      <InstagramImg src={Instagram} />
      <TitleStyled color="#FFFF" variant="h6">¡Segui el Instagram de la boda y etiquetalos en tus fotos!</TitleStyled>
      <Typography color="#FFFF" variant="h5" paddingBottom='40px'>natijavi_boda</Typography>
      <GoToUpContainer
        container
        justifyContent="center"
        alignItems="center"
      > 
        <StyledGrid item onClick={goToUp}>
          <GotToUpLink variant="h5">Ir arriba</GotToUpLink>
        </StyledGrid>
        <StyledGrid item onClick={goToUp}>
          <ArrowUpwardRoundedIcon />
        </StyledGrid>
      </GoToUpContainer>
    </FooterContainer>
  )
};

export default Details;