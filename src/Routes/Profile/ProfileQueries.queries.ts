import { gql } from "apollo-boost";

export const UPDATE_PROFILE = gql`
  mutation updateMyProfile(
    $nickname: String
    $gender: String
    $status: String
    $profilePhoto: String
  ) {
    UpdateMyProfile(
      nickname: $nickname
      gender: $gender
      status: $status
      profilePhoto: $profilePhoto
    ) {
      ok
      error
    }
  }
`;
