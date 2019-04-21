import React from "react";
import { RouteComponentProps } from "react-router";
import styled from "../../typed-components";

const Container = styled.div`
  height: 100vh;
`;

interface IProps extends RouteComponentProps<any> {}

const LoggedOutHomePresenter: React.SFC<IProps> = () => (
  <Container>hello</Container>
);

export default LoggedOutHomePresenter;
