import React from "react";
import Helmet from "react-helmet";
import BackArrow from "src/Components/BackArrow";
import Title from "src/Components/Title";
import styled from "../../typed-components";

const Container = styled.div`
  height: 100vh;
  background-color: ${props => props.theme.blueColor};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ExtendedBackArrow = styled(BackArrow)`
  position: absolute;
  top: 10px;
  left: 10px;
`;

const Button = styled.button`
    border: 1px solid white;
    background-color: transparent;
    padding: 10px; 20px;
    color: white;
    font-family: 'Noto Sans KR', sans-serif;
    width: 50%;
    margin-bottom: 20px;
    cursor: pointer;
`;

interface IProps {
  profileClick: any;
  passwordClick: any;
  logoutClick: any;
  widthdrawClick: any;
}

const SettingsPresenter: React.SFC<IProps> = ({
  profileClick,
  passwordClick,
  logoutClick,
  widthdrawClick
}) => (
  <Container>
    <Helmet>
      <title>설정 - We There</title>
    </Helmet>
    <ExtendedBackArrow backTo={"/"} />
    <Title text={"설정"} />
    <Button onClick={profileClick}>프로필 설정</Button>
    <Button onClick={passwordClick}>비밀번호 변경</Button>
    <Button onClick={logoutClick}>로그아웃</Button>
    <Button onClick={widthdrawClick}>회원 탈퇴</Button>
  </Container>
);

export default SettingsPresenter;
