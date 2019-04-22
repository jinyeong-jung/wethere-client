import React from "react";
import { RouteComponentProps } from "react-router-dom";
import { toast } from "react-toastify";
import SignUpPresenter from "./SignUpPresenter";

interface IState {
  username: string;
  password: string;
  phoneNumber: string;
}

class SignUpContainer extends React.Component<
  RouteComponentProps<any>,
  IState
> {
  public state = {
    password: "",
    phoneNumber: "",
    username: ""
  };
  public render() {
    const { password, phoneNumber, username } = this.state;
    return (
      <SignUpPresenter
        password={password}
        phoneNumber={phoneNumber}
        username={username}
        onInputChange={this.onInputChange}
        onSubmit={this.onSubmit}
      />
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
    const { username, password, phoneNumber } = this.state;
    const isValid = /([+]?\d{1,4}?)?(\d{3,4}[.-]?){2}\d{4}/.test(phoneNumber);
    if (isValid) {
      // signup mutation
      console.log(username, password, phoneNumber);
    } else {
      toast("핸드폰 번호를 형식에 맞춰 입력해주세요.");
    }
  };
}

export default SignUpContainer;
