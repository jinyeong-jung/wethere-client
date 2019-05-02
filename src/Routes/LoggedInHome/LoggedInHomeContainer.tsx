import React from "react";
import { Query } from "react-apollo";
import { RouteComponentProps } from "react-router-dom";
import { USER_PROFILE } from "../../sharedQueries.queries";
import { getMyProfile } from "../../types/api";
import LoggedOutHomePresenter from "./LoggedInHomePresenter";

class ProfileQuery extends Query<getMyProfile> {}

interface IState {
  isMenuOpen: boolean;
}

interface IProps extends RouteComponentProps<any> {}

class LoggedInHomeContainer extends React.Component<IProps, IState> {
  public state = {
    isMenuOpen: false
  };
  public render() {
    const { isMenuOpen } = this.state;
    return (
      <ProfileQuery query={USER_PROFILE}>
        {profileData => {
          if (profileData) {
            if (profileData.data) {
              if (profileData.data.GetMyProfile) {
                const {
                  GetMyProfile: { user }
                } = profileData.data;
                if (!user!.verifiedCouple) {
                  this.props.history.push("/wethere-client/verify-couple");
                }
              }
            }
          }
          return (
            <LoggedOutHomePresenter
              isMenuOpen={isMenuOpen}
              toggleMenu={this.toggleMenu}
            />
          );
        }}
      </ProfileQuery>
    );
  }
  public toggleMenu = () => {
    this.setState(prevState => {
      return {
        isMenuOpen: !prevState.isMenuOpen
      };
    });
  };
}

export default LoggedInHomeContainer;
