import { gql } from "apollo-boost";

export const SIGN_UP_END = gql`
  mutation signUpEnd($phoneNumber: String!, $key: String!) {
    SignUpEnd(phoneNumber: $phoneNumber, key: $key) {
      ok
      error
    }
  }
`;
