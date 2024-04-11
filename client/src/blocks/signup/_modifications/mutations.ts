import { gql } from '@apollo/client';

export const SIGN_UP_MUTATION = gql`
  mutation SignUp($username: String!, $email: String!, $password: String!, $firstName: String!, $lastName: String!) {
    signUp(username: $username, email: $email, password: $password, firstName: $firstName, lastName: $lastName) {
      accessToken
			idToken
			refreshToken
    }
  }
`;
