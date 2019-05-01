import { gql } from "apollo-boost";

export const PLACE_FEEDS = gql`
  query getPlaceFeeds($placeId: Int!) {
    GetPlaceFeeds(placeId: $placeId) {
      ok
      error
      feeds {
        id
        userId
        text
      }
    }
  }
`;
