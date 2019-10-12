import createMyTheme from './_create_my_theme';

import red from '@material-ui/core/colors/red';
import pink from '@material-ui/core/colors/pink';

const pinkTheme = createMyTheme({
    palette: {
        primary: pink,
        secondary: red
    },
    customPallete: {}
});

export default pinkTheme