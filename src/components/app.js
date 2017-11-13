import React from 'react';
import Panel from '../panels';
import App from '../blocks/app';

import styled from 'styled-components';

const Splitter = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

module.exports = () => (
  <App>
    <Panel view="files" />
    <Splitter>
      <Panel view="worldview" />
      <Panel view="timeline" />
    </Splitter>
    <Splitter>
      <Panel view="editor" />
    </Splitter>
  </App>
);
