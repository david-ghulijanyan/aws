import 'dotenv/config';

export const AWS_ACCESS_KEY_ID = `${process.env.AWS_ACCESS_KEY_ID}`;
export const AWS_SECRET_ACCESS_KEY = `${process.env.AWS_SECRET_ACCESS_KEY}`;
export const AWS_REGION = `${process.env.AWS_REGION}`;

export const PORT = `${process.env.PORT || 4000}`;

export const COGNITO_CLIENT_ID = `${process.env.COGNITO_CLIENT_ID}`;
export const COGNITO_USER_POOL_ID = `${process.env.COGNITO_USER_POOL_ID}`;

// Tables
export const EVENTS_TABLE_NAME = `${process.env.EVENTS_TABLE_NAME}`;