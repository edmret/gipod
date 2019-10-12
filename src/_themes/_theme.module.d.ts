import { Theme } from '@material-ui/core/styles/createMuiTheme';
import { Breakpoint } from '@material-ui/core/styles/createBreakpoints';
import {AditionalColors} from './types/AditionalColors.interface';

declare module '@material-ui/core/styles/createMuiTheme' {
  interface Theme {
    additionalColors: AditionalColors
  }
  // allow configuration using `createMuiTheme`
  interface ThemeOptions {
    additionalColors: AditionalColors
  }
}
