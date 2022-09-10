import React from 'react';
import styled from 'styled-components';
import Typography from '@mui/material/Typography';
import Divider from '../Divider/Divider';
import Flower from './Flower.png';
import Miscellaneous from './Miscellaneous.png';
import { useNav } from '../hooks/useNav';
import { Fade} from "react-awesome-reveal";

const OurHistoryContainer = styled.div`
  padding-top: 100px;
  padding-bottom: 150px;
  position: relative;
  @media (max-width: 1024px) {
    padding-bottom: 100px;
  }
`;


const MsgContainer = styled.div`
  padding-top: 50px;
  @media (max-width: 1024px) {
    margin-left: 20px;
    margin-right: 20px;
  }
`;

const TypographyStyled = styled(Typography)`
  line-height: 60px !important;
  @media (max-width: 1024px) {
    line-height: 50px !important;
  }
`

const FlowerImg = styled.img`
  position: absolute;
  right: 0;
  top: -90px;
  height: 400px;
  
  @media (max-width: 1024px) {
    display: none;
  }
`;

const MiscellaneousImg = styled.img`
  margin: auto;
  height: 12px;
  padding-top: 60px;
`;

const MobileAnimation = styled.div`
  display: none;
  @media (max-width: 1024px) {
    display: inline-block;
  }
`;

const DesktopAnimation = styled.div`
  display: inline-block;
  @media (max-width: 1024px) {
    display: none;
  }
`;

const OurHistory = () => {
  const ourHistory = useNav('ourHistory');

  return (
    <OurHistoryContainer ref={ourHistory} id="ourHistory">
      <FlowerImg src={Flower} />
      <Divider />
      <Typography variant="h3">Nuestra historia</Typography>
        <MsgContainer>
          <MobileAnimation>
              <Fade
                delay={1e3}
                cascade
                damping={1.6}>
                <TypographyStyled variant="h4">Nos conocimos,</TypographyStyled>
                <TypographyStyled variant="h4">nos hicimos amigos,</TypographyStyled>
                <TypographyStyled variant="h4">nos reencontramos,</TypographyStyled>
                <TypographyStyled variant="h4">nos enamoramos,</TypographyStyled>
                <TypographyStyled variant="h4">nos convertimos en padres,</TypographyStyled>
                <TypographyStyled variant="h4">
                  y de repente supimos que era <br/>
                  el momento de estar
                </TypographyStyled>
                <TypographyStyled variant="h4">
                  juntos para siempre.
                </TypographyStyled>
              </Fade>
            </MobileAnimation>
            <DesktopAnimation>
              <Fade
                delay={1e3}
                cascade
                damping={1.6}>
                  <TypographyStyled variant="h4">Nos conocimos,</TypographyStyled>
                  <TypographyStyled variant="h4">nos hicimos amigos,</TypographyStyled>
                  <TypographyStyled variant="h4">nos reencontramos,</TypographyStyled>
                  <TypographyStyled variant="h4">nos enamoramos,</TypographyStyled>
                  <TypographyStyled variant="h4">nos convertimos en padres,</TypographyStyled>
                  <TypographyStyled variant="h4">
                    y de repente supimos que era el momento <br/>
                    de estar juntos para siempre.
                  </TypographyStyled>
              </Fade>
            </DesktopAnimation>
          </MsgContainer>
        <MiscellaneousImg src={Miscellaneous} />
    </OurHistoryContainer>
  )
};

export default OurHistory;