# AWS Event Management Platform

This project is an event management platform built using React for the frontend and Node.js for the backend, deployed on AWS.

## Prerequisites

- [Node.js](https://nodejs.org/en/download/)
- [AWS Account](https://aws.amazon.com/premiumsupport/knowledge-center/create-and-activate-aws-account/)
	- Cognito
	- DynamoDB
	- AWS AppSync
	- IAM
	- Lambda
	- Elastic Beanstalk
	- S3
	- Cloudfront

## Installation

### Backend

1. Clone the repository:
   ```bash
   git clone https://github.com/david-ghulijanyan/aws.git
   cd aws/server
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file in the `server` directory:
	```bash
	cp .env.example .env
	```

### Frontend

1. Navigate to the frontend directory:
   ```bash
   cd ../client
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file in the `client` directory
	```bash
	cp .env.example .env
	```


## Usage

### Backend

- Start the backend server locally:
  ```bash
  npm run build
  npm start
  ```

### Frontend

- Start the frontend app locally:
  ```bash
  npm start
  ```

## Testing

### Backend

- Run backend tests:
  ```bash
  npm test
  ```

### Frontend

- Run frontend tests:
  ```bash
  npm test
  ```

## Deployment (not deployed)

- The backend is deployed to AWS Elastic Beanstalk.
- The frontend can be deployed to AWS S3 and CloudFront for static hosting.

## Known bugs (todos)

- deploy to AWS
- does not update events list after redirects from create/update pages
- add more tests
- add e2e tests
- update UI