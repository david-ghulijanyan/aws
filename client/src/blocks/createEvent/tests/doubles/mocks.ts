import { request } from "http";
import { CREATE_EVENT_MUTATION } from "../../_modifications";

export const mockRequest = {
	query: CREATE_EVENT_MUTATION,
	variables: {
		eventName: 'Test Event',
		description: 'This is a test event',
		date: '2024-04-11',
	},
};

export const mockResult = {
	data: {
		createEvent: {
			eventId: '1',
			eventName: 'Test Event',
			description: 'This is a test event',
			date: '2024-04-11',
		},
	},
};

export const mocks = {
	result: mockResult,
	request: mockRequest,
};