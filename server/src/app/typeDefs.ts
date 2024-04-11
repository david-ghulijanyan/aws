import { gql } from 'apollo-server-express';
import { authTypeDefs } from '../auth';
import { eventsTypeDefs } from '../events';

const typeDefs = gql`
  ${authTypeDefs}
  ${eventsTypeDefs}
`;

export { typeDefs };
