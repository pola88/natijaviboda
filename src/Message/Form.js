import React, { useState } from 'react';
import styled from 'styled-components';
import OutlinedInput from '@mui/material/OutlinedInput';
import Button from '@mui/material/Button';
import { Grid, FormHelperText } from '@mui/material';
import Alert from '../Alerts';

const CHARACTER_LIMIT = 300;

const FormContainer = styled.div`
  background-color: #E7F0E4;
  border-radius: 10px;
  max-width: 700px;
  min-height: 500px;

  @media (max-width: 1024px) {
    max-width: 100%;
    margin-top: 20px;
    background-color: inherit
  }
`;

const InputContainer = styled(Grid)`
  position: relative;
  margin-bottom: 15px;
`;

const TextCounter = styled(FormHelperText)`
  position: absolute;
  right: 10px;
  font-size: 1.2rem !important;
  @media (max-width: 1024px) {
    bottom: -20px
  }
`

const Form = () => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [showAlert, setShowAlert] = useState({
    open: false, severity: '', message: ''
  });

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const onSend = () => {
    if (name === '') {
      setShowAlert({
        open: true, severity: 'error', message: 'Por favor escribí un nombre'
      });
    } else if (message === '') {
      setShowAlert({
        open: true, severity: 'error', message: 'Por favor escribí un mensaje'
      });
    } else {
      fetch('/message.php', {
        method: 'POST', 
        mode: 'cors',
        body: JSON.stringify({
          message: { name, text: message }
        })
      }).then( (response) => {
        if (response.status === 200){
          setName('');
          setMessage('');
          setShowAlert({
            open: true, severity: 'success', message: 'Mensaje enviado exitosamente'
          });
        } else {
          setShowAlert({
            open: true, severity: 'error', message: 'Ocurrió un error, intentalo nuevamente'
          });
        }
      }).catch( () => {
        setShowAlert({
          open: true, severity: 'error', message: 'Ocurrió un error, intentalo nuevamente'
        });
      });
    }
  };

  const handleClose = () => {
    setShowAlert({
      ...showAlert,
      open: false
    });
  }

  return (
    <FormContainer>
      <Grid container p="32px" spacing={2}>
        <Alert
          showAlert={showAlert}
          handleClose={handleClose}
        />
        <Grid item xs={12} sm={12} md={12}>
          <OutlinedInput
            size="small"
            id="from"
            value={name}
            onChange={handleNameChange}
            placeholder='Nombre o Familia'
            fullWidth={true}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={12}>
          <InputContainer>
            <OutlinedInput
              id="from"
              inputProps={{
                maxLength: CHARACTER_LIMIT
              }}
              value={message}
              onChange={handleMessageChange}
              rows={8}
              multiline
              fullWidth={true}
            />
            <TextCounter>{message.length}/{CHARACTER_LIMIT}</TextCounter>
          </InputContainer>
            
          <Grid item pt="30px">
            <Button
              color="primary"
              fullWidth={true}
              variant="outlined"
              onClick={onSend}
            >
              Enviar
            </Button>  
          </Grid>
          
        </Grid>
      </Grid>
     
    </FormContainer>
  )
};

export default Form;