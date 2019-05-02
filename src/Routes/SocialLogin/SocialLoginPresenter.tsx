import React from "react";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import GoogleLogin from "react-google-login";
import Helmet from "react-helmet";
import BackArrow from "src/Components/BackArrow/BackArrow";
import Title from "src/Components/Title";
import styled from "../../typed-components";

const FB_COLOR = "#365899";
const GG_COLOR = "#ea4335";

const Container = styled.div`
  height: 100vh;
  background-color: ${props => props.theme.blueColor};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ExtendedBackArrow = styled(BackArrow)`
  position: absolute;
  left: 10px;
  top: 10px;
`;

const Link = styled.button`
  border: none;
  border-radius: 15px;
  cursor: pointer;
  background-color: ${props => props.bgColor};
  padding: 15px;
  width: 70%;
  font-family: "Noto Sans KR", sans-serif;
  color: white;
  box-shadow: 0px 4px 3px 0px rgba(0, 0, 0, 0.1);
  margin-bottom: 15px;
`;

interface IProps {
  fbLoginCallback: (response: any) => void;
  googleLoginCallback: (response: any) => void;
}

const SocialLoginPresenter: React.SFC<IProps> = ({
  fbLoginCallback,
  googleLoginCallback
}) => (
  <Container>
    <Helmet>
      <title>소셜 로그인 - We There</title>
    </Helmet>
    <ExtendedBackArrow backTo={"/"} />
    <Title text={"소셜 로그인"} />
    <FacebookLogin
      appId="445729162863444"
      autoload={false}
      fields="name"
      callback={fbLoginCallback}
      render={renderProps => (
        <Link bgColor={FB_COLOR} onClick={renderProps.onClick}>
          페이스북으로 로그인하기
        </Link>
      )}
    />
    <GoogleLogin
      clientId="826966891182-arje97he725i9eoqt890om1qcji0rkbu.apps.googleusercontent.com"
      onSuccess={googleLoginCallback}
      onFailure={googleLoginCallback}
      render={renderProps => (
        <Link bgColor={GG_COLOR} onClick={renderProps!.onClick}>
          구글 아이디로 로그인하기
        </Link>
      )}
    />
  </Container>
);

export default SocialLoginPresenter;
