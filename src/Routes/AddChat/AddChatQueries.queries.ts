import { gql } from "apollo-boost";

export const CREATE_CHAT = gql`
  mutation createChat($coupleId: Int!) {
    CreateChat(coupleId: $coupleId) {
      ok
      error
    }
  }
`;
