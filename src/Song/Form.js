import React, { useState } from 'react';
import styled from 'styled-components';
import OutlinedInput from '@mui/material/OutlinedInput';
import Button from '@mui/material/Button';
import { Grid } from '@mui/material';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Alert from '../Alerts';
import IconButton from '@mui/material/IconButton';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import CircleIcon from '@mui/icons-material/Circle';

const FormContainer = styled.div`
  background-color: #E7F0E4;
  border-radius: 10px;
  max-width: 700px;
  min-height: 500px;
  @media (max-width: 1024px) {
    max-width: 100%;
    margin-top: 20px;
    background-color: #FCF9F7;
  }
`;

const SongList = styled(Grid)`
  background-color: #FFFF;
  height: 300px;
  border-radius: 10px;
  overflow: auto;
  @media (max-width: 1024px) {
    border: 1px solid #D6D6D6;
    margin-top: 20px !important;
  }
`;

const StyledCircleIcon = styled(CircleIcon)`
  font-size: 0.6rem !important;
`

const Form = () => {
  const [inputValue, setInputValue] = useState('');
  const [currentSongs, setCurrentSongs] = useState([]);
  const [showAlert, setShowAlert] = useState({
    open: false, severity: '', message: ''
  });

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const addSong = () => {
    if (inputValue && inputValue.replace(/\s/g, '') !== '') {
      setCurrentSongs(currentSongs.concat(inputValue));
      setInputValue('');
    } else {
      setShowAlert({
        open: true, severity: 'error', message: 'Por favor escribí un tema y banda'
      });
    }
  };

  const keyPress = (e) => {
    if(e.keyCode === 13){
      addSong();
    }
  }
  const removeSong = (index) => {
    let copyListSongs = [...currentSongs];
    copyListSongs.splice(index, 1)
    setCurrentSongs(copyListSongs);
  };

  const onSend = () => {
    if (currentSongs.length === 0) {
      setShowAlert({
        open: true, severity: 'error', message: 'Por favor agregá un tema o más'
      });
      return;
    }
    
    fetch('/save_song.php', {
      method: 'POST', 
      mode: 'cors',
      body: JSON.stringify({
        songs: currentSongs
      })
    }).then( (response) => {
      if (response.status === 200) {
        setInputValue('');
        setCurrentSongs([]);
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
        <Grid item xs={12} sm={12} md={12} lg={9}>
          <OutlinedInput
            size="small"
            id="new-song"
            value={inputValue}
            onChange={handleChange}
            onKeyDown={keyPress}
            placeholder='Escribí el tema y la banda/artista'
            fullWidth={true}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={3}>
          <Button
            color="secondary"
            startIcon={<AddCircleOutlineOutlinedIcon />}
            variant="outlined"
            onClick={addSong}
            fullWidth={true}
          >
            Agregar
          </Button>
        </Grid>

        <Grid item xs={12} sm={12} md={12}>
          <SongList item>
            <List>
              {currentSongs.map( (currentSong, index) => (
                <ListItem
                  key={index}
                  secondaryAction={
                    <IconButton aria-label="comment" onClick={ () => removeSong(index)}>
                      <DeleteOutlinedIcon />
                    </IconButton>
                  }
                >
                  <ListItemAvatar>
                    <StyledCircleIcon />
                  </ListItemAvatar>
                  <ListItemText primary={currentSong} />
                </ListItem>
              ))}
            </List>
          </SongList>
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