import React from "react";
import { Mutation } from "react-apollo";
import { RouteComponentProps } from "react-router-dom";
import { toast } from "react-toastify";
import { localLogin } from "src/types/api";
import { LOG_USER_IN } from "../../localSharedQueries";
import { localLoginVariables } from "../../types/api";
import LocalLoginPresenter from "./LocalLoginPresenter";
import { LOCAL_LOGIN } from "./LocalLoginQueries.queries";

interface IState {
  username: string;
  password: string;
}

class LoginMutation extends Mutation<localLogin, localLoginVariables> {}

class LocalLoginContainer extends React.Component<
  RouteComponentProps<any>,
  IState
> {
  public state = {
    password: "",
    username: ""
  };
  public render() {
    const { username, password } = this.state;
    return (
      <Mutation mutation={LOG_USER_IN}>
        {logUserIn => (
          <LoginMutation
            mutation={LOCAL_LOGIN}
            variables={{ username, password }}
            onCompleted={data => {
              const { Login } = data;
              if (Login.ok) {
                if (Login.token) {
                  logUserIn({
                    variables: {
                      token: Login.token
                    }
                  });
                }
                toast(`안녕하세요! 오늘도 반가워요 🦄`);
              } else {
                toast(Login.error);
              }
            }}
          >
            {localLoginMutation => {
              return (
                <LocalLoginPresenter
                  username={username}
                  password={password}
                  onInputChange={this.onInputChange}
                  onSubmit={localLoginMutation}
                />
              );
            }}
          </LoginMutation>
        )}
      </Mutation>
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

export default LocalLoginContainer;
