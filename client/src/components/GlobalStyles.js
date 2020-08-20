import { createGlobalStyle } from "styled-components";

import { COLORS } from "./constants";

const GlobalStyles = createGlobalStyle`
  html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
  font-family: 'Montserrat', sans-serif;
  vertical-align: baseline;

  }

  ol, ul {
	list-style: none;
}
  a {
    color: ${COLORS.font};
    text-decoration: none;
  }
  
  a:active, a:visited {
    color: ${COLORS.font};
  }

  button{
    cursor: pointer;
  }
  
  main {
    min-height: 105vh;
  }

  *,
  *:before,
  *:after {
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
    -webkit-font-smoothing: antialiased;
    
  }
  body {
  background: ghostwhite;}
`;

export default GlobalStyles;
