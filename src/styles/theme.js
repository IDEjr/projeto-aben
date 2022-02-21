import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { ptBR } from '@mui/x-data-grid';

const primaryBlue = "#117FF2";
const primaryYellow = "#F6D80B";
const darkBlue = "#373C3F";

// Create a theme instance.
const theme = responsiveFontSizes(
  createTheme({
    overrides: {
      MuiCssBaseline: {
        "@global": {
          "*": {
            "scrollbar-width": "thin",
          },
          "*::-webkit-scrollbar": {
            width: "4px",
            height: "4px",
          },
        },
      },
    },
    palette: {
      mode: "light",
      background: {
        default: "#F4F5F9",
        paper: "#ffffff",
      },
      action: {
        active: "#6b778c",
      },
      primary: {
        contrastText: "#ffffff",
        main: primaryBlue,
        light: "#C4D9FF",
      },
      secondary: {
        contrastText: darkBlue,
        main: primaryYellow,
        light: "#CFF9E7",
      },
      dark: {
        contrastText: "#ffffff",
        main: darkBlue,
        light: "#C4D9FF",
      },
      text: {
        primary: "#172b4d",
        main: "#172b4d",
        secondary: "#6b778c",
        contrast: "#EFF0F6"
      },
    },
    shape: {
      borderRadius: 6,
    },
    components: {
      MuiCardHeader: {
        defaultProps: {
          titleTypographyProps: {
            variant: "h6",
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: "none",
          },
        },
        variants: [
          {
            props: { variant: "outlined" },
            style: {
              borderWidth: 2,
              "&:hover": {
                borderWidth: 2,
              },
            },
          },
        ],
      },
    },
    typography: {
      button: {
        fontWeight: 600,
      },
      fontFamily: "'Roboto', sans-serif",
      h1: {
        fontWeight: 600,
        fontSize: "3.5rem",
      },
      h2: {
        fontWeight: 600,
        fontSize: "3rem",
      },
      h3: {
        fontWeight: 600,
        fontSize: "2.25rem",
      },
      h4: {
        fontWeight: 600,
        fontSize: "2rem",
      },
      h5: {
        fontWeight: 600,
        fontSize: "1.5rem",
      },
      h6: {
        fontWeight: 600,
        fontSize: "1.125rem",
      },
      body3: {
        fontWeight: 400,
        fontSize: "1.2rem",
      },
      overline: {
        fontWeight: 600,
      },
      footer: {
        fontFamily: "Montserrat",
        fontSize: "0.95rem",
        color: "#ffffff",
      },
    },
  },
    ptBR)
);

export default theme;
