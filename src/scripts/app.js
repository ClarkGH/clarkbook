'use strict'

import React from 'react';
import ReactDOM from 'react-dom';
import styled, { css, injectGlobal } from 'react-emotion';

const Container = styled('div')`
  background: #333;
`

const mainStyles = css`
  color: blue;
`

ReactDOM.render(
  <Container>
    <div className={mainStyles}>Hello World!</div>
  </Container>,
  document.getElementById('root')
);
