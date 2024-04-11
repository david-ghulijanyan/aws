import { APIGatewayProxyEvent } from 'aws-lambda';
import { dynamoDb } from '../providers';
import { IEventRespone } from '../../_mixins';
import { EVENTS_TABLE_NAME } from '../../app/configs';

export const createEvent = async (event: APIGatewayProxyEvent): Promise<IEventRespone> => {
	if (!event.body) {
		return { statusCode: 400, body: 'Request body is missing' };
	}

	const { userId, eventName, description, date } = JSON.parse(event.body);

	const params = {
		TableName: EVENTS_TABLE_NAME!,
		Item: {
			events: Date.now().toString(),
			userId,
			eventId: Date.now().toString(),
			eventName,
			description,
			date,
		},
	};

	try {
		const res = await dynamoDb.put(params).promise();
		return { statusCode: 200, body: JSON.stringify(params.Item) };
	} catch (error: any) {
		return { statusCode: 400, body: JSON.stringify(error.message) };
	}
};
