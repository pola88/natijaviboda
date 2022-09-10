import React from 'react';
import styled from 'styled-components';
import Divider from '../Divider/Divider';
import { Grid } from '@mui/material';
import Play from './Play.png';
import Form from './Form';
import Typography from '@mui/material/Typography';
import { useNav } from '../hooks/useNav';

const SongsContainer = styled.div`
  background-color: #FCF9F7;
  margin-top: 150px;
  padding-bottom: 150px;
`;

const Content = styled(Grid)`
  padding-top: 86px;
  @media (max-width: 1024px) {
    padding-top: 46px;
  }
`
const PlayImg = styled.img`
  height: 45px;
  margin-bottom: 45px;
`;

const Col = styled(Grid)`
  align-items: center;
`;

const TitleStyled = styled(Typography) `
  @media (max-width: 1024px) {
    margin-left: 15px !important;
    margin-right: 15px !important;
  }
`;

const DescStyled = styled(Typography) `
  margin-top: 32px !important;
  font-weight: 700 !important;
  @media (max-width: 1024px) {
    margin-top: 20px !important;
  }
`;

const Song = () => {
  const song = useNav('songs');

  return (
    <SongsContainer ref={song} id="songs">
      <Divider />
      <TitleStyled variant="h3">Elegí las canciones de la fiesta</TitleStyled>
      <Content
          container
          spacing={{ xs: 2, sm: 2, md: 2 }}
          columns={{ xs: 2, sm: 8, md: 12 }}
          justifyContent="center"
        >
          <Col item xs={2} sm={8} md={5}>
            <PlayImg src={Play} />
            <Typography variant="h5">
                ¿Qué temas no pueden faltar?
            </Typography>
            <Typography variant="h5">
                Enviá los que te gustaría escuchar
            </Typography>
            <DescStyled variant="h5">
                Tenés tiempo hasta el 19 de noviembre
            </DescStyled>
          </Col>
          <Col item xs={2} sm={8} md={6} >
            <Form />
          </Col>
        </Content>
    </SongsContainer>
  )
};

export default Song;