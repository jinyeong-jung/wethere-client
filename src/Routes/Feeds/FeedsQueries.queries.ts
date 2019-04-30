import { gql } from "apollo-boost";

export const GET_ALL_FEEDS = gql`
  query getFeeds {
    GetFeeds {
      ok
      error
      feeds {
        id
        userId
        text
        placeId
        feedPicture
      }
    }
  }
`;
