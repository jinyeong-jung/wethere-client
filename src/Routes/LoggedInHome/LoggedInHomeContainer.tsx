import React from "react";
import { Query } from "react-apollo";
import { RouteComponentProps } from "react-router-dom";
import { USER_PROFILE } from "../../sharedQueries.queries";
import { getMyProfile } from "../../types/api";
import LoggedOutHomePresenter from "./LoggedInHomePresenter";

class ProfileQuery extends Query<getMyProfile> {}

class LoggedInHomeContainer extends React.Component<RouteComponentProps<any>> {
  public render() {
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
                  this.props.history.push("/verify-couple");
                }
              }
            }
          }
          return <LoggedOutHomePresenter />;
        }}
      </ProfileQuery>
    );
  }
}

export default LoggedInHomeContainer;
