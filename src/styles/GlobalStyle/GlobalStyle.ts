import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *, ::before, ::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: ${(props) => props.theme.fonts.primary};
    font-size: ${(props) => props.theme.texts.main.size};
    color: ${(props) => props.theme.texts.main.color};
  }

  ul, li {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  
  button, input {
    font: inherit;
    background-color: transparent;
    border: none;
  }

  button {
    cursor: pointer;
  }

  h1, h2, h3, h4, h5, h6 {
    margin-top: 0;
  }

  a {
    color: ${(props) => props.theme.colors.primary};
    text-decoration: none;
  }
  `;

export default GlobalStyle;
