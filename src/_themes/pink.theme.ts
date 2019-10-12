import createMyTheme from './_create_my_theme';

import lime from '@material-ui/core/colors/lime';
import pink from '@material-ui/core/colors/pink';

const pinkTheme = createMyTheme({
    palette: {
        primary: pink,
        secondary: lime
    },
    additionalColors: {
        successColor: '#03fc88' 
    }
});

export default pinkTheme