import reset from "styled-reset";
import { createGlobalStyle } from "./typed-components";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Do+Hyeon|Noto+Sans+KR:300,400,700');
  ${reset}
  * {
      box-sizing: border-box;
  }
  body {
    font-family: 'Noto Sans KR', sans-serif;
    ;
    margin: 0px;
  }
  a {
      color: inherit;
      text-decoration: none;
  }
  input,
  button {
      &:focus,
      &:active {outline:none}
  }
  button {
      cursor: pointer;
  }
  h1,h2,h3,h4,h5,h6{
      font-family:'Do Hyeon', sans-serif;
  }
  .Toastify__toast-body {
     font-family: 'Noto Sans KR', sans-serif;
     font-size: 14px; 
     text-align: center
  }
`;

export default GlobalStyle;
