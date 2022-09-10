import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import styled from 'styled-components';
import natiYJaviImg from '../Slider/NatiYJavi.png';
import { MenuItem } from './MenuItem';

const StyledMenuIcon = styled(MenuIcon)`
  font-size: 2rem !important;
`;

const NatyJaviContainer = styled.img`
  padding-top: 33px;
  padding-left: 33px;
  width: 65%;
`

const pages = [
  { name: 'Nuestra historia', id: 'ourHistory' },
  { name: 'Detalles', id: 'details' },
  { name: 'Cómo ir', id: 'howToGo' },
  { name: 'Elegir canciones', id: 'songs' },
  { name: 'Mensajes', id:'messages' },
];

const ResponsiveAppBar = () => {
  const [opened, setOpened] = useState(false);

  const handleOpenNavMenu = (event) => {
    setOpened(true);
  };
  const handleCloseNavMenu = () => {
    if (opened) {
      setOpened(false);
    }
  };

  return (
    <AppBar position="fixed">
      <Toolbar disableGutters>
        <Box
          sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
          <IconButton
            size="large"
            aria-label="menu"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
          >
            <StyledMenuIcon />
          </IconButton>
          
            <Drawer
              anchor="left"
              open={opened}
              onClose={handleOpenNavMenu}
              ModalProps={{ onClose: handleCloseNavMenu, disableScrollLock: true }}
            >
              <NatyJaviContainer src={natiYJaviImg} />
              {pages.map((page) => (
                <MenuItem
                  key={page.id}
                  page={page}
                  onClick={ () => setOpened(false)}
                >
                  {page.name}
                </MenuItem>
              ))}
            </Drawer>    
        </Box>
        <Box
          sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}
          justifyContent="center"
          alignItems="center"
          >
          {pages.map((page) => (
            <MenuItem
              key={page.id}
              page={page}
            >
              {page.name}
            </MenuItem>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};
export default ResponsiveAppBar;
