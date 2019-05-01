import React from "react";
import { Mutation, MutationFn, Query } from "react-apollo";
import { RouteComponentProps } from "react-router-dom";
import { toast } from "react-toastify";
import { USER_PROFILE } from "../../sharedQueries.queries";
import {
  deleteFeed,
  deleteFeedVariables,
  feedDetail,
  feedDetailVariables,
  getComments,
  getCommentsVariables,
  getMyProfile
} from "../../types/api";
import FeedDetailPresenter from "./FeedDetailPresenter";
import {
  DELETE_FEED,
  FEED_DETAIL,
  GET_COMMENTS
} from "./FeedDetailQueries.queries";

class ProfileQuery extends Query<getMyProfile> {}

class FeedDetailQuery extends Query<feedDetail, feedDetailVariables> {}

class DeleteFeedMutation extends Mutation<deleteFeed, deleteFeedVariables> {}

class CommentsQuery extends Query<getComments, getCommentsVariables> {}

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
      <ProfileQuery query={USER_PROFILE}>
        {({ data: profileData }) => (
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
                    <CommentsQuery query={GET_COMMENTS} variables={{ feedId }}>
                      {({ data: commentData }) => {
                        return (
                          <FeedDetailPresenter
                            alertOpen={this.state.alertOpen}
                            loading={loading}
                            data={data}
                            profileData={profileData}
                            commentData={commentData}
                            openDeleteAlertFn={this.openDeleteAlert}
                            handleClickDelete={this.handleClickDelete}
                            handleClickCancel={this.handleClickCancel}
                          />
                        );
                      }}
                    </CommentsQuery>
                  );
                }}
              </DeleteFeedMutation>
            )}
          </FeedDetailQuery>
        )}
      </ProfileQuery>
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
