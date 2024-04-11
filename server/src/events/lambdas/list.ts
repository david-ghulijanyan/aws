import { IEventRespone } from '../../_mixins';
import { EVENTS_TABLE_NAME } from '../../app/configs';
import { dynamoDb } from '../providers';

export const getEvents = async (
	limit: number = 20,
	lastEvaluatedKey?: string,
	filter?: { name?: string; date?: string; }
): Promise<IEventRespone> => {
	const params: any = {
		TableName: EVENTS_TABLE_NAME!,
		Limit: limit,
		...(lastEvaluatedKey && { ExclusiveStartKey: { eventId: lastEvaluatedKey } })
	};

	if (filter) {
		params.FilterExpression = '';
		params.ExpressionAttributeValues = {};

		if (filter.name) {
			params.FilterExpression += 'contains(eventName, :name)';
			params.ExpressionAttributeValues[':name'] = filter.name;
		}

		if (filter.date) {
			if (params.FilterExpression) params.FilterExpression += ' AND ';
			params.FilterExpression += 'date = :date';
			params.ExpressionAttributeValues[':date'] = filter.date;
		}
	}

	try {
		const data = await dynamoDb.scan(params).promise();
		return {
			statusCode: 200,
			body: JSON.stringify({
				items: data.Items || [],
				lastEvaluatedKey: data.LastEvaluatedKey ? data.LastEvaluatedKey.eventId : null
			})
		};
	} catch (error: any) {
		return { statusCode: 400, body: JSON.stringify(error.message) };
	}
};
