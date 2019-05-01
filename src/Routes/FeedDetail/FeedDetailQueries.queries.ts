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

export const DELETE_FEED = gql`
  mutation deleteFeed($feedId: Int!) {
    DeleteFeed(feedId: $feedId) {
      ok
      error
    }
  }
`;

export const GET_COMMENTS = gql`
  query getComments($feedId: Int!) {
    GetComments(feedId: $feedId) {
      ok
      error
      comments {
        id
        text
        userId
      }
    }
  }
`;

export const ADD_COMMENT = gql`
  mutation addComment($feedId: Int!, $text: String!) {
    AddComment(feedId: $feedId, text: $text) {
      ok
      error
    }
  }
`;
