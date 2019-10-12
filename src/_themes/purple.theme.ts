import createMyTheme from './_create_my_theme';
import purple from '@material-ui/core/colors/purple';
import lime from '@material-ui/core/colors/blueGrey';

const Theme = createMyTheme({
  palette: {
    primary: {
        main: 'rgb(69, 77, 174)',
        light: '#FFF'
    }
  },
  customPallete: {}
});

export default Theme;