import { gql } from "apollo-boost";

export const REQUEST_COUPLE_VERIFICATION = gql`
  mutation requestCoupleVerification($partnerPhoneNumber: String!) {
    RequestCoupleVerification(partnerPhoneNumber: $partnerPhoneNumber) {
      ok
      error
    }
  }
`;
