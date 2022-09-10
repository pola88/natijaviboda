import React from 'react';
import styled from 'styled-components';
import Typography from '@mui/material/Typography';
import { useNav } from '../hooks/useNav';

const Map = styled.iframe`
  border: none;
  padding-top: 86px;
`

const HowToGoContainer = styled.div`
  margin-bottom: 300px;
`;

const HowToGo = () => {
  const howToGo = useNav('howToGo');

  return (
    <HowToGoContainer ref={howToGo} id="howToGo">
      <Typography variant="h3">Cómo ir</Typography>
      <Map
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3276.397093725845!2d-58.385898384259704!3d-34.79595028041018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcd33817dcad05%3A0xb0446f84f0d3fb87!2sCasona%20Amelie!5e0!3m2!1ses-419!2sar!4v1660147368818!5m2!1ses-419!2sar"
        width="100%"
        height="500px"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      />
    </HowToGoContainer>
  )
};

export default HowToGo;