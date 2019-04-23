import React from "react";
import styled from "../../typed-components";

const Container = styled.h1`
  margin: 70px 30px;
  text-align: center;
  font-size: 70px;
  color: white;
`;

interface IProps {
  text: string;
}

const Title: React.SFC<IProps> = ({ text }) => <Container>{text}</Container>;

export default Title;
