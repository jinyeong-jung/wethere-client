import React from "react";
import { MutationFn } from "react-apollo";
import Helmet from "react-helmet";
import BackArrow from "src/Components/BackArrow/index";
import Button from "src/Components/Button";
import Form from "src/Components/Form/index";
import Input from "src/Components/Input";
import Title from "src/Components/Title";
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

const ExtendedForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const Text = styled.span`
  color: white;
  font-size: 14px;
  margin-bottom: 7px;
`;

const ExtendedInput = styled(Input)`
  width: 65%;
  margin-bottom: 35px;
  ::placeholder {
    font-size: 13px;
    color: ${props => props.theme.lightGreyColor};
  }
`;

const ExtendedButton = styled(Button)`
  width: 65%;
  margin: 0px;
  margin-top: 40px;
  background-color: ${props => props.theme.pinkColor};
  :active {
    transform: scale(0.99);
  }
`;

interface IProps {
  phoneNumber: string;
  verificationKey: string;
  onInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: MutationFn;
}

const CompleteCoupleVerificationPresenter: React.SFC<IProps> = ({
  phoneNumber,
  verificationKey,
  onInputChange,
  onSubmit
}) => (
  <Container>
    <Helmet>
      <title>인증 번호 입력하기 - We There</title>
    </Helmet>
    <ExtendedBackArrow backTo={"/verify-couple"} />
    <Title text={"인증번호 입력"} />
    <ExtendedForm submitFn={onSubmit}>
      <Text>본인의 핸드폰 번호 (국가번호+전화번호)</Text>
      <ExtendedInput
        value={phoneNumber}
        name={"phoneNumber"}
        onChange={onInputChange}
        placeholder={"예: +8201087059281"}
      />
      <Text>문자로 받으신 커플 인증 번호를 입력하세요.</Text>
      <ExtendedInput
        value={verificationKey}
        name={"verificationKey"}
        onChange={onInputChange}
        type={"number"}
      />
      <ExtendedButton value={"커플 인증하기"} />
    </ExtendedForm>
  </Container>
);

export default CompleteCoupleVerificationPresenter;
