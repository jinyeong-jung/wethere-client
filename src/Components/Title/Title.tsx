import React from "react";
import styled from "../../typed-components";

const Container = styled.h1`
  padding: 70px 30px;
  text-align: center;
  font-size: 70px;
  color: white;
`;

interface IProps {
  text: string;
  className?: string;
}

const Title: React.SFC<IProps> = ({ text, className }) => (
  <Container className={className}>{text}</Container>
);

export default Title;
