import { gql } from "apollo-boost";

export const FACEBOOK_LOGIN = gql`
  mutation facebookLogin($facebookId: String!, $name: String!) {
    FacebookLogin(facebookId: $facebookId, name: $name) {
      ok
      error
      token
    }
  }
`;

export const GOOGLE_LOGIN = gql`
  mutation googleLogin($googleId: String!, $name: String!, $imageUrl: String) {
    GoogleLogin(googleId: $googleId, name: $name, imageUrl: $imageUrl) {
      ok
      error
      token
    }
  }
`;

export const NAVER_LOGIN = gql`
  mutation naverLogin(
    $naverId: String!
    $nickname: String!
    $imageUrl: String
  ) {
    NaverLogin(naverId: $naverId, nickname: $nickname, imageUrl: $imageUrl) {
      ok
      error
      token
    }
  }
`;

export const KAKAO_LOGIN = gql`
  mutation kakaoLogin(
    $kakaoId: String!
    $nickname: String!
    $thumbnail: String
  ) {
    KakaoLogin(kakaoId: $kakaoId, nickname: $nickname, thumbnail: $thumbnail) {
      ok
      error
      token
    }
  }
`;
