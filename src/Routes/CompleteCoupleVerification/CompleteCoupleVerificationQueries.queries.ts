import { gql } from "apollo-boost";

export const COMPLETE_COUPLE_VERIFICATION = gql`
  mutation completeCoupleVerification($phoneNumber: String!, $key: String!) {
    CompleteCoupleVerification(phoneNumber: $phoneNumber, key: $key) {
      ok
      error
    }
  }
`;
