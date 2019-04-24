import { gql } from "apollo-boost";

export const USER_PROFILE = gql`
  query getMyProfile {
    GetMyProfile {
      ok
      error
      user {
        id
        nickname
        gender
        birth
        status
        profilePhoto
        verifiedCouple
        coupleForPartnerOneId
        coupleForPartnerTwoId
      }
    }
  }
`;
