import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Work Sans', sans-serif;
  }

  body {
    background-color: ${({theme}) => theme.background};
    color: #FFF;
  }

  button {
    cursor: pointer;
    background-color: ${({theme}) => theme.main};
    transition: all 0.2s ease-in;

    &:hover {
      background-color: ${({theme}) => theme.dark};
    }

    &:active {
      background-color: ${({theme}) => theme.light};
    }
  }
`;
