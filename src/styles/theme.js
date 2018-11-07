import { createMuiTheme } from "@material-ui/core";

const getTheme = (brand) => {
  switch (brand) {
    case 'cidermaker':
      return cidermaker;
    case 'brewmaster':
      return brewmaster;
    default: 'brewmaster';
  }
}

////////////////////////////////////////////////////////////////////////////////////////////
//////  Variables  /////////////////////////////////////////////////////////////////////////

// global
// typography
const font_family = 'Arial, Helvetica, sans-serif';

// colors
const gray = '#939399';
const gray_light = '#F0F0F0';
const gray_dark = '#48484C';

// other
const modal_zindex = 50000;

// brand specific
const cidermaker_primary_main = '#F7CF00';
const cidermaker_primary_light = '#FFE45B';
const cidermaker_primary_dark = '#A38800';

const brewmaster_primary_main = '#008EFF';
const brewmaster_primary_light = '#84C9ff';
const brewmaster_primary_dark = '#005EA8';

////////////////////////////////////////////////////////////////////////////////////////////
//////  Component Overrides ////////////////////////////////////////////////////////////////
const getComponentOverrides = (brand) => {
  return {
    MuiButton: {
      root: {
        background: 'none',
        '&:hover': {
          backgroundColor: brand === 'cidermaker' ? cidermaker_primary_main : brewmaster_primary_main,
          color: brand === 'cidermaker' ? 'rgba(0, 0, 0, 0.87)' : 'white',
        }
      }
    },
    MuiDialogActions: {
      root: {
        padding: "0px 24px 20px 24px",
        margin: 0
      },
    }
  }
};

////////////////////////////////////////////////////////////////////////////////////////////
//////  Theme Overrides  ///////////////////////////////////////////////////////////////////
const cidermaker = createMuiTheme({
  palette: {
    primary: {
      light: cidermaker_primary_light,
      main: cidermaker_primary_main,
      dark: cidermaker_primary_dark,
    },
    secondary: {
      light: gray_light,
      main: gray,
      dark: gray_dark
    },
    action: {
      hover: gray_light
    }
  },
  typography: {
    fontFamily: font_family,
    title: {
      fontSize: '1.2rem'
    }
  },
  zIndex: {
    modal: modal_zindex
  },
  border: {
    default: '1px solid #939399',
  },
  overrides: getComponentOverrides('cidermaker')
});

const brewmaster = createMuiTheme({
  palette: {
    primary: {
      light: brewmaster_primary_light,
      main: brewmaster_primary_main,
      dark: brewmaster_primary_dark,
    },
    secondary: {
      light: gray_light,
      main: gray,
      dark: gray_dark
    },
    action: {
      hover: gray_light
    }
  },
  typography: {
    fontFamily: font_family,
    title: {
      fontSize: '1.2rem'
    }
  },
  zIndex: {
    modal: modal_zindex
  },
  overrides: getComponentOverrides('brewmaster')
});

export { getTheme };