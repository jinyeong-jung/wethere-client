import React from "react";
import styled from "../../typed-components";

const Container = styled.div`
  height: 100vh;
  background-color: ${props => props.theme.blueColor};
  display: flex;
  flex-direction: column;
`;

const LoggedOutHomePresenter: React.SFC = () => <Container>메인</Container>;

export default LoggedOutHomePresenter;
