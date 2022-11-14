// Arquivo de configuração que roda antes de toda aplicação!!
import React from "react";
import { ThemeProvider } from "styled-components";
import { CSSGlobal } from "../src/components/CSSGlobal";
import ColorModeProvider, {
  ColorModeContext,
} from "../src/components/ColorMode";

// _app.js -> Definições globais do NextJs
// ThemeProvider -> Prover o tema para a app todo
// ColorModeProvider -> Prover o state de light ou dark mode para todo mundo

const theme = {
  light: {
    backgroundBase: "#f9f9f9",
    backgroundLevel1: "#ffffff",
    borderBase: "#1E1E1E",
    textColorBase: "#1E1E1E",
    filterLogo: "none",
  },
  dark: {
    backgroundBase: "#292929",
    backgroundLevel1: "#1E1E1E",
    borderBase: "#e5e5e5",
    textColorBase: "#FFFFFF",
    filterLogo: "invert()",
  },
};

function ProviderWrapper(props) {
  return (
    <ColorModeProvider initialMode={"light"}>
      {props.children}
    </ColorModeProvider>
  );
}

function MyApp({ Component, pageProps }) {
  const contexto = React.useContext(ColorModeContext);
  return (
    <ThemeProvider theme={theme[contexto.mode]}>
      <CSSGlobal />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default function _App(props) {
  return (
    <ProviderWrapper>
      <MyApp {...props} />
    </ProviderWrapper>
  );
}
