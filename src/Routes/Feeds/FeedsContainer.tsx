import React from "react";
import { Query } from "react-apollo";
import { RouteComponentProps } from "react-router-dom";
import { USER_PROFILE } from "../../sharedQueries.queries";
import { getFeeds, getMyProfile } from "../../types/api";
import FeedsPresenter from "./FeedsPresenter";
import { GET_ALL_FEEDS } from "./FeedsQueries.queries";

class ProfileQuery extends Query<getMyProfile> {}

class GetFeedsQuery extends Query<getFeeds> {}

class FeedsContainer extends React.Component<RouteComponentProps> {
  public render() {
    return (
      <GetFeedsQuery query={GET_ALL_FEEDS} fetchPolicy={"cache-and-network"}>
        {({ data: feedsData, loading }) => (
          <ProfileQuery query={USER_PROFILE}>
            {({ data: profileData }) => (
              <FeedsPresenter
                profileData={profileData}
                loading={loading}
                feedsData={feedsData}
                handleFeedClick={this.handleFeedClick}
              />
            )}
          </ProfileQuery>
        )}
      </GetFeedsQuery>
    );
  }

  public handleFeedClick = (feedId: number) => {
    this.props.history.push(`/wethere-client/feeds/detail/${feedId}`);
  };
}

export default FeedsContainer;
