import React from "react";
import { Mutation, MutationFn } from "react-apollo";
import { RouteComponentProps } from "react-router";
import { toast } from "react-toastify";
import { LOG_USER_IN } from "../../localSharedQueries";
import { facebookLogin, facebookLoginVariables } from "../../types/api";
import SocialLoginPresenter from "./SocialLoginPresenter";
import { FACEBOOK_LOGIN } from "./SocialLoginQueries.queries";

class FacebookLoginMutation extends Mutation<
  facebookLogin,
  facebookLoginVariables
> {}

interface IState {
  fbId: string;
  fbName: string;
}

interface IProps extends RouteComponentProps<any> {}

class SocialLoginContainer extends React.Component<IProps, IState> {
  public facebookMutation: MutationFn;
  public state = {
    fbId: "",
    fbName: ""
  };
  public render() {
    return (
      <Mutation mutation={LOG_USER_IN}>
        {logUserIn => (
          <FacebookLoginMutation
            mutation={FACEBOOK_LOGIN}
            onCompleted={data => {
              const { FacebookLogin } = data;
              if (FacebookLogin.ok) {
                if (FacebookLogin.token) {
                  logUserIn({
                    variables: {
                      token: FacebookLogin.token
                    }
                  });
                }
              } else {
                toast(FacebookLogin.error);
              }
            }}
          >
            {fbMutation => {
              this.facebookMutation = fbMutation;
              return (
                <SocialLoginPresenter fbLoginCallback={this.fbLoginCallback} />
              );
            }}
          </FacebookLoginMutation>
        )}
      </Mutation>
    );
  }
  public fbLoginCallback = response => {
    const { accessToken, id, name } = response;
    if (accessToken) {
      toast(`안녕하세요, ${name}님 🦄`);
      this.facebookMutation({
        variables: {
          facebookId: id,
          name
        }
      });
    } else {
      toast("로그인에 실패하였습니다 😢");
    }
  };
}

export default SocialLoginContainer;
