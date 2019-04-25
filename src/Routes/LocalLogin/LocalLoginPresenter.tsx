import React from "react";
import { MutationFn } from "react-apollo";
import Helmet from "react-helmet";
import BackArrow from "../../Components/BackArrow/index";
import Button from "../../Components/Button";
import Form from "../../Components/Form";
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

const ExtendedForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Text = styled.span`
  color: white;
  font-size: 13px;
  margin-bottom: 8px;
`;

const ExtendedInput = styled(Input)`
  width: 65%;
  margin-bottom: 30px;
`;

const ExtendedButton = styled(Button)`
  width: 65%;
  :active {
    transform: scale(0.99);
  }
`;

interface IProps {
  username: string;
  password: string;
  onInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: MutationFn;
}

const LocalLoginPresenter: React.SFC<IProps> = ({
  username,
  password,
  onInputChange,
  onSubmit
}) => (
  <Container>
    <Helmet>
      <title>로그인 - We There</title>
    </Helmet>
    <ExtendedBackArrow backTo={"/"} />
    <Title text={"로그인"} />
    <ExtendedForm submitFn={onSubmit}>
      <Text>아이디</Text>
      <ExtendedInput
        value={username}
        name={"username"}
        onChange={onInputChange}
      />
      <Text>비밀번호</Text>
      <ExtendedInput
        value={password}
        name={"password"}
        onChange={onInputChange}
        type={"password"}
      />
      <ExtendedButton value={"로그인"} />
    </ExtendedForm>
  </Container>
);

export default LocalLoginPresenter;
