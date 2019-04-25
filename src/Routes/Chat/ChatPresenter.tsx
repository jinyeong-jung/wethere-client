import React from "react";
import Helmet from "react-helmet";
import BackArrow from "../../Components/BackArrow/index";
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

const ChatPresenter: React.SFC = () => (
  <Container>
    <Helmet>
      <title>채팅 - We There</title>
    </Helmet>
    <ExtendedBackArrow backTo={"/"} />
  </Container>
);

export default ChatPresenter;
