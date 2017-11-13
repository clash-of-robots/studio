import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

const App = require('./components/app');

class Studio {
  constructor(WorldView, Editor, game, theme = {}) {
    this.App = (
      <ThemeProvider theme={theme}>
        <Provider store={game.store}>
          <App Editor={Editor} World={WorldView} />
        </Provider>
      </ThemeProvider>
    );
  }
}

module.exports = Studio;
