import React, { Fragment } from "react";
import Helmet from "react-helmet";
import { RouteComponentProps } from "react-router";
import { Link } from "react-router-dom";
import styled from "../../typed-components";

const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-color: ${props => props.theme.blueColor};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Header = styled.header`
  padding: 70px 30px;
  color: white;
  font-size: 100px;
  font-family: "Do Hyeon", sans-serif;
`;

const Footer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const ExtendedLink = styled(Link)`
  width: 70%;
`;

const Button = styled.button`
  border: none;
  background-color: rgba(255, 255, 255, 0.85);
  border-radius: 20px;
  width: 100%;
  height: 40px;
  cursor: pointer;
  margin-bottom: 20px;
  box-shadow: 0px 4px 3px 0px rgba(0, 0, 0, 0.1);
  text-align: center;
  font-size: 13px;
  font-family: "Noto Sans KR", sans-serif;
  color: ${props => props.theme.greyColor}
  transition: all 0.1s ease-in-out
  :hover {
    background-color: #ffe869;
    color: white;
    font-weight: 600;
  }
`;

interface IProps extends RouteComponentProps<any> {}

const LoggedOutHomePresenter: React.SFC<IProps> = () => (
  <Fragment>
    <Container>
      <Helmet>
        <title>We There</title>
      </Helmet>
      <Header>WE THERE</Header>
      <Footer>
        <ExtendedLink to={"/wethere-client/signup"}>
          <Button>새로 가입하기 👨‍👩‍👧</Button>
        </ExtendedLink>
        <ExtendedLink to={"/wethere-client/login"}>
          <Button>아이디로 로그인하기 🎶</Button>
        </ExtendedLink>
        <ExtendedLink to={"/wethere-client/social-login"}>
          <Button>소셜 로그인하기 💌</Button>
        </ExtendedLink>
      </Footer>
    </Container>
  </Fragment>
);

export default LoggedOutHomePresenter;
