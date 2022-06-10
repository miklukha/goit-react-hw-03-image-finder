import { css } from '@emotion/react';

export const GlobalStyles = css`
  html {
    box-sizing: border-box;
    scroll-behavior: smooth;
    width: 100vw;
    overflow-x: hidden;
  }

  *,
  *::after,
  *::before {
    box-sizing: inherit;
  }

  body {
    min-height: 100vh;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
      'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
      'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    color: #212121;
    background-color: #ffffff;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
  }

  button {
    padding: 0;
    border: none;
    font: inherit;
    color: inherit;
    background-color: transparent;
    cursor: pointer;
  }

  ul {
    margin-top: 0;
  }
`;
