import React from 'react';
import File from './file';
import Toolbar from '../../blocks/toolbar';

const Component = ({ files }) => (
  <div>
    <Toolbar>test</Toolbar>
    {files.map(file => <File key={file.id} {...file} />)}
  </div>
);

export default Component;
