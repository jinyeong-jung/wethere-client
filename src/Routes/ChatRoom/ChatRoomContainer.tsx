import React from "react";
import { Query } from "react-apollo";
import { RouteComponentProps } from "react-router-dom";
import { getChat, getChatVariables } from "../../types/api";
import ChatRoomPresenter from "./ChatRoomPresenter";
import { GET_CHAT } from "./ChatRoomQueries.queries";

class ChatQuery extends Query<getChat, getChatVariables> {}

interface IProps extends RouteComponentProps<any> {}

class ChatRoomContainer extends React.Component<IProps> {
  constructor(props: IProps) {
    super(props);
    if (!props.match.params.chatId) {
      props.history.push("/");
    }
  }
  public render() {
    const {
      match: {
        params: { chatId }
      }
    } = this.props;
    return (
      <ChatQuery query={GET_CHAT} variables={{ chatId }}>
        {({ data: chatData, loading }) => (
          <ChatRoomPresenter chatData={chatData} loading={loading} />
        )}
      </ChatQuery>
    );
  }
}

export default ChatRoomContainer;
