import styled, { css, injectGlobal } from "react-emotion";

// Global Styles
injectGlobal`
html,body{
  margin: 0;
  padding: 0;
  width: 100%;
}
`;

// Specific Container styles
const Container = styled("div")``; //styles in the backticks
// Component className styles
const mainStyles = css``; //styles in the backticks