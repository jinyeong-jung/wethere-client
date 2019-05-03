import React from "react";
import Helmet from "react-helmet";
import BackArrow from "../../Components/BackArrow";
import Title from "../../Components/Title";
import styled from "../../typed-components";
import { getMyProfile, getPlaceFeeds, placeDetail } from "../../types/api";

const Container = styled.div`
  height: 100vh;
  background-color: ${props => props.theme.yellowColor};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ExtendedBackArrow = styled(BackArrow)`
  position: absolute;
  top: 10px;
  left: 10px;
`;

const WriteIcon = styled.div`
  position: absolute;
  top: 10px;
  right: 15px;
  transform: scale(0.9);
  cursor: pointer;
`;

const ExtendedTitle = styled(Title)`
  font-size: 40px;
  padding-top: 40px;
  padding-bottom: 15px;
`;

const Address = styled.div`
  color: rgba(0, 0, 0, 0.2);
  font-size: 13px;
`;

const FeedsContainer = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 50px;
  background-color: white;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  box-shadow: 0px -4px 15px 0px rgba(0, 0, 0, 0.1);
  padding: 25px;
  overflow: auto;
  ::-webkit-scrollbar {
    -webkit-appearance: none;
    width: 7px;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background-color: rgba(255, 255, 255, 0.2);
    -webkit-box-shadow: 0 0 1px rgba(255, 255, 255, 0.2);
  }
`;

const Feed = styled.div`
  width: 100%;
  border-bottom: 0.5px solid #dfdfdf;
  padding-top: 15px;
  padding-bottom: 10px;
  cursor: pointer;
`;

const Label = styled.div`
  color: ${props => props.theme.greyColor};
  font-size: 13px;
  margin-bottom: 5px;
`;

const Data = styled.div`
  margin-bottom: 10px;
  font-size: 14px;
  color: ${props => props.theme.blackColor};
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  line-height: 1.5;
  max-height: 4.5;
`;

interface IProps {
  placeData?: placeDetail;
  placeLoading: boolean;
  feedData?: getPlaceFeeds;
  feedLoading: boolean;
  userData?: getMyProfile;
  handleFeedClick: (feedId: number) => void;
  handleWriteClick: any;
}

const PlaceFeedsPresenter: React.SFC<IProps> = ({
  placeData: { PlaceDetail: { place = null } = {} } = {},
  placeLoading,
  feedData: { GetPlaceFeeds: { feeds = null } = {} } = {},
  feedLoading,
  userData: { GetMyProfile: { user = null } = {} } = {},
  handleFeedClick,
  handleWriteClick
}) => (
  <Container>
    <Helmet>
      <title>피드 - We There</title>
    </Helmet>
    <ExtendedBackArrow backTo="/wethere-client/places" />
    {!placeLoading && place && (
      <React.Fragment>
        <WriteIcon onClick={handleWriteClick}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="white"
          >
            <path d="M7.127 22.562l-7.127 1.438 1.438-7.128 5.689 5.69zm1.414-1.414l11.228-11.225-5.69-5.692-11.227 11.227 5.689 5.69zm9.768-21.148l-2.816 2.817 5.691 5.691 2.816-2.819-5.691-5.689z" />
          </svg>
        </WriteIcon>
        <ExtendedTitle text={place.name} />
        <Address>{place.address}</Address>
      </React.Fragment>
    )}
    <FeedsContainer>
      {!feedLoading &&
        feeds &&
        user &&
        feeds.map(feed => {
          if (feed) {
            return (
              <Feed
                key={feed.id}
                onClick={() => {
                  handleFeedClick(feed.id);
                }}
              >
                <Label>작성자</Label>
                <Data>
                  {user.id === feed.userId
                    ? "내가 작성한 글"
                    : "파트너가 작성한 글"}
                </Data>
                <Label>내용</Label>
                <Data>{feed.text}</Data>
              </Feed>
            );
          } else {
            return null;
          }
        })}
    </FeedsContainer>
  </Container>
);

export default PlaceFeedsPresenter;
