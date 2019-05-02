import React from "react";
import Helmet from "react-helmet";
import { Link } from "react-router-dom";
import Title from "src/Components/Title";
import Button from "../../Components/Button";
import styled from "../../typed-components";

const Container = styled.div`
  height: 100vh;
  background-color: ${props => props.theme.blueColor};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Text = styled.div`
  color: white;
  font-size: 14px;
  margin-bottom: 10px;
`;

const ExtendedLink = styled(Link)`
  width: 60%;
  margin: 0px;
  margin-top: 50px;
`;

const ExtendedButton = styled(Button)`
  width: 100%;
  margin: 0px;
  background-color: ${props => props.theme.pinkColor};
  :active {
    transform: scale(0.99);
  }
`;

const WaitingCoupleVerificationPresenter: React.SFC = () => (
  <Container>
    <Helmet>
      <title>커플 인증 대기 - We There</title>
    </Helmet>
    <Title text={"커플 인증 대기중"} />
    <Text>파트너가 인증 번호를 입력하기를</Text>
    <Text>기다리고 있습니다.</Text>
    <Text />
    <Text>인증이 완료되면 메인 화면으로 이동합니다.</Text>
    <ExtendedLink to={"/wethere-client/verify-couple/request"}>
      <ExtendedButton value={"인증 번호 다시 보내기"} />
    </ExtendedLink>
  </Container>
);

export default WaitingCoupleVerificationPresenter;
