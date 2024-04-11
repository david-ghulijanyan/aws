import { gql } from '@apollo/client';

export const GET_EVENTS_QUERY = gql`
  query GetEvents($limit: Int, $filter: EventFilter) {
    getEvents(limit: $limit, filter: $filter) {
      items {
        eventId
        eventName
        description
        date
      }
      lastEvaluatedKey
    }
  }
`;
