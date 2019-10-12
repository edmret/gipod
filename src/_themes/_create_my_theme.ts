import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeOptions } from '@material-ui/core/styles/createMuiTheme';

import red from '@material-ui/core/colors/red';
import pink from '@material-ui/core/colors/pink';

const createMyTheme = (options: ThemeOptions) => createMuiTheme({
    palette: {
        primary: pink,
        secondary: red
    },
    ...options,
});

export default createMyTheme;