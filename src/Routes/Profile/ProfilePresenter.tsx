import React from "react";
import Helmet from "react-helmet";
import BackArrow from "src/Components/BackArrow/BackArrow";
import Button from "src/Components/Button";
import Form from "src/Components/Form/index";
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
  padding-top: 40px;
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

const NicknameInput = styled.input`
  margin-bottom: 15px;
  border: none;
  background-color: transparent;
  border-bottom: 1px solid white;
  color: white;
  text-align: center;
  padding: 5px;
  font-family: "Noto Sans KR", sans-serif;
  font-size: 15px;
  transition: all 0.2s ease-in-out;
  :focus {
    border-bottom: 1px solid ${props => props.theme.yellowColor};
    color: ${props => props.theme.yellowColor};
  }
`;

const Genders = styled.div`
  display: flex;
  justify-content: center;
`;

const Gender = styled.span`
  padding: 5px 7px;
  display: flex;
  justify-content: center;
`;

const GenderLabel = styled.span`
  font-size: 14px;
`;

const RadioInput = styled.input``;

const StatusContainer = styled.div`
  margin-top: 20px;
`;

const StatusTitle = styled.div`
  color: white;
  text-align: center;
  margin-bottom: 10px;
`;

const Status = styled.div`
  margin-bottom: 3px;
  display: flex;
  align-items: center;
`;

const StatusLabel = styled.span`
  font-size: 14px;
  color: white;
  font-weight: 300;
`;

const ExtendedButton = styled(Button)`
  background-color: ${props => props.theme.pinkColor};
  width: 65%;
  margin-top: 30px;
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
        <NicknameInput
          name={"nickname"}
          value={nickname}
          onChange={onInputChange}
        />
        <Genders>
          <Gender>
            <GenderLabel>🧑</GenderLabel>
            <RadioInput
              type="radio"
              name="gender"
              value={"MALE"}
              onChange={onInputChange}
              checked={gender === "MALE"}
            />
          </Gender>
          <Gender>
            <GenderLabel>👩</GenderLabel>
            <RadioInput
              type="radio"
              name="gender"
              value={"FEMALE"}
              onChange={onInputChange}
              checked={gender === "FEMALE"}
            />
          </Gender>
        </Genders>

        <StatusContainer>
          <StatusTitle>지금 내 상태?</StatusTitle>
          <Status>
            <RadioInput
              type="radio"
              name="status"
              value={"HAPPY"}
              onChange={onInputChange}
              checked={status === "HAPPY"}
            />
            <StatusLabel>😁 행복행복</StatusLabel>
          </Status>

          <Status>
            <RadioInput
              type="radio"
              name="status"
              value={"DEPRESSED"}
              onChange={onInputChange}
              checked={status === "DEPRESSED"}
            />
            <StatusLabel>😢 우울해요</StatusLabel>
          </Status>

          <Status>
            <RadioInput
              type="radio"
              name="status"
              value={"MAD"}
              onChange={onInputChange}
              checked={status === "MAD"}
            />
            <StatusLabel>😤 화가 난다</StatusLabel>
          </Status>

          <Status>
            <RadioInput
              type="radio"
              name="status"
              value={"ENERGIZED"}
              onChange={onInputChange}
              checked={status === "ENERGIZED"}
            />
            <StatusLabel>🤩 에너지 뿜뿜</StatusLabel>
          </Status>

          <Status>
            <RadioInput
              type="radio"
              name="status"
              value={"UNCERTAIN"}
              onChange={onInputChange}
              checked={status === "UNCERTAIN"}
            />
            <StatusLabel>🤐 모르겠당</StatusLabel>
          </Status>

          <Status>
            <RadioInput
              type="radio"
              name="status"
              value={"PEACEFUL"}
              onChange={onInputChange}
              checked={status === "PEACEFUL"}
            />
            <StatusLabel>😊 평화롭구나</StatusLabel>
          </Status>

          <Status>
            <RadioInput
              type="radio"
              name="status"
              value={"CONFUSED"}
              onChange={onInputChange}
              checked={status === "CONFUSED"}
            />
            <StatusLabel>😖 혼돈의 카오스</StatusLabel>
          </Status>
        </StatusContainer>

        <ExtendedButton value={"프로필 변경"} />
      </ExtendedForm>
    )}
  </Container>
);

export default ProfilePresenter;
