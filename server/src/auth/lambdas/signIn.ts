import { APIGatewayProxyEvent } from 'aws-lambda';
import { cognito } from '../providers';
import { IEventRespone } from '../../_mixins';

export const signIn = async (event: APIGatewayProxyEvent): Promise<IEventRespone> => {
	if (!event.body) {
		return { statusCode: 400, body: 'Request body is missing' };
	}

	const { username, password } = JSON.parse(event.body);

	const params = {
		AuthFlow: 'USER_PASSWORD_AUTH',
		ClientId: process.env.COGNITO_CLIENT_ID!,
		AuthParameters: {
			USERNAME: username,
			PASSWORD: password,
		},
	};

	try {
		const data = await cognito.initiateAuth(params).promise();
		return {
			statusCode: 200, body: JSON.stringify({
				"accessToken": data.AuthenticationResult?.AccessToken,
				"idToken": data.AuthenticationResult?.IdToken,
				"refreshToken": data.AuthenticationResult?.RefreshToken
			})
		};
	} catch (error: any) {
		return { statusCode: 400, body: JSON.stringify({ message: error.message }) };
	}
};
