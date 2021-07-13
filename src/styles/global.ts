import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: sans-serif;
    background-color: ${({ theme }) => theme.colors.backgroundDefault}
  }

  #__next {
    display: flex;
    min-height: 100vh;
    flex-direction: column;
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  /* AlurakutStyles */
  *::-webkit-scrollbar {
    width: 8px;
  }

  *::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  *::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 10px;
  }

  *::-webkit-scrollbar-thumb:hover {
    background: #555;
  }

  a,
  button {
    cursor: pointer;
    transition: 0.3s;
    outline: 0;

    &:hover,
    &:focus {
      opacity: 0.8;
    }

    &:disabled {
      cursor: not-allowed;
      opacity: 0.5;
    }
  }

  input {
    transition: 0.3s;
    outline: 0;

    &:disabled {
      cursor: not-allowed;
      opacity: 0.5;
    }

    &:hover,
    &:focus {
      box-shadow: 0px 0px 5px #33333357;
    }
  }

  /* LoginScreen */
  .loginScreen {
    padding: 16px;
    max-width: 1110px;
    display: grid;
    --gap: 12px;
    --gutter: 16px;
    grid-gap: var(--gap);
    grid-template-areas:
      'logoArea'
      'formArea'
      'footerArea';
    @media (min-width: 860px) {
      grid-template-columns: 2fr 1fr;
      grid-template-areas:
        'logoArea formArea'
        'logoArea formArea'
        'footerArea footerArea';
    }

    .logoArea {
      grid-area: logoArea;
      background-color: ${({ theme }) => theme.colors.backgroundTertiary};
      border-radius: ${({ theme }) => theme.commonRadius};
      padding: var(--gutter);
      text-align: center;
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      min-height: 263px;

      @media (min-width: 860px) {
        min-height: 368px;
      }

      p {
        font-size: 12px;
        line-height: 1.2;

        &:not(:last-child) {
          margin-bottom: 12px;
        }

        strong {
          color: ${({ theme }) => theme.colors.colorQuarternary};
        }
      }

      img {
        max-height: 45px;
        margin-bottom: 36px;
      }
    }

    .formArea {
      grid-area: formArea;
      display: flex;
      flex-wrap: wrap;
      flex-direction: column;

      .box {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        padding: var(--gutter);
        padding-left: 50px;
        padding-right: 50px;
        background-color: ${({ theme }) => theme.colors.backgroundSecondary};
        border-radius: ${({ theme }) => theme.commonRadius};
        flex: 1;

        &:not(:last-child) {
          margin-bottom: var(--gap);
        }

        &:first-child {
          min-height: 224px;

          @media (min-width: 860px) {
            min-height: 282px;
          }
        }

        p {
          font-size: 14px;
        }

        a {
          text-decoration: none;
          color: ${({ theme }) => theme.colors.colorPrimary};
        }

        input {
          width: 100%;
          display: block;
          border: ${({ theme }) =>
            `1px solid ${theme.colors.textQuaternaryColor}`};
          padding: 12px;
          background-color: ${({ theme }) => theme.colors.backgroundTertiary};
          border-radius: ${({ theme }) => theme.commonRadius};
          margin-top: 24px;
          margin-bottom: 16px;
        }

        button {
          width: 100%;
          display: block;
          border: 0;
          padding: 12px;
          border-radius: ${({ theme }) => theme.commonRadius};
          background-color: ${({ theme }) => theme.colors.colorPrimary};
          color: ${({ theme }) => theme.colors.textSecondaryColor};
        }
      }
    }

    .footerArea {
      grid-area: footerArea;
      background-color: ${({ theme }) => theme.colors.backgroundQuaternary};
      border-radius: ${({ theme }) => theme.commonRadius};
      padding: 8px;

      p {
        font-size: 12px;
        text-align: center;

        a {
          text-decoration: none;
          color: ${({ theme }) => theme.colors.colorPrimary};
        }
      }
    }
  }
`;

export default GlobalStyle;
