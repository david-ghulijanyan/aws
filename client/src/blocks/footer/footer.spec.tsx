/* eslint-disable testing-library/no-node-access */
import { render, screen } from '@testing-library/react';
import { Footer } from './footer';

describe('Footer', () => {
	test('renders the Footer component with copyright text', () => {
		render(<Footer />);
		const currentYear = new Date().getFullYear();
		expect(screen.getByText(`© ${currentYear} Event management platform. All rights reserved.`)).toBeInTheDocument();
	});

	test('has the correct class', () => {
		const { container } = render(<Footer />);
		expect(container.firstChild).toHaveClass('footer');
	});
});
