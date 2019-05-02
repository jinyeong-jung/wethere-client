import React from "react";
import { Mutation } from "react-apollo";
import { RouteComponentProps } from "react-router-dom";
import { toast } from "react-toastify";
import { signUpEnd, signUpEndVariables } from "src/types/api";
import PhoneVerificationPresenter from "./PhoneVerificationPresenter";
import { SIGN_UP_END } from "./PhoneVerificationQueries.queries";

interface IState {
  verificationKey: string;
  phoneNumber: string;
}

interface IProps extends RouteComponentProps<any> {}

class SignUpEndMutation extends Mutation<signUpEnd, signUpEndVariables> {}

class PhoneVerificationContainer extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    if (!props.location.state) {
      props.history.push("/wethere-client/");
    }
    this.state = {
      phoneNumber: props.location.state.phoneNumber,
      verificationKey: ""
    };
  }
  public render() {
    const { verificationKey, phoneNumber } = this.state;
    return (
      <SignUpEndMutation
        mutation={SIGN_UP_END}
        variables={{ key: verificationKey, phoneNumber }}
        onCompleted={data => {
          const { SignUpEnd } = data;
          if (SignUpEnd.ok) {
            toast("회원가입이 완료되었습니다.");
            setTimeout(() => {
              this.props.history.push("/wethere-client/login");
            }, 3000);
          } else {
            toast(SignUpEnd.error);
          }
        }}
      >
        {signUpEndMutation => {
          return (
            <PhoneVerificationPresenter
              verificationKey={verificationKey}
              onInputChange={this.onInputChange}
              onSubmit={signUpEndMutation}
            />
          );
        }}
      </SignUpEndMutation>
    );
  }

  public onInputChange: React.ChangeEventHandler<HTMLInputElement> = event => {
    const {
      target: { name, value }
    } = event;
    this.setState({
      [name]: value
    } as any);
  };
}

export default PhoneVerificationContainer;
