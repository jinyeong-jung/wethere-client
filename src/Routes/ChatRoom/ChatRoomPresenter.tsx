import React from "react";
import Helmet from "react-helmet";
import Exit from "src/Components/Exit";
import Form from "src/Components/Form";
import Message from "src/Components/Message";
import { getChat, getMyProfile } from "src/types/api";
import styled from "../../typed-components";

const Container = styled.div`
  height: 100vh;
  background-color: ${props => props.theme.pinkColor};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const NullMessage = styled.div`
  color: white;
  font-size: 15px;
  padding-bottom: 50px;
`;

const ExtendedExit = styled(Exit)`
  position: absolute;
  top: 10px;
  right: 10px;
`;

const ChatInput = styled.input`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 14px 17px;
  font-size: 15px;
  color: ${props => props.theme.greyColor};
  font-family: "Noto Sans KR", sans-serif;
`;

const Button = styled.button`
  position: fixed;
  bottom: 11px;
  right: 13px;
  border: none;
  background-color: ${props => props.theme.yellowColor};
  padding: 7px 17px;
  color: rgba(0, 0, 0, 0.6);
  font-family: "Noto Sans KR", sans-serif;
  font-size: 13px;
`;

interface IProps {
  userData?: getMyProfile;
  chatData?: getChat;
  loading: boolean;
  message: string;
  onInputChange: any;
  onSubmit: any;
}

const ChatRoomPresenter: React.SFC<IProps> = ({
  userData: { GetMyProfile: { user = null } = {} } = {},
  chatData: { GetChat: { chat = null } = {} } = {},
  loading,
  message,
  onInputChange,
  onSubmit
}) => (
  <Container>
    <Helmet>
      <title>채팅방 - We There</title>
    </Helmet>
    <ExtendedExit backTo={"/chat"} />
    {!loading && chat && (
      <React.Fragment>
        {chat.messages &&
          user &&
          (chat.messages.length === 0 ? (
            <NullMessage>메시지가 존재하지 않습니다.</NullMessage>
          ) : (
            chat.messages.map(message => (
              <Message
                key={message!.id}
                text={message!.text}
                mine={user!.id === message!.userId}
              />
            ))
          ))}
      </React.Fragment>
    )}
    <Form submitFn={onSubmit}>
      <ChatInput
        type={"text"}
        value={message}
        name={"message"}
        onChange={onInputChange}
        autoFocus={true}
      />
      <Button onClick={onSubmit}>전송</Button>
    </Form>
  </Container>
);

export default ChatRoomPresenter;
