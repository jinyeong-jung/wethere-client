import React from "react";
import Helmet from "react-helmet";
import Button from "src/Components/Button";
import Exit from "src/Components/Exit";
import styled from "../../typed-components";
import { feedDetail } from "../../types/api";

const Container = styled.div`
    height: 100vh;
    background-color: ${props => props.theme.yellowColor}
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const ExtendedExit = styled(Exit)`
  position: absolute;
  top: 10px;
  right: 10px;
`;

const FeedContainer = styled.div`
padding-top: 20px;
  background-color: white;
  width: 80vw
  height: 90vh;
  margin-top: 5vh;
  margin-bottom: 5vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PicContainer = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

const Picture = styled.img`
  max-width: 100%;
  height: 200px;
  box-shadow: 0px 4px 3px 0px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
`;

const TextContainer = styled.div`
  width: 90%;
  height: 100%;
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
  padding: 15px;
`;

const Label = styled.div`
  color: ${props => props.theme.blackColor};
  margin-bottom: 10px;
  font-size: 14px;
`;

const Text = styled.div`
  color: ${props => props.theme.greyColor}
  font-size:13px;
  margin-bottom: 20px;
`;

const ExtendedButton = styled(Button)`
  margin: 0;
  margin-bottom: 15px;
  width: 40%;
`;

interface IProps {
  loading: boolean;
  data?: feedDetail;
  handleDeleteClick: any;
}

const FeedDetailPresenter: React.SFC<IProps> = ({
  loading,
  data: { FeedDetail: { feed = null } = {} } = {},
  handleDeleteClick
}) => (
  <Container>
    <Helmet>
      <title>피드 - We there</title>
    </Helmet>
    <ExtendedExit backTo="/" />
    {!loading && feed && (
      <FeedContainer>
        <PicContainer>
          <Picture
            align="middle"
            src={
              feed.feedPicture ||
              "http://www.eltis.org/sites/default/files/default_images/photo_default_4.png"
            }
          />
        </PicContainer>
        <TextContainer>
          <Text>
            {feed.user.nickname} 작성 / {feed.createdAt}
          </Text>
          <Label>플레이스</Label>
          <Text>
            {feed.place.name} / {feed.place.address}
          </Text>
          <Label>내용</Label>
          <Text>{feed.text}</Text>
        </TextContainer>
        <ExtendedButton value="피드 삭제하기" onClick={handleDeleteClick} />
      </FeedContainer>
    )}
  </Container>
);

export default FeedDetailPresenter;
