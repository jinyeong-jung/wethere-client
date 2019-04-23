import { gql } from "apollo-boost";

export const LOCAL_LOGIN = gql`
  mutation localLogin($username: String!, $password: String!) {
    Login(username: $username, password: $password) {
      ok
      error
      token
    }
  }
`;
