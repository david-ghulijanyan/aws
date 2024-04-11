import { IEventRespone } from '../../_mixins';
import { EVENTS_TABLE_NAME } from '../../app/configs';
import { dynamoDb } from '../providers';

export const getEvent = async (eventId: string): Promise<IEventRespone> => {
	const params = {
		TableName: EVENTS_TABLE_NAME!,
		Key: {
			events: eventId,
		},
	};

	try {
		const data = await dynamoDb.get(params).promise();
		if (!data.Item) {
			return { statusCode: 404, body: JSON.stringify({ message: 'Event not found' }) };
		}
		return {
			statusCode: 200,
			body: JSON.stringify(data.Item),
		};
	} catch (error: any) {
		return { statusCode: 400, body: JSON.stringify(error.message) };
	}
};
