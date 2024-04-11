import { gql } from '@apollo/client';

export const GET_EVENT_QUERY = gql`
  query GetEvent($eventId: String!) {
    getEvent(eventId: $eventId) {
      eventId
      eventName
      description
      date
    }
  }
`;
