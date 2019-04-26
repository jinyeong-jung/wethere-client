import React from "react";
import { Mutation, MutationFn, Query } from "react-apollo";
import { RouteComponentProps } from "react-router-dom";
import { USER_PROFILE } from "../../sharedQueries.queries";
import {
  getChat,
  getChatVariables,
  getMyProfile,
  sendChatMessage,
  sendChatMessageVariables
} from "../../types/api";
import ChatRoomPresenter from "./ChatRoomPresenter";
import { GET_CHAT, SEND_MESSAGE } from "./ChatRoomQueries.queries";

class ProfileQuery extends Query<getMyProfile> {}

class ChatQuery extends Query<getChat, getChatVariables> {}

class SendMessageMutation extends Mutation<
  sendChatMessage,
  sendChatMessageVariables
> {}

interface IProps extends RouteComponentProps<any> {}
interface IState {
  message: string;
}

class ChatRoomContainer extends React.Component<IProps, IState> {
  public sendMessageMutation: MutationFn;
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
      <ProfileQuery query={USER_PROFILE}>
        {({ data: profileData }) => {
          return (
            <ChatQuery query={GET_CHAT} variables={{ chatId: Number(chatId) }}>
              {({ data: chatData, loading }) => {
                return (
                  <SendMessageMutation mutation={SEND_MESSAGE}>
                    {sendMessageFn => {
                      this.sendMessageMutation = sendMessageFn;
                      return (
                        <ChatRoomPresenter
                          userData={profileData}
                          chatData={chatData}
                          loading={loading}
                          message={message}
                          onInputChange={this.onInputChange}
                          onSubmit={this.onSubmit}
                        />
                      );
                    }}
                  </SendMessageMutation>
                );
              }}
            </ChatQuery>
          );
        }}
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
  public onSubmit = () => {
    const {
      match: {
        params: { chatId }
      }
    } = this.props;
    const { message } = this.state;
    if (message !== "") {
      this.sendMessageMutation({
        variables: {
          chatId: Number(chatId),
          text: message
        }
      });
      this.setState({
        message: ""
      });
    }
  };
}

export default ChatRoomContainer;
