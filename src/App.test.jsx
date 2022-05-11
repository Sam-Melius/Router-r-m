import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('<App />', () => {
    it('uses initial entries to pull up a details page of a character', async () => {
        render(
            <MemoryRouter initialEntries={['/characters/3']}>
                <App />
            </MemoryRouter>
        );

        const summerPic = await screen.findByAltText('Picture of Summer Smith');
        expect(summerPic).toBeInTheDocument();
        
    });

    it('renders list and navigates to detail page', async () => {
        render(
            <MemoryRouter>
                <App />
            </MemoryRouter>
        );
        screen.getByText(/loading/i);

        const character = await screen.findByText('Summer Smith');
        userEvent.click(character);

        const summerPic = await screen.findByAltText('Picture of Summer Smith');
        expect(summerPic).toBeInTheDocument();
        
    });

})
