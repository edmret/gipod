import React from 'react';
import './App.css';
import ProductsContainer from './product/ProductsContainer';
import Container from '@material-ui/core/Container';
import { MuiThemeProvider } from '@material-ui/core/styles';

import PurpleTheme from './_themes/purple.theme';
import PinkTheme from './_themes/pink.theme';

const App: React.FC = () => {

  //TODO: make a switchable theme
  const [theme, setTheme] = React.useState(PurpleTheme);

  return (
    <MuiThemeProvider theme={theme}>
      <Container maxWidth="sm">
          <ProductsContainer />
      </Container>
    </MuiThemeProvider>
  );
}

export default App;
