import { createTheme, responsiveFontSizes } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'Athelas'
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'capitalize',
          border: '2px solid',
          borderColor: '#525E22',
          fontSize: '1.5rem',
          fontWeight: 700,
          borderRadius: '10px',
          '&:hover': {
            border: '2px solid',
            borderColor: '#525E22',
          },
        },
        startIcon: {
          fontWeight: 500,
          '.MuiSvgIcon-root': {
            fontSize: '28px',
          }
          
        },
        outlinedPrimary: {
          color: '#FFFF',
          backgroundColor: '#525E22',
          '&:hover': {
            backgroundColor: '#404919'
          }
        },
        outlinedSecondary: {
          color: '#525E22',
        }
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        sizeSmall: {
          height: '54px',
        },
        root: {
          backgroundColor: '#FFFFFF',
          fontSize: '1.5rem',
          borderRadius: '10px',
          "input::placeholder": {
            fontSize: '1.5rem',
            fontStyle: "italic"
          },
          '@media (max-width: 1024px)': {
            border: '1px solid #A6A6A6',
            fontSize: '1.3rem',
            marginBottom: '15px',
            '&:hover': {
              border: '2px solid #525E22'
            },

            "input::placeholder": {
              fontSize: '1.3rem',
              fontStyle: "normal"
            },
          }
        },
        notchedOutline: {
          border: 'none'
        }
      }
    },
    MuiList: {
      styleOverrides: {
        root: {
          margin: '10px',
          paddingTop: 0,
          paddingBottom: 0
        }
      }
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          paddingTop: 0,
          paddingBottom: 0
        }
      }
    },
    MuiListItemText: {
      styleOverrides: {
        primary: {
          fontSize: '1.5rem',
          '@media (max-width: 1024px)': {
            fontSize: '1.3rem',
          }
        }
      }
    },
    MuiListItemAvatar: {
      styleOverrides: {
        root: {
          minWidth: '25px'
        }
      }
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          height: '60px',
          boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
          backgroundColor: '#FFFFFF',
        }
      }
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          width: '70%'
        }
      }
    },
    MuiTypography: {
      styleOverrides: {
        h5: {
          paddingBottom: '5px'
        }
      }
    }
  },
  
  
});

export default responsiveFontSizes(theme);
