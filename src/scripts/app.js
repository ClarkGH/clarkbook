'use strict'

import React from 'react';
import ReactDOM from 'react-dom';
import styled, { css, injectGlobal } from 'react-emotion';

const app = document.getElementById('root');
const mainStyles = css`
  color: blue;
`

app.classList.add(mainStyles);

ReactDOM.render(
  <div>Hi</div>,
  document.getElementById('root')
);
