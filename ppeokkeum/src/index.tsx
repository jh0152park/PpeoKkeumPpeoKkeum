import ReactDOM from "react-dom/client";
import App from "./App";
import { reset } from "styled-reset";
import { createGlobalStyle } from "styled-components";
import { RecoilRoot } from "recoil";
import { ChakraProvider, ColorModeScript, theme } from "@chakra-ui/react";

declare global {
    interface Window {
        IMP: any;
        kakaoMap: any;
    }
}

const GlobalStyle = createGlobalStyle`
  ${reset}
  body {
    background-color: #101012;
    color: whitesmoke;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  * {
    box-sizing: border-box;
  }
  a {
    text-decoration: none;
  }
`;

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
    <>
        <RecoilRoot>
            <GlobalStyle />
            <ChakraProvider theme={theme}>
                <ColorModeScript
                    initialColorMode={theme.config.initialColorMode}
                />
                <App />
            </ChakraProvider>
        </RecoilRoot>
    </>
);
