import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --primary: #DD4455;
    --background: #F5F5F5;
  }

  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif !important;
  }
  
  *, button, input {
    outline: none;
    border: 0;
  }

  body {
    background-color: var(--background);
  }
`;
