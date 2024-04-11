import { render, screen } from '@testing-library/react';
import { Header } from './header';

describe('Header', () => {
	test('renders the Header component', () => {
		render(<Header />);
		expect(screen.getByText('Event management')).toBeInTheDocument();
	});
});