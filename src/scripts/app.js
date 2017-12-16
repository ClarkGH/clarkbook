"use strict";

import React from "react";
import ReactDOM from "react-dom";
import styled, { css, injectGlobal } from "react-emotion";
import styles from "./styles/main";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

ReactDOM.render(
  <Container>
    <Header />
    <div>Body stuff here (will need if-else logic)</div>
    <Footer />
  </Container>,
  document.getElementById("root")
);
