import React from "react";
import { Mutation, MutationFn } from "react-apollo";
import { RouteComponentProps } from "react-router-dom";
import { toast } from "react-toastify";
import { signUpStart, signUpStartVariables } from "src/types/api";
import SignUpPresenter from "./SignUpPresenter";
import { SIGN_UP_START } from "./SignUpQueries.queries";

interface IState {
  username: string;
  password: string;
  phoneNumber: string;
}

class SignUpStartMutation extends Mutation<signUpStart, signUpStartVariables> {}

class SignUpContainer extends React.Component<
  RouteComponentProps<any>,
  IState
> {
  public signUpMutation: MutationFn;
  public state = {
    password: "",
    phoneNumber: "",
    username: ""
  };
  public render() {
    const { history } = this.props;
    const { password, phoneNumber, username } = this.state;
    return (
      <SignUpStartMutation
        mutation={SIGN_UP_START}
        variables={{ username, password, phoneNumber }}
        onCompleted={data => {
          const { SignUpStart } = data;
          if (SignUpStart.ok) {
            toast("💌 핸드폰 인증 번호를 확인해주세요!");
            setTimeout(() => {
              history.push({
                pathname: "/signup/verify-phone",
                state: {
                  phoneNumber
                }
              });
            }, 3000);
          } else {
            toast(SignUpStart.error);
          }
        }}
      >
        {signUpMutation => {
          this.signUpMutation = signUpMutation;
          return (
            <SignUpPresenter
              password={password}
              phoneNumber={phoneNumber}
              username={username}
              onInputChange={this.onInputChange}
              onSubmit={this.onSubmit}
            />
          );
        }}
      </SignUpStartMutation>
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
  public onSubmit: React.FormEventHandler<HTMLFormElement> = event => {
    event.preventDefault();
    const { phoneNumber } = this.state;
    const isValid = /([+]?\d{1,4}?)?(\d{3,4}[.-]?){2}\d{4}/.test(phoneNumber);
    if (isValid) {
      this.signUpMutation();
    } else {
      toast("핸드폰 번호를 형식에 맞춰 입력해주세요.");
    }
  };
}

export default SignUpContainer;
