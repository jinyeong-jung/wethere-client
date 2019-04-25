import React from "react";
import Helmet from "react-helmet";
import BackArrow from "src/Components/BackArrow";
import Button from "src/Components/Button";
import Title from "src/Components/Title";
import styled from "../../typed-components";

const Container = styled.div`
  height: 100vh;
  background-color: ${props => props.theme.blueColor};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ExtendedBackArrow = styled(BackArrow)`
  position: absolute;
  left: 10px;
  top: 10px;
`;

const Text = styled.div`
  color: white;
  margin-bottom: 10px;
`;

const ExtendedButton = styled(Button)`
  background-color: ${props => props.theme.pinkColor};
  :active {
    transform: scale(0.99);
  }
`;

interface IProps {
  onClick: any;
}

const ChatPresenter: React.SFC<IProps> = ({ onClick }) => (
  <Container>
    <Helmet>
      <title>채팅 - We There</title>
    </Helmet>
    <ExtendedBackArrow backTo={"/"} />
    <Title text={"채팅"} />
    <Text>채팅방에서 파트너가 기다리고 있어요!</Text>
    <Text>어서 입장해 대화를 나눠 보세요 💛</Text>
    <ExtendedButton onClick={onClick} value={"채팅방 들어가기"} />
  </Container>
);

export default ChatPresenter;
