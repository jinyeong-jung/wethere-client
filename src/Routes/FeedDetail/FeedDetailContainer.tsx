import React from "react";
import { Mutation, MutationFn, Query } from "react-apollo";
import { RouteComponentProps } from "react-router-dom";
import { toast } from "react-toastify";
import { USER_PROFILE } from "../../sharedQueries.queries";
import {
  addComment,
  addCommentVariables,
  deleteComment,
  deleteCommentVariables,
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
  ADD_COMMENT,
  DELETE_COMMENT,
  DELETE_FEED,
  FEED_DETAIL,
  GET_COMMENTS
} from "./FeedDetailQueries.queries";

class ProfileQuery extends Query<getMyProfile> {}
class FeedDetailQuery extends Query<feedDetail, feedDetailVariables> {}
class DeleteFeedMutation extends Mutation<deleteFeed, deleteFeedVariables> {}
class CommentsQuery extends Query<getComments, getCommentsVariables> {}
class AddCommentMutation extends Mutation<addComment, addCommentVariables> {}
class DeleteCommentMutation extends Mutation<
  deleteComment,
  deleteCommentVariables
> {}

interface IState {
  alertOpen: boolean;
  commentText: string;
}

class FeedDetailContainer extends React.Component<
  RouteComponentProps<any>,
  IState
> {
  public state = {
    alertOpen: false,
    commentText: ""
  };
  public deleteFeedMutation: MutationFn;
  public render() {
    const { alertOpen, commentText } = this.state;
    const {
      match: { params }
    } = this.props;
    const feedId = Number(Object.values(params)[0]);
    return (
      <ProfileQuery query={USER_PROFILE}>
        {({ data: profileData }) => (
          <FeedDetailQuery
            query={FEED_DETAIL}
            fetchPolicy={"cache-and-network"}
            variables={{ feedId }}
          >
            {({ data, loading }) => (
              <DeleteFeedMutation
                mutation={DELETE_FEED}
                variables={{ feedId }}
                onCompleted={data => {
                  const { DeleteFeed } = data;
                  if (DeleteFeed.ok) {
                    toast("피드가 삭제되었습니다.");
                    setTimeout(() => {
                      this.props.history.push("/wethere-client/feeds");
                    }, 3000);
                  } else {
                    toast(DeleteFeed.error);
                  }
                }}
              >
                {deleteFeedFn => {
                  this.deleteFeedMutation = deleteFeedFn;
                  return (
                    <CommentsQuery
                      query={GET_COMMENTS}
                      fetchPolicy={"cache-and-network"}
                      pollInterval={500}
                      variables={{ feedId }}
                    >
                      {({ data: commentData }) => {
                        return (
                          <AddCommentMutation
                            mutation={ADD_COMMENT}
                            variables={{ feedId, text: commentText }}
                            onCompleted={data => {
                              const { AddComment } = data;
                              if (AddComment.ok) {
                                this.setState({ commentText: "" });
                              } else {
                                toast(AddComment.error);
                              }
                            }}
                          >
                            {addCommentFn => (
                              <DeleteCommentMutation mutation={DELETE_COMMENT}>
                                {deleteCommentFn => (
                                  <FeedDetailPresenter
                                    alertOpen={alertOpen}
                                    loading={loading}
                                    data={data}
                                    profileData={profileData}
                                    commentData={commentData}
                                    openDeleteAlertFn={this.openDeleteAlert}
                                    handleClickDelete={this.handleClickDelete}
                                    handleClickCancel={this.handleClickCancel}
                                    handleAddComment={addCommentFn}
                                    commentText={this.state.commentText}
                                    onInputChange={this.onInputChange}
                                    handleDeleteComment={deleteCommentFn}
                                  />
                                )}
                              </DeleteCommentMutation>
                            )}
                          </AddCommentMutation>
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

  public onInputChange: React.ChangeEventHandler<HTMLInputElement> = event => {
    const {
      target: { name, value }
    } = event;
    this.setState({
      [name]: value
    } as any);
  };

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
