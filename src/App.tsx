import { ThemeProvider } from "styled-components";
import { RouterProvider } from "react-router-dom";

import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";
import { router } from "./router";
import { CyclesContextProvider } from "./contexts/CyclesContext";

export const App = () => {
    return (
        <ThemeProvider theme={defaultTheme}>
            <GlobalStyle />
            <CyclesContextProvider>
                <RouterProvider router={router} />
            </CyclesContextProvider>
        </ThemeProvider>
    );
};
