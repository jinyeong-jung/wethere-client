import { gql } from "apollo-boost";

export const FEED_DETAIL = gql`
  query feedDetail($feedId: Int!) {
    FeedDetail(feedId: $feedId) {
      ok
      error
      feed {
        text
        feedPicture
        user {
          nickname
        }
        place {
          id
          name
          address
        }
        createdAt
      }
    }
  }
`;
