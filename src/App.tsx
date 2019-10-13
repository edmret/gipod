import React from 'react';
import './App.css';
import Container from '@material-ui/core/Container';
import { MuiThemeProvider } from '@material-ui/core/styles';

import PurpleTheme from './_themes/purple.theme';
import PinkTheme from './_themes/pink.theme';

import { StateProvider, DonWidgetState } from './stores/Store';
import {reducer} from './reducers/reducer';

import { StateRouterRender } from './_stateRouter/routerRender';

const initialState:DonWidgetState = {
  imeiDevice: {},
  currentRoute: '/'
};


const App: React.FC = () => {



  //TODO: make a switchable theme
  const [theme, setTheme] = React.useState(PurpleTheme);

  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <MuiThemeProvider theme={theme}>
        <Container>
            <StateRouterRender />
        </Container>
      </MuiThemeProvider>
    </StateProvider>
  );
}

export default App;
