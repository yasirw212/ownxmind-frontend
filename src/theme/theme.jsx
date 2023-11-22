import React from "react";
import { createTheme } from "@mui/material";

export const themeSettings = () => {

    return {
        palette: {
            primary: {
                main: "#131313",
            },
            secondary: {
                main: "#fff",
            },
            neutral: {
                dark: "#d7d7d7"
            },
            background: {
                default: "#fff",
            }
        },
        components: {
            MuiButton: {
              styleOverrides: {
                root: ({ ownerState }) => ({
                  ...(ownerState.variant === 'contained' &&
                    ownerState.color === 'primary' && {
                      backgroundColor: '#202020',
                      color: '#fff',
                    }),
                }),
              },
            },
          },
    }
}

export const themeContext = React.createContext()


export const ThemeContextProvider = (props) => {

    const theme = React.useMemo(() => createTheme(themeSettings()), [])

    return (
        <themeContext.Provider value={{theme: theme}} >
            {props.children}
        </themeContext.Provider>
    )
}