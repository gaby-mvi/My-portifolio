import { createTheme, responsiveFontSizes } from "@mui/material";

let theme = createTheme({
    palette: {
        primary: {
            main: "#73788f",
        },
        secondary: {
            main: "#49d6d0",
        },
    },
    typography: {
        fontFamily: [
            //"Helvetica Neue",
             "Segoe UI",
            // "Roboto',
            // "Arial",
            // "sans-serif",
            // "Segoe UI Emoji",
            // "Segoe UI Symbol",
        ].join(','),
    }
});

theme = responsiveFontSizes(theme);

export default theme;