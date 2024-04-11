import { IResolvers } from '@graphql-tools/utils';
import { APIGatewayProxyEvent } from 'aws-lambda';

import { deleteEvent } from "./lambdas/delete";
import { getEvents } from "./lambdas/list";
import { updateEvent } from "./lambdas/update";
import { createEvent } from "./lambdas/create";
import { getEvent } from './lambdas/read';
import { IEventArgs } from './interfaces';

const eventsResolvers: IResolvers = {
	Query: {
		getEvents: async (_, { limit, lastEvaluatedKey, filter }: { limit?: number; lastEvaluatedKey?: string; filter?: { name?: string; date?: string; }; }) => {
			const { body } = await getEvents(limit, lastEvaluatedKey, filter);
			return JSON.parse(body);
		},
		getEvent: async (_, { eventId }: { eventId: string; }) => {
			const { body, statusCode } = await getEvent(eventId);
			if (statusCode !== 200) {
				throw new Error(body);
			}
			return JSON.parse(body);
		},
	},
	Mutation: {
		createEvent: async (_, args: IEventArgs) => {
			const event: APIGatewayProxyEvent = { body: JSON.stringify(args) } as APIGatewayProxyEvent;
			const { body, statusCode } = await createEvent(event);
			if (statusCode !== 200) {
				throw new Error(body);
			}
			return JSON.parse(body);
		},
		updateEvent: async (_, args: IEventArgs) => {
			const event: APIGatewayProxyEvent = { body: JSON.stringify(args) } as APIGatewayProxyEvent;
			const { body, statusCode } = await updateEvent(event);
			if (statusCode !== 200) {
				throw new Error(body);
			}
			return JSON.parse(body);
		},
		deleteEvent: async (_, args: IEventArgs) => {
			const event: APIGatewayProxyEvent = { body: JSON.stringify(args) } as APIGatewayProxyEvent;
			const { body, statusCode } = await deleteEvent(event);
			if (statusCode !== 200) {
				throw new Error(body);
			}
			return JSON.parse(body);
		},
	},
};

export { eventsResolvers };
