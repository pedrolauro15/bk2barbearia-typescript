import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --primary: #DD4455;
    --background: #F0F0F0;
    --title: #000000AA;
    --subtitle: #0000008A;
  }

  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Muli', sans-serif !important;
    text-decoration: none;
  }
  
  *, button, input {
    outline: none;
    border: 0;
  }

  body {
    background-color: var(--background);
  }
`;
