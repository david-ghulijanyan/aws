/* eslint-disable testing-library/no-node-access */
import { render, screen, fireEvent } from '@testing-library/react';
import { Input } from './input';

describe('Input', () => {
	test('renders the Input component', () => {
		render(<Input value='' onChange={() => { }} variant="primary" placeholder="Enter text" />);
		expect(screen.getByPlaceholderText('Enter text')).toBeInTheDocument();
	});

	test('updates on change', () => {
		const handleChange = jest.fn();
		render(<Input variant="primary" value="" onChange={handleChange} />);
		const input = screen.getByRole('textbox');
		fireEvent.change(input, { target: { value: 'new text' } });
		expect(handleChange).toHaveBeenCalledWith('new text');
	});

	test('has correct type and variant class', () => {
		const { container } = render(<Input value='' onChange={() => { }} variant="primary" type="password" />);
		const input = container.firstChild;
		expect(input).toHaveClass('input primary');
		expect(input).toHaveAttribute('type', 'password');
	});
});
