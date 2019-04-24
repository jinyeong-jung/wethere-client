import React from "react";
import Helmet from "react-helmet";
import Exit from "../../Components/Exit/Exit";
import styled from "../../typed-components";

const Container = styled.div`
    height: 100vh;
    background-color: ${props => props.theme.blueColor}
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const ExtendedExit = styled(Exit)`
  position: absolute;
  top: 10px;
  right: 10px;
`;

const TextContainer = styled.div`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Text = styled.span`
  color: white;
  font-size: 16px;
  margin-bottom: 10px;
`;

const Photo = styled.div``;

const Nickname = styled.div``;

const Gender = styled.div``;

const Birth = styled.div``;

const Label = styled.span``;

const Data = styled.span``;

const InitialProfilePresenter: React.SFC = () => (
  <Container>
    <Helmet>
      <title>프로필 - We There</title>
    </Helmet>
    <ExtendedExit backTo={"/"} />
    <TextContainer>
      <Text>We There를 시작하기 전에</Text>
      <Text>간단한 프로필 설정을 하고 갈까요?</Text>
    </TextContainer>
    <Photo>
      <Label>라벨</Label>
      <Data>사진</Data>
    </Photo>
    <Nickname>
      <Label>라벨</Label>
      <Data>닉네임</Data>
    </Nickname>
    <Gender>
      <Label>라벨</Label>
      <Data>성별</Data>
    </Gender>
    <Birth>
      <Label>라벨</Label>
      <Data>생년월일</Data>
    </Birth>
  </Container>
);

export default InitialProfilePresenter;
