import React from "react";
import { Query } from "react-apollo";
import { getMyProfile } from "src/types/api";
import { USER_PROFILE } from "../../sharedQueries.queries";
import MenuPresenter from "./MenuPresenter";

class ProfileQuery extends Query<getMyProfile> {}

class MenuContainer extends React.Component {
  public render() {
    return (
      <ProfileQuery query={USER_PROFILE} fetchPolicy={"cache-and-network"}>
        {({ data, loading }) => <MenuPresenter data={data} loading={loading} />}
      </ProfileQuery>
    );
  }
}

export default MenuContainer;
