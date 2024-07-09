import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'sans-serif',
  },
  palette: {
    layout: {
      main: '#1a237e',
    },
    primary: {
      main: '#ff0000',
    },
    text: {
      main: '#000000',
      white: '#ffffff',
      lightBlue: '#d1d3e5',
    },
    buttons: {
      primary: '#3d6cb4',
      secondary: '#1a237e',
      hover: '#767bb2',
      selectedHover: '#151c65',
    },
  },
});

// #767bb2
// #1a237e
// #0d0d15
// #050719
// #3d6cb4
// #1a1a1a

export default theme;
