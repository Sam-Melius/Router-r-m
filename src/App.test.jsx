import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('<App />', () => {
    it('renders list and navigates to detail page', async () => {
        render(
            <MemoryRouter>
                <App />
            </MemoryRouter>
        );
        screen.getByText(/loading/i);

        const character = await screen.findByText('Summer Smith');
        userEvent.click(character);

        await screen.findByAltText('Picture of Summer Smith');
    })
})
