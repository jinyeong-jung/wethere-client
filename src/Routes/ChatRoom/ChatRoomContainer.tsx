import React from "react";
import { Query } from "react-apollo";
import { RouteComponentProps } from "react-router-dom";
import { getChat, getChatVariables } from "../../types/api";
import ChatRoomPresenter from "./ChatRoomPresenter";
import { GET_CHAT } from "./ChatRoomQueries.queries";

class ChatQuery extends Query<getChat, getChatVariables> {}

interface IProps extends RouteComponentProps<any> {}
interface IState {
  message: string;
}

class ChatRoomContainer extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    if (!props.match.params.chatId) {
      props.history.push("/");
    }
    if (!props.location.state) {
      this.props.history.push("/chat");
    }
    this.state = {
      message: ""
    };
  }
  public render() {
    const {
      match: {
        params: { chatId }
      }
    } = this.props;

    const { message } = this.state;
    return (
      <ChatQuery query={GET_CHAT} variables={{ chatId: Number(chatId) }}>
        {({ data: chatData, loading }) => {
          return (
            <ChatRoomPresenter
              chatData={chatData}
              loading={loading}
              message={message}
              onInputChange={this.onInputChange}
              onSubmit={null}
            />
          );
        }}
      </ChatQuery>
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
}

export default ChatRoomContainer;
