import { ReactNode } from "react";
import { render } from "@testing-library/react"
import { ThemeProvider } from 'styled-components';

import { theme } from '../../styles/theme';
import GlobalStyles from '../../styles/globals';
import MenuProvider from "../../contexts/MenuContext";
import App from "../../App";

export const renderApp = (component: ReactNode = <App />) => {
    return render(
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <MenuProvider>
                { component }
            </MenuProvider>

        </ThemeProvider>
    )
}