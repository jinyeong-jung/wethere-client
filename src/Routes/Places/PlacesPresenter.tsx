import React from "react";
import Helmet from "react-helmet";
import Form from "src/Components/Form";
import BackArrow from "../../Components/BackArrow/index";
import Button from "../../Components/Button/index";
import PlacePopup from "../../Components/PlacePopup";
import styled from "../../typed-components";

const ExtendedBackArrow = styled(BackArrow)`
  position: absolute;
  left: 10px;
  top: 15px;
  z-index: 1;
`;

const Map = styled<{ adding: boolean }, any>("div")`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
`;

const AddressInput = styled.input`
  position: absolute;
  left: 15%;
  top: 10px;
  width: 70%;
  z-index: 2;
  border: none;
  border-radius: 15px;
  padding: 10px 20px;
  color: ${props => props.theme.greyColor};
  font-family: "Noto Sans KR", sans-serif;
`;

const BtnContainer = styled.div`
  position: absolute;
  bottom: 25px;
  width: 60%;
  left: 20%;
  display: flex;
  justify-content: space-around;
`;

const AddButton = styled(Button)`
  width: 55%;
  height: 50px;
  margin: 0px;
  background-color: ${props => props.theme.blackColor};
  box-shadow: 0px 4px 3px 0px rgba(0, 0, 0, 0.1);
  font-size: 14px;
  padding: 0px;
`;

const CancelButton = styled(Button)`
  width: 30%;
  height: 50px;
  margin: 0px;
  background-color: ${props => props.theme.whiteColor};
  box-shadow: 0px 4px 3px 0px rgba(0, 0, 0, 0.1);
  font-size: 14px;
  padding: 0px;
  color: ${props => props.theme.blackColor};
`;

const ToggleVisitModeBtn = styled.input`
  position: absolute;
  top: 60px;
  left: 38%;
  width: 24%;
  border: none;
  background-color: ${props => props.theme.blackColor};
  color: white;
  font-family: "Noto Sans KR", sans-serif;
  padding: 5px;
  box-shadow: 0px 4px 3px 0px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  font-size: 12px;
`;

interface IProps {
  mapRef: any;
  address: string;
  name: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: () => void;
  ableToAdd: boolean;
  handleClickAdd: () => void;
  handleClickCancel: () => void;
  adding: boolean;
  isVisited: boolean;
  onVisitBtnClick: () => void;
  addPlaceFn: any;
  seeVisits: boolean;
  toggleVisitMode: () => void;
}

class PlacesPresenter extends React.Component<IProps> {
  public render() {
    const {
      onChange,
      onSubmit,
      mapRef,
      address,
      name,
      ableToAdd,
      handleClickAdd,
      handleClickCancel,
      adding,
      isVisited,
      onVisitBtnClick,
      addPlaceFn,
      seeVisits,
      toggleVisitMode
    } = this.props;
    return (
      <div>
        <Helmet>
          <title>플레이스 - We There</title>
        </Helmet>
        <ExtendedBackArrow
          backTo={"/wethere-client/"}
          fillColor={"rgba(0,0,0,0.7)"}
        />
        <Map ref={mapRef} />
        <Form submitFn={onSubmit}>
          <AddressInput
            type="text"
            onChange={onChange}
            name={"address"}
            value={address}
          />
        </Form>
        {ableToAdd && (
          <BtnContainer>
            <AddButton
              type="button"
              value="플레이스 추가하기"
              onClick={handleClickAdd}
            />
            <CancelButton
              type="button"
              value="취소"
              onClick={handleClickCancel}
            />
          </BtnContainer>
        )}
        {!adding && (
          <ToggleVisitModeBtn
            type="button"
            value={seeVisits ? "아직 안 간 곳 보기" : "갔던 곳 보기"}
            onClick={toggleVisitMode}
          />
        )}
        {adding && (
          <PlacePopup
            address={address}
            name={name}
            onSubmit={addPlaceFn}
            onClickExit={handleClickCancel}
            onChange={onChange}
            isVisited={isVisited}
            onVisitBtnClick={onVisitBtnClick}
          />
        )}
      </div>
    );
  }
}

export default PlacesPresenter;
