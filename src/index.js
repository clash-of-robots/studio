const Studio = require('./studio');
const Game = require('clash-of-robots').default;
import studioReducer from './reducers';
import theme from './themes/default';

module.exports = async (reducer, World, Editor) => {
  const game = new Game(reducer, {
    additionalReducers: {
      studio: studioReducer,
    },
  });
  const studio = new Studio(World, Editor, game, theme);
  return studio;
};
