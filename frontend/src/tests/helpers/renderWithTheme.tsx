import { ReactNode } from "react";
import { render } from "@testing-library/react"
import { ThemeProvider } from 'styled-components';

import { theme } from '../../styles/theme';
import GlobalStyles from '../../styles/globals';

export const renderWithTheme = (component: ReactNode = null) => {
    return render(
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            { component }
        </ThemeProvider>
    )
}