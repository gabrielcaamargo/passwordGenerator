import styled from 'styled-components';

export const Container = styled.main`
  max-width: 800px;
  width: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 48px;

  h1 {
    font-family: 'Josefin Sans', sans-serif;
    margin-bottom: 32px;
  }

  .password-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;

    button {
      width: 75%;
      padding: 8px 16px;
      border: none;
      font-weight: bold;
      color: #FFF;
      font-size: 16px;
      border-radius: 4px;
    }

    .password-result {
      margin-top: 24px;
      background-color: ${({theme}) => theme.darker};
      width: 75%;
      border-radius: 4px;
      padding: 8px 16px;
    }

    @media screen and (max-width: 510px) {
      button {
        width: 100%;
      }

      .password-result {
        width: 100%;
        word-break: break-all;
      }
    }
  }

  @media screen and (max-width: 510px) {
    max-width: 90vw;
    width: 100%;
  }
`;
