import React from "react";
import { Query } from "react-apollo";
import { RouteComponentProps } from "react-router-dom";
import { feedDetail } from "src/types/api";
import { feedDetailVariables } from "../../types/api";
import FeedDetailPresenter from "./FeedDetailPresenter";
import { FEED_DETAIL } from "./FeedDetailQueries.queries";

class FeedDetailQuery extends Query<feedDetail, feedDetailVariables> {}

class FeedDetailContainer extends React.Component<RouteComponentProps<any>> {
  constructor(props) {
    super(props);
  }
  public render() {
    const {
      match: { params }
    } = this.props;
    const feedId = Number(Object.values(params)[0]);
    return (
      <FeedDetailQuery query={FEED_DETAIL} variables={{ feedId }}>
        {({ data, loading }) => (
          <FeedDetailPresenter
            loading={loading}
            data={data}
            handleDeleteClick={null}
          />
        )}
      </FeedDetailQuery>
    );
  }
}

export default FeedDetailContainer;
