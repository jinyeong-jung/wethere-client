import React from "react";
import { Mutation, MutationFn, Query } from "react-apollo";
import { RouteComponentProps } from "react-router-dom";
import { toast } from "react-toastify";
import { feedDetail } from "src/types/api";
import {
  deleteFeed,
  deleteFeedVariables,
  feedDetailVariables
} from "../../types/api";
import FeedDetailPresenter from "./FeedDetailPresenter";
import { DELETE_FEED, FEED_DETAIL } from "./FeedDetailQueries.queries";

class FeedDetailQuery extends Query<feedDetail, feedDetailVariables> {}

class DeleteFeedMutation extends Mutation<deleteFeed, deleteFeedVariables> {}

interface IState {
  alertOpen: boolean;
}

class FeedDetailContainer extends React.Component<
  RouteComponentProps<any>,
  IState
> {
  public state = {
    alertOpen: false
  };
  public deleteFeedMutation: MutationFn;
  public render() {
    const {
      match: { params }
    } = this.props;
    const feedId = Number(Object.values(params)[0]);
    return (
      <FeedDetailQuery query={FEED_DETAIL} variables={{ feedId }}>
        {({ data, loading }) => (
          <DeleteFeedMutation
            mutation={DELETE_FEED}
            variables={{ feedId }}
            onCompleted={data => {
              const { DeleteFeed } = data;
              if (DeleteFeed.ok) {
                toast("피드가 삭제되었습니다.");
                setTimeout(() => {
                  this.props.history.push("/feeds");
                }, 3000);
              } else {
                toast(DeleteFeed.error);
              }
            }}
          >
            {deleteFeedFn => {
              this.deleteFeedMutation = deleteFeedFn;
              return (
                <FeedDetailPresenter
                  alertOpen={this.state.alertOpen}
                  loading={loading}
                  data={data}
                  openDeleteAlertFn={this.openDeleteAlert}
                  handleClickDelete={this.handleClickDelete}
                  handleClickCancel={this.handleClickCancel}
                />
              );
            }}
          </DeleteFeedMutation>
        )}
      </FeedDetailQuery>
    );
  }

  public openDeleteAlert = () => {
    this.setState({
      alertOpen: true
    });
  };

  public handleClickDelete = () => {
    this.deleteFeedMutation();
    this.setState({
      alertOpen: false
    });
  };

  public handleClickCancel = () => {
    this.setState({
      alertOpen: false
    });
  };
}

export default FeedDetailContainer;
