import React from "react";
import Helmet from "react-helmet";
import { Link } from "react-router-dom";
import Button from "../../Components/Button/index";
import Title from "../../Components/Title/Title";
import styled from "../../typed-components";

const Container = styled.div`
  background-color: ${props => props.theme.blueColor};
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Text = styled.div`
  color: white;
  margin-bottom: 10px;
  font-size: 14px;
`;

const ExtendedButton = styled(Button)`
  margin:0px  
  margin-top: 20px;
  background-color: ${props => props.theme.pinkColor}
  width: 250px;
  :active {
    transform: scale(0.99)
  }
`;

const CoupleVerificationPresenter: React.SFC = () => (
  <Container>
    <Helmet>
      <title>커플 인증 - We There</title>
    </Helmet>
    <Title text={"Hello, There!"} />
    <Text>We There 서비스를 사용하려면,</Text>
    <Text>먼저 커플로 등록해야 합니다.</Text>
    <Text />
    <Text>파트너에게 인증 번호를 보내</Text>
    <Text>서로를 커플로 등록하세요 💕</Text>
    <Text />
    <Text />
    <Link to={"/verify-couple/request"}>
      <ExtendedButton value={"파트너에게 인증 번호 보내기"} />
    </Link>
    <Link to={"/verify-couple/complete"}>
      <ExtendedButton value={"파트너가 보낸 인증 번호 입력하기"} />
    </Link>
  </Container>
);

export default CoupleVerificationPresenter;
