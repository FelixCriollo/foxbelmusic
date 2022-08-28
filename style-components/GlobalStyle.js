import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  html,
  body {
    font-family: 'Quicksand', sans-serif;
    height: 100%;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
`
