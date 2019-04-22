import React from "react";
import Helmet from "react-helmet";
import BackArrow from "../../Components/BackArrow";
import Button from "../../Components/Button";
import Input from "../../Components/Input";
import styled from "../../typed-components";

const Container = styled.div`
  height: 100vh;
  background-color: ${props => props.theme.blueColor};
  display: flex;
  flex-direction: column;
`;

const ExtendedBackArrow = styled(BackArrow)`
  position: absolute;
  left: 10px;
  top: 10px;
`;

const Title = styled.h1`
  margin: 70px 30px;
  text-align: center;
  font-size: 70px;
  color: white;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Text = styled.span`
  color: white;
  font-size: 11px;
  margin-left: 40px;
  margin-bottom: 10px;
`;

const ExtendedButton = styled(Button)`
  margin-top: 20px;
`;

const SignUpPresenter: React.SFC = () => (
  <Container>
    <Helmet>
      <title>회원가입 - We There</title>
    </Helmet>
    <ExtendedBackArrow backTo={"/"} />
    <Title>회원가입</Title>
    <Form>
      <Input placeholder={"아이디"} />
      <Text>* 아이디를 입력해주세요.</Text>
      <Input placeholder={"비밀번호"} type={"password"} />
      <Text>* 비밀번호는 숫자 및 특수문자 포함 8~16자로 입력해주세요.</Text>
      <Input placeholder={"핸드폰 번호"} />
      <Text>* 국가번호+핸드폰번호 (예: +8201012345678) 로 입력해주세요.</Text>
      <ExtendedButton />
    </Form>
  </Container>
);

export default SignUpPresenter;
