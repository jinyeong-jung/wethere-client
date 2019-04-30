import React from "react";
import { MutationFn } from "react-apollo";
import Helmet from "react-helmet";
import Title from "src/Components/Title";
import { placeDetail } from "src/types/api";
import Button from "../../Components/Button";
import Exit from "../../Components/Exit/index";
import styled from "../../typed-components";

const Container = styled.div`
  height: 100vh;
  background-color: ${props => props.theme.blackColor};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ExtendedExit = styled(Exit)`
  position: absolute;
  top: 15px;
  right: 15px;
`;

const ExtendedTitle = styled(Title)`
  font-size: 30px;
`;

const DataContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme.whiteColor};
  width: 65%;
  height: 50%;
  padding: 0 25px;
  padding-top: 30px;
`;

const Label = styled.div`
  color: ${props => props.theme.greyColor};
  font-size: 14px;
  margin-bottom: 10px;
`;

const Data = styled.div`
  color: ${props => props.theme.pinkColor};
  margin-bottom: 20px;
  font-size: 13px;
`;

const ExtendedButton = styled(Button)`
  margin: 0;
  width: 65%;
  background-color: ${props => props.theme.pinkColor};
`;

interface IProps {
  loading: boolean;
  placeData?: placeDetail;
  onBtnClick: MutationFn;
}

const DeletePlacePresenter: React.SFC<IProps> = ({
  loading,
  placeData: { PlaceDetail: { place = null } = {} } = {},
  onBtnClick
}) => (
  <Container>
    <Helmet>
      <title>플레이스 삭제 - We There</title>
    </Helmet>
    <ExtendedExit backTo="/places" />
    <ExtendedTitle text={"플레이스를 삭제하시겠습니까?"} />
    {!loading && place && (
      <React.Fragment>
        <DataContainer>
          <Label>이름</Label>
          <Data>{place.name}</Data>
          <Label>주소</Label>
          <Data>{place.address}</Data>
          <Label>가 본 곳인가요?</Label>
          <Data>
            {place.isVisited ? "이미 가본 곳이예요" : "아직 안 가봤어요"}
          </Data>
        </DataContainer>
        <ExtendedButton value={"삭제"} onClick={onBtnClick} />
      </React.Fragment>
    )}
  </Container>
);

export default DeletePlacePresenter;
