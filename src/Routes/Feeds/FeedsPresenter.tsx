import React from "react";
import Helmet from "react-helmet";
import { getFeeds, getMyProfile } from "src/types/api";
import BackArrow from "../../Components/BackArrow/";
import Title from "../../Components/Title";
import styled from "../../typed-components";

const Container = styled.div`
  height: 100vh;
  background-color: ${props => props.theme.yellowColor};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ExtendedTitle = styled(Title)`
  padding: 40px 0px;
`;

const ExtendedBackArrow = styled(BackArrow)`
  position: absolute;
  top: 10px;
  left: 10px;
`;

const FeedsContainer = styled.div`
  width: 100%;
  height: 100%;
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
  loading: boolean;
  feedsData?: getFeeds;
  profileData?: getMyProfile;
  handleFeedClick: (feedId: number) => void;
}

const FeedsPresenter: React.SFC<IProps> = ({
  loading,
  feedsData: { GetFeeds: { feeds = null } = {} } = {},
  profileData: { GetMyProfile: { user = null } = {} } = {},
  handleFeedClick
}) => (
  <Container>
    <Helmet>
      <title>피드 - We There</title>
    </Helmet>
    <ExtendedTitle text="피드" />
    <ExtendedBackArrow backTo="/" />
    <FeedsContainer>
      {!loading &&
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

export default FeedsPresenter;
