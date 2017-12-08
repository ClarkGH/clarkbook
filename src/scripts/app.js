'use strict'

import React from 'react';
import ReactDOM from 'react-dom';
import styled, { css, injectGlobal/*, fontFace*/ } from 'react-emotion';

// Global Styles
injectGlobal`
html,body{
  margin: 0;
  padding: 0;
  width: 100%;
}
`;

// Specific styles
const Container = styled('div')`
  background: #333;
`

const mainStyles = css`
  color: blue;
`


ReactDOM.render(
  <Container>
    <div className={mainStyles}>Hello World!</div>
    <p>Will it blend?</p>
  </Container>,
  document.getElementById('root')
);
