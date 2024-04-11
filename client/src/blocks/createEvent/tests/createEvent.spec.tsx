/* eslint-disable testing-library/no-node-access */
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import { BrowserRouter as Router } from 'react-router-dom';
import { CreateEvent } from '../createEvent';
import { mocks } from './doubles';
import { dataTestIdCreateEventButtonSubmit, dataTestIdCreateEventInputDate, dataTestIdCreateEventInputDescription, dataTestIdCreateEventInputName, dataTestIdCreateEventRoot } from './ids';

const mockNavigate = jest.fn();
// Mock the useNavigate hook
jest.mock('react-router-dom', () => ({
	...jest.requireActual('react-router-dom'),
	useNavigate: () => mockNavigate,
}));

describe('CreateEvent', () => {
	test('renders inputs correctly', () => {
		render(
			<MockedProvider mocks={[]} addTypename={false}>
				<CreateEvent />
			</MockedProvider>
		);
		expect(screen.getByTestId(dataTestIdCreateEventRoot)).toBeInTheDocument();
		expect(screen.getByTestId(dataTestIdCreateEventInputName)).toBeInTheDocument();
		expect(screen.getByTestId(dataTestIdCreateEventInputDescription)).toBeInTheDocument();
		expect(screen.getByTestId(dataTestIdCreateEventInputDate)).toBeInTheDocument();
		expect(screen.getByTestId(dataTestIdCreateEventButtonSubmit)).toBeInTheDocument();
	});

	test('allows submission when form is filled out', async () => {
		render(
			<MockedProvider mocks={[mocks]} addTypename={false}>
				<Router>
					<CreateEvent />
				</Router>
			</MockedProvider>
		);

		const inputName = screen.getByTestId(dataTestIdCreateEventInputName);
		const inputDescription = screen.getByTestId(dataTestIdCreateEventInputDescription);
		const inputDate = screen.getByTestId(dataTestIdCreateEventInputDate);
		const btnSubmit = screen.getByTestId(dataTestIdCreateEventButtonSubmit);

		fireEvent.change(inputName, {
			target: { value: 'Test Event' },
		});
		fireEvent.change(inputDescription, {
			target: { value: 'This is a test event' },
		});
		fireEvent.change(inputDate, {
			target: { value: '2024-04-11' },
		});
		fireEvent.click(btnSubmit);

		await waitFor(() => {
			expect(mockNavigate).toHaveBeenCalledWith("/");
		});
	});

	test('input event name updates on change', () => {
		render(
			<MockedProvider>
				<CreateEvent />
			</MockedProvider>
		);
		const input = screen.getByTestId(dataTestIdCreateEventInputName);

		fireEvent.change(input, { target: { value: 'New Event' } });

		expect((input as HTMLInputElement).value).toBe('New Event');
	});

	test('input description updates on change', () => {
		render(
			<MockedProvider>
				<CreateEvent />
			</MockedProvider>
		);
		const input = screen.getByTestId(dataTestIdCreateEventInputDescription);

		fireEvent.change(input, { target: { value: 'New Description' } });

		expect((input as HTMLInputElement).value).toBe('New Description');
	});

	test('input date updates on change', () => {
		render(
			<MockedProvider>
				<CreateEvent />
			</MockedProvider>
		);
		const input = screen.getByTestId(dataTestIdCreateEventInputDate);

		fireEvent.change(input, { target: { value: '2024-12-25' } });

		expect((input as HTMLInputElement).value).toBe('2024-12-25');
	});

	// @TODO: fix this test
	// test('form calls createEvent mutation with correct variables on submit', async () => {
	// 	const mockMutation = jest.fn().mockResolvedValue({
	// 		data: { createEvent: { id: '1', eventName: 'New Event', description: 'New Description', date: '2024-12-25' } },
	// 	});

	// 	render(
	// 		<MockedProvider mocks={[
	// 			{
	// 				request: {
	// 					query: CREATE_EVENT_MUTATION,
	// 					variables: {
	// 						eventName: 'New Event',
	// 						description: 'New Description',
	// 						date: '2024-12-25',
	// 					},
	// 				},
	// 				result: () => {
	// 					mockMutation();
	// 					return {
	// 						data: { createEvent: { id: '1', eventName: 'New Event', description: 'New Description', date: '2024-12-25' } },
	// 					};
	// 				},
	// 			},
	// 		]}>
	// 			<CreateEvent />
	// 		</MockedProvider>
	// 	);

	// 	fireEvent.change(screen.getByTestId(dataTestIdCreateEventInputName), { target: { value: 'New Event' } });
	// 	fireEvent.change(screen.getByTestId(dataTestIdCreateEventInputDescription), { target: { value: 'New Description' } });
	// 	fireEvent.change(screen.getByTestId(dataTestIdCreateEventInputDate), { target: { value: '2024-12-25' } });
	// 	fireEvent.click(screen.getByTestId(dataTestIdCreateEventButtonSubmit));

	// 	await waitFor(() => {
	// 		expect(mockMutation).toHaveBeenCalledTimes(1);
	// 	});
	// 	await waitFor(() => {
	// 		expect(mockMutation).toHaveBeenCalledWith({
	// 			variables: {
	// 				eventName: 'New Event',
	// 				description: 'New Description',
	// 				date: '2024-12-25',
	// 			},
	// 		});
	// 	});
	// });



});
