'use strict'

import React from 'react';
import ReactDOM from 'react-dom';
import styled, { css, injectGlobal } from 'react-emotion';


const Container = styled('div')`
  background: #333;
`
// const myStyle = css`
//   color: rebeccapurple;
// `

ReactDOM.render(
  <Container>Hi</Container>,
  document.getElementById('root')
);
