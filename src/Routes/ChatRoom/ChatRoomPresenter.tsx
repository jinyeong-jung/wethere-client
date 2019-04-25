import React from "react";
import Helmet from "react-helmet";
import Exit from "src/Components/Exit";
import Form from "src/Components/Form";
import { getChat } from "src/types/api";
import styled from "../../typed-components";

const Container = styled.div`
  height: 100vh;
  background-color: ${props => props.theme.pinkColor};
`;

const ExtendedExit = styled(Exit)`
  position: absolute;
  top: 10px;
  right: 10px;
`;

const ChatInput = styled.input`
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 14px 17px;
  font-size: 15px;
  color: ${props => props.theme.greyColor};
  font-family: "Noto Sans KR", sans-serif;
`;

interface IProps {
  chatData?: getChat;
  loading: boolean;
  message: string;
  onInputChange: any;
  onSubmit: any;
}

const ChatRoomPresenter: React.SFC<IProps> = ({
  chatData,
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
    <Form submitFn={onSubmit}>
      <ChatInput
        type={"text"}
        value={message}
        name={"message"}
        placeholder={"메시지를 입력하세요."}
        onChange={onInputChange}
      />
    </Form>
  </Container>
);

export default ChatRoomPresenter;
