import { APIGatewayProxyEvent } from 'aws-lambda';
import { dynamoDb } from '../providers';
import { IEventRespone } from '../../_mixins';
import { EVENTS_TABLE_NAME } from '../../app/configs';

export const deleteEvent = async (event: APIGatewayProxyEvent): Promise<IEventRespone> => {
	if (!event.body) {
		return { statusCode: 400, body: 'Request body is missing' };
	}

	const { eventId, userId } = JSON.parse(event.body);

	const params = {
		TableName: EVENTS_TABLE_NAME!,
		Key: {
			events: eventId,
		},
	};

	try {
		await dynamoDb.delete(params).promise();
		return { statusCode: 200, body: JSON.stringify("") };
	} catch (error: any) {
		return { statusCode: 400, body: JSON.stringify(error.message) };
	}
};
