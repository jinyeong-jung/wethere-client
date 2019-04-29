import React from "react";
import Title from "src/Components/Title/Title";
import styled from "../../typed-components";

const Container = styled.div`
  position: absolute;
  top: 13%;
  left: 15%;
  height: 80%;
  width: 70%;
  background-color: ${props => props.theme.blackColor};
  z-index: 10;
`;

const Exit = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  transform: scale(0.9);
  cursor: pointer;
`;

const ExtendedTitle = styled(Title)`
  color: white;
  font-size: 40px;
  padding: 0px;
  padding-top: 35px;
  margin-bottom: 20px;
`;

const Form = styled.div`
  background-color: ${props => props.theme.whiteColor};
  width: 80%;
  height: 60%;
  margin: 0 10%;
  margin-bottom: 0;
  display: flex;
  flex-direction: column;
  padding-top: 20px;
`;

const DataContainer = styled.div`
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 15px;
`;

const Label = styled.div`
  color: ${props => props.theme.greyColor};
  margin-bottom: 7px;
  font-size: 14px;
`;

const Data = styled.div`
  color: ${props => props.theme.pinkColor};
  font-size: 13px;
`;

const NameInput = styled.input`
  border: none;
  border-bottom: 1px solid ${props => props.theme.lightGreyColor};
  width: 100%;
  padding-bottom: 5px;
  background-color: transparent;
  font-family: "Noto Sans KR", sans-serif;
  color: ${props => props.theme.pinkColor};
  ::placeholder {
    color: ${props => props.theme.lightGreyColor};
  }
`;

const VisitBtn = styled.input`
  border: none;
  padding: 7px 15px;
  font-family: "Noto Sans KR", sans-serif;
  border-radius: 10px;
  color: ${props => props.theme.greyColor};
  cursor: pointer;
  margin-top: 5px;
  font-size: 12px;
`;

const Button = styled.input`
  position: absolute;
  border: none;
  background-color: ${props => props.theme.pinkColor};
  width: 80%;
  left: 10%;
  color: white;
  padding: 15px;
  font-family: "Noto Sans KR", sans-serif;
  font-size: 15px;
  cursor: pointer;
`;

interface IProps {
  onSubmit: any;
  onClickExit: () => void;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  address: string;
  name: string;
  isVisited: boolean;
  onVisitBtnClick: () => void;
}

const PlacePopup: React.SFC<IProps> = ({
  address,
  name,
  onSubmit,
  onChange,
  onClickExit,
  isVisited,
  onVisitBtnClick
}) => (
  <Container>
    <Exit onClick={onClickExit}>
      <svg
        width="24"
        height="24"
        xmlns="http://www.w3.org/2000/svg"
        fillRule="evenodd"
        clipRule="evenodd"
        fill="white"
      >
        <path d="M12 11.293l10.293-10.293.707.707-10.293 10.293 10.293 10.293-.707.707-10.293-10.293-10.293 10.293-.707-.707 10.293-10.293-10.293-10.293.707-.707 10.293 10.293z" />
      </svg>
    </Exit>
    <ExtendedTitle text={"새로운 플레이스"} />
    <Form>
      <DataContainer>
        <Label>이름</Label>
        <NameInput
          type="text"
          name="name"
          value={name}
          onChange={onChange}
          placeholder="(예시: 우리집)"
        />
      </DataContainer>
      <DataContainer>
        <Label>주소</Label>
        <Data>{address || ""}</Data>
      </DataContainer>
      <DataContainer>
        <Label>가본 곳인가요?</Label>
        <VisitBtn
          type="button"
          name="isVisited"
          value={isVisited ? "네, 가본 곳이예요" : "아니요, 가보고 싶어요"}
          onClick={onVisitBtnClick}
        />
      </DataContainer>
    </Form>
    <Button type="button" value="추가하기" onClick={onSubmit} />
  </Container>
);

export default PlacePopup;
