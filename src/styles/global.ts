import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: transparent;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }

    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body {
    background: ${({ theme }) => theme.colors.background} !important;

    color: #333333;
    -webkit-font-smoothing: antialiased;
  }

  html,
  body,
  #root {
    width: 100%;
    height: 100%;

    font-size: 1rem;

    display: flex;
    align-items: center;
    justify-content: center;

    overflow: hidden;
  }

  body,
  input,
  textarea,
  button {
    font-family: Nunito, sans-serif;
    font-weight: 500;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  strong {
    font-weight: 500;
  }

  li {
    list-style: none;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
