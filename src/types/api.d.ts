/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: completeCoupleVerification
// ====================================================

export interface completeCoupleVerification_CompleteCoupleVerification {
  __typename: "CompleteCoupleVerificationResponse";
  ok: boolean;
  error: string | null;
}

export interface completeCoupleVerification {
  CompleteCoupleVerification: completeCoupleVerification_CompleteCoupleVerification;
}

export interface completeCoupleVerificationVariables {
  phoneNumber: string;
  key: string;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: initialProfile
// ====================================================

export interface initialProfile_UpdateMyProfile {
  __typename: "UpdateMyProfileResponse";
  ok: boolean;
  error: string | null;
}

export interface initialProfile {
  UpdateMyProfile: initialProfile_UpdateMyProfile;
}

export interface initialProfileVariables {
  nickname?: string | null;
  gender?: string | null;
  profilePhoto?: string | null;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: localLogin
// ====================================================

export interface localLogin_Login {
  __typename: "LoginResponse";
  ok: boolean;
  error: string | null;
  token: string | null;
}

export interface localLogin {
  Login: localLogin_Login;
}

export interface localLoginVariables {
  username: string;
  password: string;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: signUpEnd
// ====================================================

export interface signUpEnd_SignUpEnd {
  __typename: "SignUpEndResponse";
  ok: boolean;
  error: string | null;
}

export interface signUpEnd {
  SignUpEnd: signUpEnd_SignUpEnd;
}

export interface signUpEndVariables {
  phoneNumber: string;
  key: string;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: updateMyProfile
// ====================================================

export interface updateMyProfile_UpdateMyProfile {
  __typename: "UpdateMyProfileResponse";
  ok: boolean;
  error: string | null;
}

export interface updateMyProfile {
  UpdateMyProfile: updateMyProfile_UpdateMyProfile;
}

export interface updateMyProfileVariables {
  nickname?: string | null;
  gender?: string | null;
  status?: string | null;
  profilePhoto?: string | null;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: requestCoupleVerification
// ====================================================

export interface requestCoupleVerification_RequestCoupleVerification {
  __typename: "RequestCoupleVerificationResponse";
  ok: boolean;
  error: string | null;
}

export interface requestCoupleVerification {
  RequestCoupleVerification: requestCoupleVerification_RequestCoupleVerification;
}

export interface requestCoupleVerificationVariables {
  partnerPhoneNumber: string;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: signUpStart
// ====================================================

export interface signUpStart_SignUpStart {
  __typename: "SignUpStartResponse";
  ok: boolean;
  error: string | null;
}

export interface signUpStart {
  SignUpStart: signUpStart_SignUpStart;
}

export interface signUpStartVariables {
  username: string;
  password: string;
  phoneNumber: string;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: facebookLogin
// ====================================================

export interface facebookLogin_FacebookLogin {
  __typename: "FacebookLoginResponse";
  ok: boolean;
  error: string | null;
  token: string | null;
}

export interface facebookLogin {
  FacebookLogin: facebookLogin_FacebookLogin;
}

export interface facebookLoginVariables {
  facebookId: string;
  name: string;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: googleLogin
// ====================================================

export interface googleLogin_GoogleLogin {
  __typename: "GoogleLoginResponse";
  ok: boolean;
  error: string | null;
  token: string | null;
}

export interface googleLogin {
  GoogleLogin: googleLogin_GoogleLogin;
}

export interface googleLoginVariables {
  googleId: string;
  name: string;
  imageUrl?: string | null;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: naverLogin
// ====================================================

export interface naverLogin_NaverLogin {
  __typename: "NaverLoginResponse";
  ok: boolean;
  error: string | null;
  token: string | null;
}

export interface naverLogin {
  NaverLogin: naverLogin_NaverLogin;
}

export interface naverLoginVariables {
  naverId: string;
  nickname: string;
  imageUrl?: string | null;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: kakaoLogin
// ====================================================

export interface kakaoLogin_KakaoLogin {
  __typename: "KakaoLoginResponse";
  ok: boolean;
  error: string | null;
  token: string | null;
}

export interface kakaoLogin {
  KakaoLogin: kakaoLogin_KakaoLogin;
}

export interface kakaoLoginVariables {
  kakaoId: string;
  nickname: string;
  thumbnail?: string | null;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getMyProfile
// ====================================================

export interface getMyProfile_GetMyProfile_user {
  __typename: "User";
  id: number;
  nickname: string | null;
  gender: string | null;
  status: string | null;
  profilePhoto: string | null;
  verifiedCouple: boolean | null;
  coupleForPartnerOneId: number | null;
  coupleForPartnerTwoId: number | null;
}

export interface getMyProfile_GetMyProfile {
  __typename: "GetMyProfileResponse";
  ok: boolean;
  error: string | null;
  user: getMyProfile_GetMyProfile_user | null;
}

export interface getMyProfile {
  GetMyProfile: getMyProfile_GetMyProfile;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

//==============================================================
// END Enums and Input Objects
//==============================================================
