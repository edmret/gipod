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


//fake and hardcoded
window['widgetChubbDevices'] = {
  freestorage: 18892,
  imei: "354263090723715",
  loc: {
    address: "9209 S Dadeland Blvd, Kendall, FL 33156, USA",
    city: "Miami-Dade County",
    country: "US",
    county: "Kendall",
    lat: 25.6853542
  },
  memory: "5579.45",
  platform: "Android",
  totalstorage: 64000,
  uuid: "633565e9eadec2b5",
};



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
