import React from 'react';
import Panel from '../blocks/panel';

import Files from './files';
import Timeline from './timeline';
import WorldView from './world-view';
import Editor from './editor';

const register = {
  files: {
    title: 'Files',
    Component: Files,
    maxWidth: '250px',
  },
  editor: {
    title: 'Editor',
    Component: Editor,
  },
  timeline: {
    title: 'Timeline',
    Component: Timeline,
  },
  worldview: {
    title: 'WorldView',
    Component: WorldView,
  },
};

module.exports = ({ view }) => {
  const component = register[view];

  if (!component) {
    return null;
  }

  return (
    <Panel
      {...component}
    >
      <component.Component />
    </Panel>
  );
}
