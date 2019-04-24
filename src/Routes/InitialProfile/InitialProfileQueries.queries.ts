import { gql } from "apollo-boost";

export const INITIAL_PROFILE = gql`
  mutation initialProfile(
    $nickname: String
    $gender: String
    $profilePhoto: String
  ) {
    UpdateMyProfile(
      nickname: $nickname
      gender: $gender
      profilePhoto: $profilePhoto
    ) {
      ok
      error
    }
  }
`;
