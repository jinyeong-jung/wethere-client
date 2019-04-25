import React from "react";
import Helmet from "react-helmet";
import Exit from "src/Components/Exit";
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

interface IProps {
  chatData?: getChat;
  loading: boolean;
}

const ChatRoomPresenter: React.SFC<IProps> = ({ chatData, loading }) => (
  <Container>
    <Helmet>
      <title>채팅방 - We There</title>
    </Helmet>
    <ExtendedExit backTo={"/chat"} />
  </Container>
);

export default ChatRoomPresenter;
