import React from "react";
import { Query } from "react-apollo";
import { RouteComponentProps } from "react-router-dom";
import { getMyProfile } from "src/types/api";
import { COUPLE_INFO, USER_PROFILE } from "../../sharedQueries.queries";
import { getCoupleInfo } from "../../types/api";
import ChatPresenter from "./ChatPresenter";

class ProfileQuery extends Query<getMyProfile> {}
class CoupleQuery extends Query<getCoupleInfo> {}

class ChatContainer extends React.Component<RouteComponentProps> {
  public render() {
    return (
      <ProfileQuery query={USER_PROFILE}>
        {({ data: ProfileData }) => {
          return (
            <CoupleQuery
              query={COUPLE_INFO}
              onCompleted={data => {
                if (data && data.GetCoupleInfo && data.GetCoupleInfo.couple) {
                  const {
                    GetCoupleInfo: {
                      couple: { chat }
                    }
                  } = data;
                  if (chat === null) {
                    this.props.history.push("/chat/add");
                  }
                }
              }}
            >
              {({ data: CoupleData }) => <ChatPresenter />}
            </CoupleQuery>
          );
        }}
      </ProfileQuery>
    );
  }
}

export default ChatContainer;
