import { css } from "@emotion/react";

export const globalStyle = (theme: any) => css`
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
        background-color: ${theme.colors.background};
        color: ${theme.colors.onBackground};
    }
`;
