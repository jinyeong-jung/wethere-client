import React from "react";
import { Query } from "react-apollo";
import { RouteComponentProps } from "react-router-dom";
import { getMyProfile } from "src/types/api";
import { COUPLE_INFO, USER_PROFILE } from "../../sharedQueries.queries";
import { getCoupleInfo } from "../../types/api";
import ChatPresenter from "./ChatPresenter";

class ProfileQuery extends Query<getMyProfile> {}
class CoupleQuery extends Query<getCoupleInfo> {}

interface IState {
  chatId: number;
}

class ChatContainer extends React.Component<RouteComponentProps<any>, IState> {
  public render() {
    return (
      <ProfileQuery query={USER_PROFILE}>
        {() => {
          return (
            <CoupleQuery
              query={COUPLE_INFO}
              fetchPolicy={"cache-and-network"}
              onCompleted={data => {
                if (data && data.GetCoupleInfo && data.GetCoupleInfo.couple) {
                  const {
                    GetCoupleInfo: {
                      couple: { chat }
                    }
                  } = data;
                  if (chat === null) {
                    this.props.history.push("/wethere-client/chat/add/");
                  } else {
                    this.setState({
                      chatId: chat.id
                    });
                  }
                }
              }}
            >
              {() => <ChatPresenter onClick={this.handleBtnClick} />}
            </CoupleQuery>
          );
        }}
      </ProfileQuery>
    );
  }
  public handleBtnClick = () => {
    const { chatId } = this.state;
    this.props.history.push(`/wethere-client/chat/${chatId}`, { chatId });
  };
}

export default ChatContainer;
