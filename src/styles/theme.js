import { createTheme } from "@mui/material/styles";

const createCustomTheme = (theme) => {
    const customTheme = createTheme({
        ...theme,
        palette: {
            primary: { 
                main: "#ed1c24",
            },
            secondary: {
                main: "#fff"
            }
        },
        typography: {
            ...theme.typography,
            fontFamily: "'Open Sans', sans-serif",
            h1: {
              ...theme.typography.h1,
              fontFamily: "'Open Sans', sans-serif",
            },
            h2: {
              ...theme.typography.h2,
              fontFamily: "'Open Sans', sans-serif",
              fontSize: "26px",
            },
            h3: {
              ...theme.typography.h3,
              fontFamily: "'Open Sans', sans-serif",
              fontSize: "22px",
              lineHeight: "44px"
            },
            h4: {
              ...theme.typography.h4,
              fontFamily: "'Open Sans', sans-serif",
            },
            h5: {
              ...theme.typography.h5,
              fontFamily: "'Open Sans', sans-serif",
            },
            h6: {
              ...theme.typography.h6,
              fontFamily: "'Open Sans', sans-serif",
            },
            subtitle1: {
              ...theme.typography.subtitle1,
              fontFamily: "'Open Sans', sans-serif",
            },
            subtitle2: {
              ...theme.typography.subtitle2,
              fontFamily: "'Open Sans', sans-serif",
            },
            body1: {
              ...theme.typography.body1,
              fontFamily: "'Open Sans', sans-serif",
            },
            body2: {
              ...theme.typography.body2,
              fontFamily: "'Open Sans', sans-serif",
            },
            button: {
              ...theme.typography.button,
              fontFamily: "'Open Sans', sans-serif",
            },
            caption: {
              ...theme.typography.caption,
              fontFamily: "'Open Sans', sans-serif",
            },
            overline: {
              ...theme.typography.overline,
              fontFamily: "'Open Sans', sans-serif",
            },
          },
    });

    return customTheme;
}

export default createCustomTheme;