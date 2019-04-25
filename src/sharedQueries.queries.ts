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
        status
        profilePhoto
        verifiedCouple
        coupleForPartnerOneId
        coupleForPartnerTwoId
      }
    }
  }
`;

export const COUPLE_INFO = gql`
  query getCoupleInfo {
    GetCoupleInfo {
      ok
      error
      couple {
        id
        partnerOneId
        partnerTwoId
        chat {
          id
        }
      }
    }
  }
`;
