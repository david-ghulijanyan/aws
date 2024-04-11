import { IResolvers } from '@graphql-tools/utils';
import { APIGatewayProxyEvent } from 'aws-lambda';

import { signIn } from './lambdas/signIn';
import { signOut } from './lambdas/signOut';
import { signUp } from './lambdas/signUp';
import { ISignUpArgs, ISignInArgs, ISignOutArgs } from './interfaces';

const authResolvers: IResolvers = {
	Mutation: {
		signUp: async (_, args: ISignUpArgs) => {
			const event: APIGatewayProxyEvent = { body: JSON.stringify(args) } as APIGatewayProxyEvent;
			const { body, statusCode } = await signUp(event);
			if (statusCode !== 200) {
				throw new Error(body);
			}
			return JSON.parse(body);
		},
		signIn: async (_, args: ISignInArgs) => {
			const event: APIGatewayProxyEvent = { body: JSON.stringify(args) } as APIGatewayProxyEvent;
			const { body, statusCode } = await signIn(event);
			if (statusCode !== 200) {
				throw new Error(body);
			}
			return JSON.parse(body);
		},
		signOut: async (_, args: ISignOutArgs) => {
			const event: APIGatewayProxyEvent = { body: JSON.stringify(args) } as APIGatewayProxyEvent;
			const { body, statusCode } = await signOut(event);
			if (statusCode !== 200) {
				throw new Error(body);
			}
			return JSON.parse(body);
		},
	},
};

export { authResolvers };
