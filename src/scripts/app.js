'use strict'

import React from 'react';
import ReactDOM from 'react-dom';
import styled, { css, injectGlobal/*, fontFace*/ } from 'react-emotion';
import { Header } from './components/Header';
import { Footer } from './components/Footer'


// Global Styles
injectGlobal`
html,body{
  margin: 0;
  padding: 0;
  width: 100%;
}
`;

// Specific Container styles
const Container = styled('div')`
`
// Component className styles
const mainStyles = css`

`


ReactDOM.render(
  <Container>
    <Header />
    <div>Body stuff here (will need if-else logic)</div>
    <Footer />
  </Container>,
  document.getElementById('root')
);
