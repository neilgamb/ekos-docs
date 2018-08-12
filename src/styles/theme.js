import { createMuiTheme } from '@material-ui/core';

const cidermaker = createMuiTheme({
  palette: {
    primary: {
      main: '#F7CF00',
      light: '#FFE45B',
      dark: '#A38800',
    },
    secondary: {
      light: '#F0F0F0',
      main: '#939399',
      dark: '#48484C',
      contrastText: '#F5F5F5',
    },
    text: {
      primary: '#000000',
      secondary: '#afafaf',
    },
  },
  typography: {
    // fontFamily: "'Montserrat', sans-serif",
  },
});

const getTheme = (brand) => {
  let theme;
  if (brand === 'cidermaker') {
    theme = cidermaker;
  }
  return theme;
};

export default getTheme;
