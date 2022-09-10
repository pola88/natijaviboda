import React from 'react';
import styled from 'styled-components';
import Divider from '../Divider/Divider';
import { Grid } from '@mui/material';
import Calendar from './Calendar.png';
import Location from './Location.png';
import Flower from './Flower.png';
import Typography from '@mui/material/Typography';
import { useNav } from '../hooks/useNav';


const DetailsContainer = styled.div`
  background-color: #FCF9F7;
  padding-bottom: 161px;
  position: relative;
  margin-bottom: 200px;
  @media (max-width: 1024px) {
    padding-bottom: 140px;
    margin-bottom: 0;
  }
`;

const FlowerImg = styled.img`
  position: absolute;
  left: 0;
  top: -90px;
  height: 200px;
  
  @media (max-width: 1024px) {
    display: none;
  }
`;

const CalendarImg = styled.img`
  height: 45px;
  margin-bottom: 45px;

  @media (max-width: 1024px) {
    margin-bottom: 25px;
    height: 40px;
  }
`;

const LocationImg = styled.img`
  height: 70px;
  margin-bottom: 45px;

  @media (max-width: 1024px) {
    margin-bottom: 15px;
    height: 60px;
  }
`;

const Content = styled(Grid)`
  padding-top: 100px;
`

const Col = styled(Grid)`
  align-items: center;
  border-right: ${(props) => props.showDivider ? '1px solid #525E22' : 'none'}
`;

const Details = () => {
  const details = useNav('details');

  return (
    <DetailsContainer ref={details} id="details">
      <FlowerImg src={Flower} />
      <Divider />
      <Typography variant="h3">Detalles</Typography>
      <Content
          container
          spacing={{ xs: 6, sm: 6, md: 2 }}
          columns={{ xs: 2, sm: 8, md: 12 }}
          justifyContent="center"
          alignItems="center"
        >
          <Col item xs={2} sm={8} md={6} showDivider={true}>
            <CalendarImg src={Calendar} />
            <Typography variant="h5">03 Diciembre 19:00 hs</Typography>
          </Col>
          <Col item xs={2} sm={8} md={6} >
            <LocationImg src={Location} />
            <Typography variant="h5">
              Casona Amelie
            </Typography>
            <Typography variant="h5">
              Diagonal Toll 1704 - (Adrogué)
            </Typography>
          </Col>
        </Content>
    </DetailsContainer>
  )
};

export default Details;