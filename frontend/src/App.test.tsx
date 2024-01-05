import { screen, waitFor, waitForElementToBeRemoved } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import App from './App';
import { renderWithTheme } from './tests/helpers/renderWithTheme';
import { renderApp } from './tests/helpers/renderApp';

describe('Test App', () => {
    test('renders Header', () => {
        renderWithTheme(<App />);
        const header = screen.getByTestId('header');
        expect(header).toBeInTheDocument();
    });

    test('renders Player', () => {
        renderWithTheme(<App />);
        const player = screen.getByTestId('player');
        expect(player).toBeInTheDocument();
    });

    test('open Menu', async () => {
        renderApp();
        const menuBtn = screen.getByTestId('menu-button');
        userEvent.click(menuBtn);
        const menu = await screen.findByTestId('menu');
        expect(menu).toBeInTheDocument();
        userEvent.click(menuBtn);
        await waitForElementToBeRemoved(() => screen.queryByTestId('menu'));
    });
});     
