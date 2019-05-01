import { gql } from "apollo-boost";

export const ADD_FEED = gql`
  mutation addFeed($placeId: Int!, $text: String!, $feedPicture: String) {
    AddFeed(placeId: $placeId, text: $text, feedPicture: $feedPicture) {
      ok
      error
    }
  }
`;
