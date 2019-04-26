import { gql } from "apollo-boost";

export const GET_CHAT = gql`
  query getChat($chatId: Int!) {
    GetChat(chatId: $chatId) {
      ok
      error
      chat {
        id
        messages {
          id
          text
          userId
        }
      }
    }
  }
`;

export const SEND_MESSAGE = gql`
  mutation sendChatMessage($chatId: Int!, $text: String!) {
    SendChatMessage(chatId: $chatId, text: $text) {
      ok
      error
    }
  }
`;

export const MESSAGE_SUBSCRIPTION = gql`
  subscription messageSubscription {
    MessageSubscription {
      id
      text
      userId
    }
  }
`;
