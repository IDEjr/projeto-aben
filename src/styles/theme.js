import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import shadows from './shadows';

const primaryBlue = '#117FF2';
const primaryYellow = '#F6D80B';
const darkBlue = '#373C3F';

// Create a theme instance.
const theme = responsiveFontSizes(createTheme({
  palette: {
    mode: 'light',
    background: {
      default: '#F4F5F9',
      paper: '#ffffff'
    },
    action: {
      active: '#6b778c'
    },
    primary: {
      contrastText: '#ffffff',
      main: primaryBlue,
      light: "#C4D9FF",
    },
    secondary: {
      contrastText: darkBlue,
      main: primaryYellow,
      light: "#CFF9E7"
    },
    dark: {
      contrastText: '#ffffff',
      main: darkBlue,
      light: "#C4D9FF",
    },
    error: {
      contrastText: '#ffffff',
      main: '#f44336',
      light: "#f9dbd9"
    },
    success: {
      contrastText: '#ffffff',
      main: '#01c851'
    },
    warning: {
      contrastText: '#ffffff',
      main: '#ff9800'
    },
    orange: {
      main: "#FF9C0E",
      light: "#fff0db",
      contrastText: '#ffffff',
    },
    purple: {
      main: "#7400B8",
      contrastText: '#ffffff',
    },
    yellow: {
      main: "#FFDB01",
      contrastText: '#ffffff',
      light: 'FFF7C9'
    },
    grey: {
      contrastText: '#ffffff',
      main: "#A2A4B9",
      light: "#C5CAD2;"
    },
    filterColor: {
      main: "#EFF0F6",
      contrastText: '#253858',
    },
    text: {
      primary: '#172b4d',
      secondary: '#6b778c'
    },
  },
  shape: {
    borderRadius: 6
  },
  components: {
    MuiCardHeader: {
      defaultProps: {
        titleTypographyProps: {
          variant: 'h6'
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none'
        }
      },
      variants: [
        {
          props: { variant: "outlined" },
          style: {
            borderWidth: 2,
            "&:hover": {
              borderWidth: 2,
            }
          },
        }
      ],
    },
  },
  typography: {
    button: {
      fontWeight: 600
    },
    fontFamily: '\'Roboto\', sans-serif',
    h1: {
      fontWeight: 600,
      fontSize: '3.5rem'
    },
    h2: {
      fontWeight: 600,
      fontSize: '3rem'
    },
    h3: {
      fontWeight: 600,
      fontSize: '2.25rem'
    },
    h4: {
      fontWeight: 600,
      fontSize: '2rem'
    },
    h5: {
      fontWeight: 600,
      fontSize: '1.5rem'
    },
    h6: {
      fontWeight: 600,
      fontSize: '1.125rem'
    },
    overline: {
      fontWeight: 600
    }
  },
  shadows: shadows
}));

export default theme;
