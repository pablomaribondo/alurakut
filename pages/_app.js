import { createGlobalStyle, ThemeProvider } from "styled-components";
import { AlurakutStyles } from "../src/lib/AlurakutCommons";

const theme = {
  colors: {
    backgroundDefault: "#d9e6f6",
    backgroundSecondary: "#f1f9fe",
    primaryText: "#2e7bb4",
    secondaryText: "#388bb0",
    tertiaryText: "#2f4a71",
    primaryElement: "#6f92bb",
    anotherElement: "#5579a1",
    divider: "#ecf2fa",
    gray1: "#333",
    gray2: "#5a5a5a",
    gray3: "#999",
    gray4: "#c5c6ca",
    gray5: "#f4f4f4",
    white: "#fff",
  },
};

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
    background-color: ${theme.colors.backgroundDefault}
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

  ${AlurakutStyles}
`;

const App = ({ Component, pageProps }) => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};

export default App;
