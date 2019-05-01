/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: createChat
// ====================================================

export interface createChat_CreateChat {
  __typename: "CreateChatResponse";
  ok: boolean;
  error: string | null;
}

export interface createChat {
  CreateChat: createChat_CreateChat;
}

export interface createChatVariables {
  coupleId: number;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: addFeed
// ====================================================

export interface addFeed_AddFeed {
  __typename: "AddFeedResponse";
  ok: boolean;
  error: string | null;
}

export interface addFeed {
  AddFeed: addFeed_AddFeed;
}

export interface addFeedVariables {
  placeId: number;
  text: string;
  feedPicture?: string | null;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getChat
// ====================================================

export interface getChat_GetChat_chat_messages {
  __typename: "Message";
  id: number;
  text: string;
  userId: number;
}

export interface getChat_GetChat_chat {
  __typename: "Chat";
  id: number;
  messages: (getChat_GetChat_chat_messages | null)[] | null;
}

export interface getChat_GetChat {
  __typename: "GetChatResponse";
  ok: boolean;
  error: string | null;
  chat: getChat_GetChat_chat | null;
}

export interface getChat {
  GetChat: getChat_GetChat;
}

export interface getChatVariables {
  chatId: number;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: sendChatMessage
// ====================================================

export interface sendChatMessage_SendChatMessage {
  __typename: "SendChatMessageResponse";
  ok: boolean;
  error: string | null;
}

export interface sendChatMessage {
  SendChatMessage: sendChatMessage_SendChatMessage;
}

export interface sendChatMessageVariables {
  chatId: number;
  text: string;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL subscription operation: messageSubscription
// ====================================================

export interface messageSubscription_MessageSubscription {
  __typename: "Message";
  id: number;
  text: string;
  userId: number;
}

export interface messageSubscription {
  MessageSubscription: messageSubscription_MessageSubscription | null;
}

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
// GraphQL query operation: placeDetail
// ====================================================

export interface placeDetail_PlaceDetail_place {
  __typename: "Place";
  name: string;
  address: string;
  isVisited: boolean;
}

export interface placeDetail_PlaceDetail {
  __typename: "PlaceDetailResponse";
  ok: boolean;
  error: string | null;
  place: placeDetail_PlaceDetail_place | null;
}

export interface placeDetail {
  PlaceDetail: placeDetail_PlaceDetail;
}

export interface placeDetailVariables {
  placeId: number;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: deletePlace
// ====================================================

export interface deletePlace_DeletePlace {
  __typename: "DeletePlaceResponse";
  ok: boolean;
  error: string | null;
}

export interface deletePlace {
  DeletePlace: deletePlace_DeletePlace;
}

export interface deletePlaceVariables {
  placeId: number;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: feedDetail
// ====================================================

export interface feedDetail_FeedDetail_feed_user {
  __typename: "User";
  nickname: string | null;
}

export interface feedDetail_FeedDetail_feed_place {
  __typename: "Place";
  id: number;
  name: string;
  address: string;
}

export interface feedDetail_FeedDetail_feed {
  __typename: "Feed";
  text: string;
  feedPicture: string | null;
  user: feedDetail_FeedDetail_feed_user;
  place: feedDetail_FeedDetail_feed_place;
  createdAt: string;
}

export interface feedDetail_FeedDetail {
  __typename: "FeedDetailResponse";
  ok: boolean;
  error: string | null;
  feed: feedDetail_FeedDetail_feed | null;
}

export interface feedDetail {
  FeedDetail: feedDetail_FeedDetail;
}

export interface feedDetailVariables {
  feedId: number;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: deleteFeed
// ====================================================

export interface deleteFeed_DeleteFeed {
  __typename: "DeleteFeedResponse";
  ok: boolean;
  error: string | null;
}

export interface deleteFeed {
  DeleteFeed: deleteFeed_DeleteFeed;
}

export interface deleteFeedVariables {
  feedId: number;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getComments
// ====================================================

export interface getComments_GetComments_comments {
  __typename: "Comment";
  id: number;
  text: string;
  userId: number;
}

export interface getComments_GetComments {
  __typename: "GetCommentsResponse";
  ok: boolean;
  error: string | null;
  comments: (getComments_GetComments_comments | null)[] | null;
}

export interface getComments {
  GetComments: getComments_GetComments;
}

export interface getCommentsVariables {
  feedId: number;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getFeeds
// ====================================================

export interface getFeeds_GetFeeds_feeds {
  __typename: "Feed";
  id: number;
  userId: number;
  text: string;
  placeId: number | null;
  feedPicture: string | null;
}

export interface getFeeds_GetFeeds {
  __typename: "GetFeedsResponse";
  ok: boolean;
  error: string | null;
  feeds: (getFeeds_GetFeeds_feeds | null)[] | null;
}

export interface getFeeds {
  GetFeeds: getFeeds_GetFeeds;
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
// GraphQL query operation: getPlaceFeeds
// ====================================================

export interface getPlaceFeeds_GetPlaceFeeds_feeds {
  __typename: "Feed";
  id: number;
  userId: number;
  text: string;
}

export interface getPlaceFeeds_GetPlaceFeeds {
  __typename: "GetPlaceFeedsResponse";
  ok: boolean;
  error: string | null;
  feeds: (getPlaceFeeds_GetPlaceFeeds_feeds | null)[] | null;
}

export interface getPlaceFeeds {
  GetPlaceFeeds: getPlaceFeeds_GetPlaceFeeds;
}

export interface getPlaceFeedsVariables {
  placeId: number;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: addPlace
// ====================================================

export interface addPlace_AddPlace {
  __typename: "AddPlaceResponse";
  ok: boolean;
  error: string | null;
}

export interface addPlace {
  AddPlace: addPlace_AddPlace;
}

export interface addPlaceVariables {
  name: string;
  lat: number;
  lng: number;
  address: string;
  isVisited: boolean;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getPlaces
// ====================================================

export interface getPlaces_GetPlaces_visitedPlaces_feeds {
  __typename: "Feed";
  id: number;
}

export interface getPlaces_GetPlaces_visitedPlaces {
  __typename: "Place";
  id: number;
  name: string;
  lat: number;
  lng: number;
  address: string;
  isVisited: boolean;
  feeds: (getPlaces_GetPlaces_visitedPlaces_feeds | null)[] | null;
}

export interface getPlaces_GetPlaces_notVisitedPlaces_feeds {
  __typename: "Feed";
  id: number;
}

export interface getPlaces_GetPlaces_notVisitedPlaces {
  __typename: "Place";
  id: number;
  name: string;
  lat: number;
  lng: number;
  address: string;
  isVisited: boolean;
  feeds: (getPlaces_GetPlaces_notVisitedPlaces_feeds | null)[] | null;
}

export interface getPlaces_GetPlaces {
  __typename: "GetPlacesResponse";
  ok: boolean;
  error: string | null;
  visitedPlaces: (getPlaces_GetPlaces_visitedPlaces | null)[] | null;
  notVisitedPlaces: (getPlaces_GetPlaces_notVisitedPlaces | null)[] | null;
}

export interface getPlaces {
  GetPlaces: getPlaces_GetPlaces;
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

// ====================================================
// GraphQL query operation: getCoupleInfo
// ====================================================

export interface getCoupleInfo_GetCoupleInfo_couple_chat {
  __typename: "Chat";
  id: number;
}

export interface getCoupleInfo_GetCoupleInfo_couple {
  __typename: "Couple";
  id: number;
  partnerOneId: number;
  partnerTwoId: number | null;
  chat: getCoupleInfo_GetCoupleInfo_couple_chat | null;
}

export interface getCoupleInfo_GetCoupleInfo {
  __typename: "GetCoupleInfoResponse";
  ok: boolean;
  error: string | null;
  couple: getCoupleInfo_GetCoupleInfo_couple | null;
}

export interface getCoupleInfo {
  GetCoupleInfo: getCoupleInfo_GetCoupleInfo;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

//==============================================================
// END Enums and Input Objects
//==============================================================
