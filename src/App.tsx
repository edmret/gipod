import React from 'react';
import './App.css';
import Container from '@material-ui/core/Container';
import { MuiThemeProvider } from '@material-ui/core/styles';

import PurpleTheme from './_themes/purple.theme';
import PinkTheme from './_themes/pink.theme';

import { StateProvider, DonWidgetState } from './stores/Store';
import {reducer} from './reducers/reducer';

import { StateRouterRender } from './_stateRouter/routerRender';

import {PhoneInfo} from './UserInfo/PhoneInfo';
import fire from './fire';

const initialState:DonWidgetState = {
  imeiDevice: {},
  currentRoute: 'device-info',
  userInfo: {
    FirstName: '',
    LastName: '',
    Email: '',
    Phone: '',
    BirthDate: ''
  },
  deviceInfo: window['widgetChubbDevices'] || {}
};


const App: React.FC = () => {
  //TODO: make a switchable theme
  const [theme, setTheme] = React.useState(PurpleTheme);

  const profileRef = fire.database().ref('config');


  profileRef.once('value').then(snapshot => {
    console.log('snapshot once', snapshot.val());
  });

  profileRef.on("child_changed", snapshot => {
    console.log("the snapshot", snapshot.val());
  });




  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <MuiThemeProvider theme={theme}>
        <Container>
            <PhoneInfo />
            <StateRouterRender />
        </Container>
      </MuiThemeProvider>
    </StateProvider>
  );
}

export default App;
