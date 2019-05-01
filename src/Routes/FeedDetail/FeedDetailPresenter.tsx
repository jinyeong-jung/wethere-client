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
  display: flex;
  flex-direction: column;
  align-items: center;
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

const AlertContainer = styled.div`
  position: absolute;
  top: 30%;
  border: solid 20px ${props => props.theme.yellowColor};
  background-color: white;
  width: 300px;
  height: 180px;
  z-index: 2;
  border-radius: 20px;
  box-shadow: 0px 4px 3px 0px rgba(0, 0, 0, 0.2);
  padding: 20px;
`;

const AlertText = styled.div`
  width: 100%;
  text-align: center;
  color: ${props => props.theme.blackColor};
`;

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin-top: 30px;
`;

const AlertBtn = styled.input`
  border: none;
  background-color: ${props => props.theme.lightGreyColor};
  width: 100px;
  padding: 10px 15px;
  color: white;
  cursor: pointer;
`;

interface IProps {
  alertOpen: boolean;
  loading: boolean;
  data?: feedDetail;
  openDeleteAlertFn: () => void;
  handleClickDelete: any;
  handleClickCancel: any;
}

const FeedDetailPresenter: React.SFC<IProps> = ({
  alertOpen,
  loading,
  data: { FeedDetail: { feed = null } = {} } = {},
  openDeleteAlertFn,
  handleClickDelete,
  handleClickCancel
}) => {
  if (feed) {
    const date = Number(feed.createdAt);
    const timestamp = new Date(date * 1000).toDateString();
    console.log(timestamp);
  }
  return (
    <Container>
      <Helmet>
        <title>피드 - We there</title>
      </Helmet>
      <ExtendedExit backTo="/feeds" />
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
              {feed.user.nickname} /{" "}
              {new Date(Number(feed.createdAt)).toLocaleString()} 작성
            </Text>
            <Label>플레이스</Label>
            <Text>
              {feed.place.name} / {feed.place.address}
            </Text>
            <Label>내용</Label>
            <Text>{feed.text}</Text>
          </TextContainer>
          <ExtendedButton value="피드 삭제하기" onClick={openDeleteAlertFn} />
        </FeedContainer>
      )}
      {alertOpen && (
        <AlertContainer>
          <AlertText>삭제하시겠습니까?</AlertText>
          <ButtonContainer>
            <AlertBtn type="button" value="네" onClick={handleClickDelete} />
            <AlertBtn
              type="button"
              value="아니요"
              onClick={handleClickCancel}
            />
          </ButtonContainer>
        </AlertContainer>
      )}
    </Container>
  );
};

export default FeedDetailPresenter;
