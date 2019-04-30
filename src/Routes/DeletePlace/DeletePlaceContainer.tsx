import React from "react";
import { Mutation, Query } from "react-apollo";
import { RouteComponentProps } from "react-router-dom";
import { toast } from "react-toastify";
import {
  deletePlace,
  deletePlaceVariables,
  placeDetail,
  placeDetailVariables
} from "../../types/api";
import DeletePlacePresenter from "./DeletePlacePresenter";
import { DELETE_PLACE, PLACE_DETAIL } from "./DeletePlaceQueries.queries";

class PlaceDetailQuery extends Query<placeDetail, placeDetailVariables> {}

class DeletePlaceMuation extends Mutation<deletePlace, deletePlaceVariables> {}

class DeletePlaceContainer extends React.Component<RouteComponentProps> {
  public render() {
    const {
      match: { params }
    } = this.props;
    const placeId = Number(Object.values(params)[0]);
    return (
      <PlaceDetailQuery
        query={PLACE_DETAIL}
        variables={{ placeId }}
        fetchPolicy={"cache-and-network"}
      >
        {({ data: placeData, loading }) => {
          console.log(placeData);
          if (placeData && placeData.PlaceDetail) {
            if (!placeData.PlaceDetail.ok) {
              toast(placeData.PlaceDetail.error);
              setTimeout(() => {
                this.props.history.push("/places");
              }, 3000);
            }
          }

          return (
            <DeletePlaceMuation
              mutation={DELETE_PLACE}
              variables={{ placeId }}
              onCompleted={data => {
                const { DeletePlace } = data;
                if (DeletePlace.ok) {
                  toast("플레이스가 삭제되었습니다.");
                  setTimeout(() => {
                    this.props.history.push("/places");
                  }, 3000);
                } else {
                  toast(DeletePlace.error);
                }
              }}
            >
              {deletePlaceFn => (
                <DeletePlacePresenter
                  loading={loading}
                  placeData={placeData}
                  onBtnClick={deletePlaceFn}
                />
              )}
            </DeletePlaceMuation>
          );
        }}
      </PlaceDetailQuery>
    );
  }
}

export default DeletePlaceContainer;
