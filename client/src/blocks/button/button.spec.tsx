/* eslint-disable testing-library/no-node-access */
import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from './button';

describe('Button', () => {
	test('renders the Button component', () => {
		render(<Button variant="primary">Click Me</Button>);
		expect(screen.getByText('Click Me')).toBeInTheDocument();
	});

	test('handles onClick event', () => {
		const handleClick = jest.fn();
		render(<Button variant="primary" onClick={handleClick}>Click Me</Button>);
		fireEvent.click(screen.getByText('Click Me'));
		expect(handleClick).toHaveBeenCalledTimes(1);
	});

	test('shows loading state', () => {
		render(<Button variant="primary" loading>Click Me</Button>);
		expect(screen.getByText('Loading...')).toBeInTheDocument();
	});

	test('applies variant class', () => {
		const { container } = render(<Button variant="primary">Click Me</Button>);
		expect(container?.firstChild).toHaveClass('primary');
	});

	test('has correct type when passed', () => {
		const { container } = render(<Button variant="primary" type="submit">Submit</Button>);
		expect(container?.firstChild).toHaveAttribute('type', 'submit');
	});
});
