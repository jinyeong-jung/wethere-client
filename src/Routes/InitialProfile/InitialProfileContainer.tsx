import React from "react";
import { Query } from "react-apollo";
import { USER_PROFILE } from "../../sharedQueries.queries";
import { getMyProfile } from "../../types/api";
import InitialProfilePresenter from "./InitialProfilePresenter";

class ProfileQuery extends Query<getMyProfile> {}

class InitialProfileContainer extends React.Component {
  public render() {
    return (
      <ProfileQuery query={USER_PROFILE}>
        {({ data, loading }) => {
          return <InitialProfilePresenter loading={loading} data={data} />;
        }}
      </ProfileQuery>
    );
  }
}

export default InitialProfileContainer;
