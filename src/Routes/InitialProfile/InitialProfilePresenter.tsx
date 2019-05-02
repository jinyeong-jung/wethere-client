import React from "react";
import Helmet from "react-helmet";
import Input from "src/Components/Input";
import PhotoInput from "src/Components/PhotoInput";
import Exit from "../../Components/Exit/Exit";
import Form from "../../Components/Form/index";
import styled from "../../typed-components";

const Container = styled.div`
    height: 100vh;
    background-color: ${props => props.theme.blueColor}
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const ExtendedExit = styled(Exit)`
  position: absolute;
  top: 10px;
  left: 10px;
`;

const Save = styled.input`
  position: absolute;
  top: 10px;
  right: 10px;
  border: 1px solid white;
  background-color: transparent;
  color: white;
  padding: 7px;
  cursor: pointer;
`;

const TextContainer = styled.div`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Text = styled.span`
  color: white;
  font-size: 16px;
  margin-bottom: 10px;
`;

const ExtendedForm = styled(Form)`
  width: 100%;
`;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 35px;
  width: 100%;
`;

const NicknameContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 35px;
  width: 100%;
`;

const GenderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
`;

const Gender = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`;

const Label = styled.span`
  color: white;
  font-size: 13px;
`;

const Data = styled(Input)`
  margin: 0;
  margin-top: 10px;
  color: ${props => props.theme.lightGreyColor};
  padding: 10px;
  width: 65%;
`;

interface IProps {
  data?: any;
  loading: boolean;
  photo: string;
  nickname: string;
  gender: string;
  onInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: any;
  uploading: boolean;
}

const InitialProfilePresenter: React.SFC<IProps> = ({
  data: { GetMyProfile: { user = null } = {} } = {},
  loading,
  photo,
  nickname,
  gender,
  onInputChange,
  onSubmit,
  uploading
}) => (
  <Container>
    <Helmet>
      <title>프로필 - We There</title>
    </Helmet>
    <ExtendedExit backTo={"/wethere-client/"} />
    <TextContainer>
      <Text>We There를 시작하기 전에</Text>
      <Text>간단한 프로필 설정을 하고 갈까요?</Text>
    </TextContainer>
    {!loading && user && (
      <ExtendedForm submitFn={onSubmit}>
        <ImageContainer>
          <PhotoInput
            uploading={uploading}
            fileUrl={photo}
            onChange={onInputChange}
          />
        </ImageContainer>
        <NicknameContainer>
          <Label>닉네임</Label>
          <Data
            value={nickname}
            name={"nickname"}
            type={"text"}
            onChange={onInputChange}
          />
        </NicknameContainer>
        <GenderContainer>
          <Gender>
            <Label>남　</Label>
            <input
              value={"MALE"}
              name={"gender"}
              type={"radio"}
              checked={gender === "MALE"}
              onChange={onInputChange}
            />
          </Gender>
          <Gender>
            <Label>여　</Label>
            <input
              value={"FEMALE"}
              name={"gender"}
              type={"radio"}
              checked={gender === "FEMALE"}
              onChange={onInputChange}
            />
          </Gender>
        </GenderContainer>
        <Save value={"SAVE"} type={"submit"} />
      </ExtendedForm>
    )}
  </Container>
);

export default InitialProfilePresenter;
