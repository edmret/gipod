import React from 'react';
import './App.css';

import { StateProvider, DonWidgetState } from './stores/Store';
import {reducer} from './reducers/reducer';
import {ThemeManager} from './ThemeManager';

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
  deviceInfo: window['widgetChubbDevices'] || {},
  sponsorConfig: window['CHUBB_API_CONFIG'] || {}
};


const App: React.FC = () => {

  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <ThemeManager />
    </StateProvider>
  );
}

export default App;
