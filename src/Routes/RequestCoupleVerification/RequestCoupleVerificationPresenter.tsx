import React from "react";
import { MutationFn } from "react-apollo";
import Helmet from "react-helmet";
import BackArrow from "src/Components/BackArrow/BackArrow";
import Button from "src/Components/Button";
import Input from "src/Components/Input";
import Title from "src/Components/Title";
import Form from "../../Components/Form/index";
import styled from "../../typed-components";

const Container = styled.div`
  height: 100vh;
  background-color: ${props => props.theme.blueColor};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ExtendedBackarrow = styled(BackArrow)`
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
  margin-bottom: 15px;
`;

const ExtendedInput = styled(Input)`
  width: 65%;
  ::placeholder {
    font-size: 13px;
    color: ${props => props.theme.lightGreyColor};
  }
`;

const ExtendedButton = styled(Button)`
  width: 65%;\
  background-color: ${props => props.theme.pinkColor}
  :active {
    transform: scale(0.99);
  }
`;

interface IProps {
  partnerPhoneNumber: string;
  onInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: MutationFn;
}

const RequestCoupleVerificationPresenter: React.SFC<IProps> = ({
  partnerPhoneNumber,
  onInputChange,
  onSubmit
}) => (
  <Container>
    <Helmet>
      <title>인증 번호 보내기 - We There</title>
    </Helmet>
    <ExtendedBackarrow backTo={"/verify-couple"} />
    <Title text={"인증 번호 전송"} />
    <ExtendedForm submitFn={onSubmit}>
      <Text>파트너의 핸드폰 번호를 입력하세요.</Text>
      <Text>(예: +8201012345678)</Text>
      <ExtendedInput
        value={partnerPhoneNumber}
        name={"partnerPhoneNumber"}
        onChange={onInputChange}
        placeholder={"국가번호+전화번호"}
      />
      <ExtendedButton value={"인증 번호 보내기"} />
    </ExtendedForm>
  </Container>
);

export default RequestCoupleVerificationPresenter;
