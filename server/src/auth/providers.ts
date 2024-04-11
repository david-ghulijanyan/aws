import { CognitoIdentityServiceProvider } from 'aws-sdk';
import { AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY, AWS_REGION } from '../app/configs';

const cognito = new CognitoIdentityServiceProvider({
	credentials: {
		accessKeyId: AWS_ACCESS_KEY_ID,
		secretAccessKey: AWS_SECRET_ACCESS_KEY,
	},
	region: AWS_REGION
});

export { cognito };