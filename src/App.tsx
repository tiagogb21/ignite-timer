import { ThemeProvider } from "styled-components";
import { RouterProvider } from "react-router-dom";

import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";
import { router } from "./router";

export const App = () => {
    return (
        <ThemeProvider theme={defaultTheme}>
            <GlobalStyle />
            <RouterProvider router={router} />
        </ThemeProvider>
    );
};
