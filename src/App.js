import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import MainRoutes from './routes';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import dark from './styles/theme/dark';

const App = () => {

  return (
    <ThemeProvider theme={dark}>
      <GlobalStyles />
      <Router>
        <MainRoutes />
      </Router>
    </ThemeProvider>
  )
}

export default App;