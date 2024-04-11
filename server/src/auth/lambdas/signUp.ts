import { APIGatewayProxyEvent } from 'aws-lambda';
import { CognitoIdentityServiceProvider } from 'aws-sdk';
import { IEventRespone } from '../../_mixins';
import { COGNITO_CLIENT_ID } from '../../app/configs';

const cognito = new CognitoIdentityServiceProvider();

export const signUp = async (event: APIGatewayProxyEvent): Promise<IEventRespone> => {
	if (!event.body) {
		return { statusCode: 400, body: 'Request body is missing' };
	}

	const { username, email, password, firstName, lastName } = JSON.parse(event.body);

	const params = {
		ClientId: COGNITO_CLIENT_ID!,
		Username: username,
		Password: password,
		UserAttributes: [
			{ Name: 'email', Value: email },
			{ Name: 'given_name', Value: firstName },
			{ Name: 'family_name', Value: lastName },
		],
	};

	try {
		await cognito.signUp(params).promise();
		const authResult = await cognito.initiateAuth({
			AuthFlow: 'USER_PASSWORD_AUTH',
			ClientId: COGNITO_CLIENT_ID,
			AuthParameters: {
				USERNAME: username,
				PASSWORD: password,
			},
		}).promise();
		return {
			statusCode: 200,
			body: JSON.stringify({
				"accessToken": authResult.AuthenticationResult?.AccessToken,
				"idToken": authResult.AuthenticationResult?.IdToken,
				"refreshToken": authResult.AuthenticationResult?.RefreshToken
			}),
		};
	} catch (error: any) {
		return { statusCode: 400, body: JSON.stringify({ message: error.message }) };
	}
};
