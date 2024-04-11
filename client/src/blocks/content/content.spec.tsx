/* eslint-disable testing-library/no-node-access */
import { render, screen } from '@testing-library/react';
import { Content } from './content';

describe('Content', () => {
	test('renders the Content component with children', () => {
		render(
			<Content>
				<div>Test Content</div>
			</Content>
		);
		expect(screen.getByText('Test Content')).toBeInTheDocument();
	});

	test('has the correct class', () => {
		const { container } = render(
			<Content>
				<div>Test Content</div>
			</Content>
		);
		expect(container.firstChild).toHaveClass('content');
	});
});
