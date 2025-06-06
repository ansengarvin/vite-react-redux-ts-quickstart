import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./pages/App.tsx";
import { Global, ThemeProvider, css } from "@emotion/react";
import { Provider } from "react-redux";
import { store } from "./redux/store.ts";
import { theme } from "./styles/theme.ts";

const globalStyle = css`
    // Border-box sizing prevents padding/border from expanding an element's total size
    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }
    html,
    body {
        margin: 0;
        font-family: "Roboto", sans-serif;
        background-color: #ffffff;
    }
`;

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <ThemeProvider theme={theme}>
            <Global styles={globalStyle} />
            <Provider store={store}>
                <App />
            </Provider>
        </ThemeProvider>
    </StrictMode>,
);
