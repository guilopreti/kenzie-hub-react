import { ToastContainer } from "react-toastify";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`


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
	font-size: 100%;
	
	vertical-align: baseline;
}

article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
	background-color: #121214;
	font-family: 'Inter', sans-serif;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
button{
    cursor: pointer;
}

a{
    text-decoration: none;
}

#root{
	height: 100%;
}

:root{
	
	--toastify-color-success: #3FE864;
  --toastify-color-error:#E83F5B;
  
 
  
}
`;

export default GlobalStyle;

export const StyledToastContainer = styled(ToastContainer)`
  .Toastify__toast-theme--light {
    background-color: #343b41;
    color: #f8f9fa;
  }

  .Toastify__close-button svg {
    color: #f8f9fa;
  }
`;
