import React from "react";
import { MutationFn } from "react-apollo";
import Helmet from "react-helmet";
import BackArrow from "src/Components/BackArrow/BackArrow";
import Button from "src/Components/Button";
import Input from "src/Components/Input";
import Title from "src/Components/Title/Title";
import Form from "../../Components/Form/Form";
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

const Text = styled.div`
  color: white;
  font-size: 14px;
  margin-bottom: 15px;
  margin-top: 30px;
`;

const ExtendedInput = styled(Input)`
  width: 65%;
`;

const ExtendedButton = styled(Button)`
  width: 65%;
`;

interface IProps {
  verificationKey: string;
  onInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: MutationFn;
}

const PhoneVerificationPresenter: React.SFC<IProps> = ({
  verificationKey,
  onInputChange,
  onSubmit
}) => (
  <Container>
    <Helmet>
      <title>핸드폰 번호 인증 - We There</title>
    </Helmet>
    <ExtendedBackArrow backTo={"/wethere-client/signup"} />
    <Title text={"핸드폰 인증"} />
    <ExtendedForm submitFn={onSubmit}>
      <Text>문자로 받으신 인증 번호를 입력해주세요.</Text>
      <ExtendedInput
        name={"verificationKey"}
        value={verificationKey}
        onChange={onInputChange}
        type={"number"}
      />
      <ExtendedButton value={"확인"} />
    </ExtendedForm>
  </Container>
);

export default PhoneVerificationPresenter;
