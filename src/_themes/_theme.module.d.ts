import { Theme } from '@material-ui/core/styles/createMuiTheme';
import { Breakpoint } from '@material-ui/core/styles/createBreakpoints';
import { any } from 'prop-types';

declare module '@material-ui/core/styles/createMuiTheme' {
  interface Theme {
    customPallete: any
  }
  // allow configuration using `createMuiTheme`
  interface ThemeOptions {
    customPallete: any
  }
}
