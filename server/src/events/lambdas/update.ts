import { APIGatewayProxyEvent } from 'aws-lambda';
import { dynamoDb } from '../providers';
import { IEventRespone } from '../../_mixins';
import { EVENTS_TABLE_NAME } from '../../app/configs';

export const updateEvent = async (event: APIGatewayProxyEvent): Promise<IEventRespone> => {
	if (!event.body) {
		return { statusCode: 400, body: 'Request body is missing' };
	}

	const { eventId, userId, eventName, description, date } = JSON.parse(event.body);

	const params = {
		TableName: EVENTS_TABLE_NAME!,
		Key: {
			events: eventId,
		},
		UpdateExpression: "set #eventName = :eventName, #description = :description, #date = :date",
		ExpressionAttributeNames: {
			"#eventName": "eventName",
			"#description": "description",
			"#date": "date"
		},
		ExpressionAttributeValues: {
			":eventName": eventName,
			":description": description,
			":date": date
		},
		ReturnValues: "ALL_NEW"
	};

	try {
		const data = await dynamoDb.update(params).promise();
		return { statusCode: 200, body: JSON.stringify(data.Attributes) };
	} catch (error: any) {
		return { statusCode: 400, body: JSON.stringify(error.message) };
	}

};
