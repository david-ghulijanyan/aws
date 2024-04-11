import { gql } from '@apollo/client';

export const CREATE_EVENT_MUTATION = gql`
  mutation CreateEvent($eventName: String!, $description: String!, $date: String!) {
    createEvent(eventName: $eventName, description: $description, date: $date) {
      eventId
      eventName
      description
      date
    }
  }
`;
