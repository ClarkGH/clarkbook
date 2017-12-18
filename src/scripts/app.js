"use strict";

import React from "react";
import ReactDOM from "react-dom";
import styled, { css, injectGlobal } from "react-emotion";
import { Container } from "./styles/main";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

ReactDOM.render(
  <div>
    <Header />
    <div>Body stuff here (will need if-else logic)</div>
    <Footer />
  </div>,
  document.getElementById("root")
);
