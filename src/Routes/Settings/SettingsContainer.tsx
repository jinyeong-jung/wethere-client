import React from "react";
import { Mutation } from "react-apollo";
import { RouteComponentProps } from "react-router";
import { toast } from "react-toastify";
import { LOG_USER_OUT } from "../../localSharedQueries";
import SettingsPresenter from "./SettingsPresenter";

class SettingsContainer extends React.Component<RouteComponentProps<any>> {
  public render() {
    return (
      <Mutation mutation={LOG_USER_OUT}>
        {logUserOut => (
          <SettingsPresenter
            profileClick={this.profileClick}
            passwordClick={this.passwordClick}
            logoutClick={() => {
              toast("로그아웃 되었습니다.");
              setTimeout(() => {
                logUserOut();
              }, 3000);
            }}
            widthdrawClick={this.widthdrawClick}
          />
        )}
      </Mutation>
    );
  }

  public profileClick = () => {
    this.props.history.push("/profile");
  };
  public passwordClick = () => {
    toast("🔨현재 준비중인 기능입니다");
  };
  public widthdrawClick = () => {
    toast("🔨현재 준비중인 기능입니다");
  };
}

export default SettingsContainer;
