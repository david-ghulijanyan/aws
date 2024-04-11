import { APIGatewayProxyEvent } from 'aws-lambda';
import { cognito } from '../providers';
import { IEventRespone } from '../../_mixins';

export const signOut = async (event: APIGatewayProxyEvent): Promise<IEventRespone> => {
	if (!event.body) {
		return { statusCode: 400, body: 'Request body is missing' };
	}

	const { accessToken } = JSON.parse(event.body);

	const params = {
		AccessToken: accessToken,
	};

	try {
		await cognito.globalSignOut(params).promise();
		return { statusCode: 200, body: JSON.stringify({ message: 'Signed out successfully' }) };
	} catch (error: any) {
		return { statusCode: 400, body: JSON.stringify(error.message) };
	}
};