import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./pages/App.tsx";
import { Global, ThemeProvider } from "@emotion/react";
import { Provider } from "react-redux";
import { store } from "./redux/store.ts";
import { theme } from "./styles/theme.ts";
import { globalStyle } from "./styles/global.ts";

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
