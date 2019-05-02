import React from "react";
import { MutationFn } from "react-apollo";
import Helmet from "react-helmet";
import BackArrow from "../../Components/BackArrow/index";
import styled from "../../typed-components";

const Container = styled.div`
    height: 100vh;
    background-color: ${props => props.theme.blueColor}
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const ExtendedBackArrow = styled(BackArrow)`
  position: absolute;
  top: 10px;
  left: 10px;
`;

const TextContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 200px;
`;

const Text = styled.span`
  margin-bottom: 10px;
  color: white;
`;

const CreateButton = styled.button`
  border: 1px solid white;
  background-color: transparent;
  color: white;
  padding: 10px;
  font-family: "Noto Sans KR", sans-serif;
  margin-top: 100px;
  cursor: pointer;
`;

interface IProps {
  onClick: MutationFn;
}

const AddChatPresenter: React.SFC<IProps> = ({ onClick }) => (
  <Container>
    <Helmet>
      <title>채팅방 만들기 - We There</title>
    </Helmet>
    <ExtendedBackArrow backTo={"/wethere-client/"} />
    <TextContainer>
      <Text>아직 채팅방이 없어요 :(</Text>
      <Text>채팅방을 개설하고</Text>
      <Text>파트너랑 대화를 나눠보세요!</Text>
    </TextContainer>
    <CreateButton onClick={onClick}>채팅방 만들기</CreateButton>
  </Container>
);

export default AddChatPresenter;
