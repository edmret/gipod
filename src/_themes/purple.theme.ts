import createMyTheme from './_create_my_theme';

const Theme = createMyTheme({
  palette: {
    primary: {
        main: 'rgb(69, 77, 174)',
        light: 'rgb(240, 251, 254)',
        dark: 'rgb(184, 181, 212)',
        contrastText: '#FFF'
    },
    secondary: {
      main: "#3F3F3F",
      contrastText: "#3F3F3F"
    }
  },
  customPallete: {}
});

export default Theme;