import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import createStudio from 'studio';

const boot = async () => {
  const studio = await createStudio(() => ({}), () => <div />);
  const root = document.createElement('div');
  document.body.appendChild(root);

  ReactDOM.render(studio.App, root);
}

boot()
  .then(() => console.log('ready'))
  .catch((err) => console.error(err));
