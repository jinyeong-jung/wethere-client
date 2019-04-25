import React from "react";
import { Mutation, Query } from "react-apollo";
import { RouteComponentProps } from "react-router-dom";
import { toast } from "react-toastify";
import { createChat, getCoupleInfo } from "src/types/api";
import { COUPLE_INFO } from "../../sharedQueries.queries";
import { createChatVariables } from "../../types/api";
import AddChatPresenter from "./AddChatPresenter";
import { CREATE_CHAT } from "./AddChatQueries.queries";

class CoupleQuery extends Query<getCoupleInfo> {}
class CreateChatMutation extends Mutation<createChat, createChatVariables> {}

interface IState {
  coupleId: number;
}

class AddChatContainer extends React.Component<
  RouteComponentProps<any>,
  IState
> {
  public state = {
    coupleId: 0
  };
  public render() {
    return (
      <CoupleQuery
        query={COUPLE_INFO}
        fetchPolicy={"cache-and-network"}
        onCompleted={data => {
          if (data && data.GetCoupleInfo && data.GetCoupleInfo.couple) {
            this.setState({
              coupleId: data.GetCoupleInfo.couple.id
            });
          }
        }}
      >
        {() => {
          console.log(this.state.coupleId);
          return (
            <CreateChatMutation
              mutation={CREATE_CHAT}
              variables={{ coupleId: this.state.coupleId }}
              onCompleted={data => {
                const { CreateChat } = data;
                if (CreateChat.ok) {
                  toast("채팅방이 개설되었습니다 🎉");
                  setTimeout(() => {
                    this.props.history.push("/chat");
                  }, 3000);
                } else {
                  toast(CreateChat.error);
                  setTimeout(() => {
                    this.props.history.push("/");
                  }, 3000);
                }
              }}
            >
              {chatMutation => <AddChatPresenter onClick={chatMutation} />}
            </CreateChatMutation>
          );
        }}
      </CoupleQuery>
    );
  }
}

export default AddChatContainer;
