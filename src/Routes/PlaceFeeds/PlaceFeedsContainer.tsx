import React from "react";
import { Query } from "react-apollo";
import { RouteComponentProps } from "react-router-dom";
import { USER_PROFILE } from "../../sharedQueries.queries";
import {
  getPlaceFeeds,
  getPlaceFeedsVariables,
  placeDetail,
  placeDetailVariables
} from "../../types/api";
import { getMyProfile } from "../../types/api";
import { PLACE_DETAIL } from "../DeletePlace/DeletePlaceQueries.queries";
import PlaceFeedsPresenter from "./PlaceFeedsPresenter";
import { PLACE_FEEDS } from "./PlaceFeedsQueries.queries";

class PlaceQuery extends Query<placeDetail, placeDetailVariables> {}
class FeedsQuery extends Query<getPlaceFeeds, getPlaceFeedsVariables> {}
class ProfileQuery extends Query<getMyProfile> {}

interface IState {
  placeId: number;
  placeName: string;
  placeAddress: string;
}

class PlaceFeedsContainer extends React.Component<
  RouteComponentProps<any>,
  IState
> {
  public render() {
    const {
      match: { params }
    } = this.props;
    const placeId = Number(Object.values(params)[0]);
    return (
      <PlaceQuery
        query={PLACE_DETAIL}
        variables={{ placeId }}
        onCompleted={data => {
          const { PlaceDetail } = data;
          if (PlaceDetail.ok) {
            if (PlaceDetail.place) {
              const { name, address } = PlaceDetail.place;
              this.setState({
                placeAddress: address,
                placeId,
                placeName: name
              });
            }
          }
        }}
      >
        {({ data: placeData, loading: placeLoading }) => {
          return (
            <FeedsQuery
              query={PLACE_FEEDS}
              fetchPolicy={"cache-and-network"}
              variables={{ placeId }}
            >
              {({ data: feedData, loading: feedLoading }) => {
                return (
                  <ProfileQuery query={USER_PROFILE}>
                    {({ data: userData }) => (
                      <PlaceFeedsPresenter
                        placeData={placeData}
                        placeLoading={placeLoading}
                        feedData={feedData}
                        feedLoading={feedLoading}
                        userData={userData}
                        handleFeedClick={this.handleFeedClick}
                        handleWriteClick={this.handleWriteClick}
                      />
                    )}
                  </ProfileQuery>
                );
              }}
            </FeedsQuery>
          );
        }}
      </PlaceQuery>
    );
  }
  public handleFeedClick = (feedId: number) => {
    this.props.history.push(`/wethere-client/feeds/detail/${feedId}`);
  };
  public handleWriteClick = () => {
    const { placeId, placeAddress, placeName } = this.state;
    this.props.history.push(`/wethere-client/feeds/${placeId}/add`, {
      placeAddress,
      placeId,
      placeName
    });
  };
}

export default PlaceFeedsContainer;
