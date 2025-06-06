// Themes follow Material Design's general layout
export const theme = {
    colors: {
        primary: "#61dafb", // React blue
        primaryHover: "#21a1f1", // Darker blue for hover
        secondary: "#FF7A85", // Coral
        secondaryHover: "#FF5A6C", // Lighter coral for hover
        background: "#ffffff", // White
        surface: "#282c34", // Dark grey
        error: "#b00020", // Red
        onPrimary: "#000000", // Black text on primary
        onSecondary: "#000000", // Black text on secondary
        onBackground: "#000000", // Black text on background
        onSurface: "#ffffff", // White text on surface
    },
};

export type AppTheme = typeof theme;
