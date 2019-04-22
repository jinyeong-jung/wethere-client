import { gql } from "apollo-boost";

export const SIGN_UP_START = gql`
  mutation signUpStart(
    $username: String!
    $password: String!
    $phoneNumber: String!
  ) {
    SignUpStart(
      username: $username
      password: $password
      phoneNumber: $phoneNumber
    ) {
      ok
      error
    }
  }
`;
