import { css } from "@emotion/react";
import type { AppTheme } from "./theme";

export const globalStyle = (theme: AppTheme) => css`
    // Border-box sizing prevents padding/border from expanding an element's total size
    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }
    html,
    body {
        margin: 0;
        font-family: system-ui, sans-serif;
        background-color: ${theme.colors.background};
        color: ${theme.colors.onBackground};
    }
`;
