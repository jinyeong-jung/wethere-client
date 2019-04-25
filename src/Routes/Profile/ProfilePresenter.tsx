import React from "react";
import Helmet from "react-helmet";
import BackArrow from "src/Components/BackArrow/BackArrow";
import Button from "src/Components/Button";
import Form from "src/Components/Form/index";
import Input from "src/Components/Input";
import PhotoInput from "src/Components/PhotoInput";
import Title from "src/Components/Title";
import { getMyProfile } from "src/types/api";
import styled from "../../typed-components";

const Container = styled.div`
  height: 100vh;
  background-color: ${props => props.theme.blueColor};
  display: flex;
  flex-direction: column;
`;

const ExtendedBackArrow = styled(BackArrow)`
  position: absolute;
  top: 10px;
  left: 10px;
`;

const ExtendedTitle = styled(Title)`
  padding-bottom: 30px;
`;

const ExtendedForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const ImageContainer = styled.div`
  margin-bottom: 15px;
`;

const ExtendedInput = styled(Input)`
  padding: 7px 20px;
  width: 65%;
  margin-bottom: 15px;
`;

const RadioInput = styled.input``;

const StatusContainer = styled.div`
  margin: 10px;
`;

const ExtendedButton = styled(Button)`
  background-color: ${props => props.theme.pinkColor};
  width: 65%;
  :active {
    transform: scale(0.99);
  }
`;

interface IProps {
  data?: getMyProfile;
  loading: boolean;
  photo: string;
  nickname: string;
  gender: string;
  status: string;
  onInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: any;
  uploading: boolean;
}

const ProfilePresenter: React.SFC<IProps> = ({
  data: { GetMyProfile: { user = null } = {} } = {},
  loading,
  photo,
  nickname,
  gender,
  status,
  onInputChange,
  onSubmit,
  uploading
}) => (
  <Container>
    <Helmet>
      <title>프로필 - We There</title>
    </Helmet>
    <ExtendedBackArrow backTo={"/"} />
    <ExtendedTitle text={"프로필"} />
    {!loading && user && (
      <ExtendedForm submitFn={onSubmit}>
        <ImageContainer>
          <PhotoInput
            uploading={uploading}
            fileUrl={photo}
            onChange={onInputChange}
          />
        </ImageContainer>
        <ExtendedInput
          name={"nickname"}
          value={nickname}
          onChange={onInputChange}
        />
        <RadioInput
          type="radio"
          name="gender"
          value={"MALE"}
          onChange={onInputChange}
          checked={gender === "MALE"}
        />
        <RadioInput
          type="radio"
          name="gender"
          value={"FEMALE"}
          onChange={onInputChange}
          checked={gender === "FEMALE"}
        />
        <StatusContainer>{status}</StatusContainer>

        <ExtendedButton value={"프로필 변경"} />
      </ExtendedForm>
    )}
  </Container>
);

export default ProfilePresenter;
