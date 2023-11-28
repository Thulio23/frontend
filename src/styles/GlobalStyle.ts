import { createGlobalStyle } from "styled-components";

import 'react-toastify/dist/ReactToastify.css';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    border: 0;
    box-sizing: border-box;
  }
  
`
export const colors = {
  primary: "#C12626",
  secondary: "#2B2424",
  black: "#000",
  white: "#fff"
}
