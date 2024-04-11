/* eslint-disable testing-library/no-node-access */
import { render, screen, fireEvent } from '@testing-library/react';
import { Form } from './form';

describe('Form', () => {
	test('renders the Form component', () => {
		render(
			<Form onSubmit={() => { }}>
				<input type="text" />
			</Form>
		);
		expect(screen.getByRole('textbox')).toBeInTheDocument();
	});

	test('submits form on submit event', () => {
		const handleSubmit = jest.fn();
		render(
			<Form onSubmit={handleSubmit}>
				<button type="submit">Submit</button>
			</Form>
		);
		fireEvent.click(screen.getByText('Submit'));
		expect(handleSubmit).toHaveBeenCalledTimes(1);
	});

	test('has the correct class', () => {
		const { container } = render(
			<Form onSubmit={() => { }}>
				<div>Test Form</div>
			</Form>
		);
		expect(container.firstChild).toHaveClass('form');
	});
});
