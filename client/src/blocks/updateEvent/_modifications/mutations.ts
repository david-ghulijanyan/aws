import { gql } from '@apollo/client';

export const UPDATE_EVENT_MUTATION = gql`
  mutation UpdateEvent($eventId: String!, $eventName: String!, $description: String!, $date: String!) {
    updateEvent(eventId: $eventId, eventName: $eventName, description: $description, date: $date) {
      eventId
      eventName
      description
      date
    }
  }
`;
