import React from "react";
import styled from "../../typed-components";

const Container = styled<{ mine: boolean }, any>("div")`
  background-color: ${props =>
    props.mine ? props.theme.yellowColor : "white"};
  width: 40%;
  margin: 0 20px;
`;

interface IProps {
  text: string;
  mine: boolean;
}

const Message: React.SFC<IProps> = ({ text, mine }) => (
  <Container mine={mine}>{text}</Container>
);

export default Message;
