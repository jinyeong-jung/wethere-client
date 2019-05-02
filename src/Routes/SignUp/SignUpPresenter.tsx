import React from "react";
import Helmet from "react-helmet";
import BackArrow from "../../Components/BackArrow";
import Button from "../../Components/Button";
import Input from "../../Components/Input";
import Title from "../../Components/Title/Title";
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

interface IProps {
  password: string;
  phoneNumber: string;
  username: string;
  onInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

const SignUpPresenter: React.SFC<IProps> = ({
  password,
  phoneNumber,
  username,
  onInputChange,
  onSubmit
}) => (
  <Container>
    <Helmet>
      <title>회원가입 - We There</title>
    </Helmet>
    <ExtendedBackArrow backTo={"/wethere-client/"} />
    <Title text={"회원가입"} />
    <Form onSubmit={onSubmit}>
      <Input
        placeholder={"아이디"}
        name={"username"}
        value={username}
        required={true}
        onChange={onInputChange}
      />
      <Text>* 아이디를 입력해주세요.</Text>
      <Input
        placeholder={"비밀번호"}
        type={"password"}
        name={"password"}
        value={password}
        required={true}
        onChange={onInputChange}
      />
      <Text>* 비밀번호는 숫자 및 특수문자 포함 8~16자로 입력해주세요.</Text>
      <Input
        placeholder={"핸드폰 번호"}
        name={"phoneNumber"}
        value={phoneNumber}
        required={true}
        onChange={onInputChange}
      />
      <Text>* 국가번호+핸드폰번호 (예: +8201012345678) 로 입력해주세요.</Text>
      <Button value={"핸드폰 번호 인증하기"} />
    </Form>
  </Container>
);

export default SignUpPresenter;
