import React from "react";
import { MutationFn } from "react-apollo";
import Helmet from "react-helmet";
import Button from "src/Components/Button";
import Exit from "src/Components/Exit";
import styled from "../../typed-components";

const Container = styled.div`
  height: 100vh;
  background-color: ${props => props.theme.yellowColor};
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
  background-color: white;
  height: 80%;
  width: 75%;
  margin-top: 10%;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 10px;
`;

const PlaceName = styled.div`
  color: ${props => props.theme.greyColor};
  font-size: 17px;
  margin: 10px 0;
`;

const PlaceAddress = styled.div`
  color: ${props => props.theme.lightGreyColor};
  font-size: 13px;
  margin-bottom: 15px;
`;

const FeedTextarea = styled.textarea`
  width: 100%;
  height: 100%;
  margin: 0 15px 15px 15px;
  font-family: "Noto Sans KR", sans-serif;
  color: ${props => props.theme.greyColor};
`;

const FeedImageInput = styled.input`
  margin-bottom: 15px;
`;

const ExtendedButton = styled(Button)`
  margin: 0;
  padding: 15px;
  width: 90%;
  background-color: ${props => props.theme.pinkColor};
`;

interface IProps {
  placeId: number;
  placeName: string;
  placeAddress: string;
  feedText: string;
  onInputChange: (event: React.ChangeEvent<any>) => void;
  onSubmit: MutationFn;
}

const AddFeedPresenter: React.SFC<IProps> = ({
  placeId,
  placeName,
  placeAddress,
  feedText,
  onInputChange,
  onSubmit
}) => (
  <Container>
    <Helmet>
      <title>피드 추가 - We There</title>
    </Helmet>
    <ExtendedExit backTo={`/feeds/${placeId}`} />
    <FeedContainer>
      <PlaceName>{placeName}</PlaceName>
      <PlaceAddress>{placeAddress}</PlaceAddress>
      <FeedTextarea name="feedText" value={feedText} onChange={onInputChange} />
      <FeedImageInput
        type="file"
        name="feedImage"
        accept="image/png, image/jpeg"
        onChange={onInputChange}
      />
      <ExtendedButton value="추가" onClick={onSubmit} />
    </FeedContainer>
  </Container>
);

export default AddFeedPresenter;
