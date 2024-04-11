import { DynamoDB } from 'aws-sdk';
import { AWS_REGION } from '../app/configs';


const dynamoDb = new DynamoDB.DocumentClient({
	region: AWS_REGION,
});

export { dynamoDb };