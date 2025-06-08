import "@emotion/react";
import { AppTheme } from "./styles/theme";

// https://emotion.sh/docs/typescript#define-a-theme
declare module "@emotion/react" {
    export interface Theme extends AppTheme {}
}
