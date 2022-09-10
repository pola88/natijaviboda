import React, { useEffect, useRef } from 'react';
import Grid from '@mui/material/Grid';
import styled from 'styled-components';
import Typography from '@mui/material/Typography';
import Fade from '@mui/material/Fade';

const StyledMessage = styled(Typography)`
  font-family: "Roboto" !important;
  padding-left: 80px;
  padding-right: 80px;
  color: #FFFFFF;
  @media (max-width: 1024px) {
    padding-left: 10px;
    padding-right: 10px;
  }
`;

const SnackbarContentStyled = styled.div`
  background-color: ${(props) => props.severity === 'success' ? '#2e7d32' : '#d32f2f'} !important;
  position: relative;
  padding: 10px;
  top: -60px;
  border-radius: 10px;
  @media (max-width: 1024px) {
    top: -40px;
  }
`;

const SnackbarContainer = styled(Grid)`
  height: 0px;
  padding-top: 0 !important;
  padding-bottom: 0;
  // ${(props) => !props.open ? 'display: none !important;' : ''}
`;


const CustomAlert = ({ showAlert, handleClose }) => {
  const alertRef = useRef();
  useEffect(() => {
    if (showAlert.open) {
      alertRef.current.scrollIntoView();
      window.scrollBy(0, -100);
      const timer = setTimeout(() => {
        handleClose();
      }, 4000);

      return () => clearTimeout(timer);
    }
  }, [showAlert.open]);

  return (
    <Fade in={showAlert.open} timeout={500}>
      <SnackbarContainer item xs={12} sm={12} md={12}>
        <SnackbarContentStyled
          severity={showAlert?.severity}
        >
          <StyledMessage ref={alertRef} variant='h6'>
            {showAlert?.message}
          </StyledMessage>
        </SnackbarContentStyled>
      </SnackbarContainer>
    </Fade>
  );
}
  

export default CustomAlert;