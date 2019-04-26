import React from "react";
import styled from "../../typed-components";

const Container = styled<{ mine: boolean }, any>("div")`
  background-color: ${props =>
    props.mine ? props.theme.yellowColor : "white"};
  width: 40%;
  border-radius: 15px;
  padding: 12px;
  font-size: 13px;
  margin-bottom: 14px;
  border-bottom-left-radius: ${props => (props.mine ? "15px" : "0px")}
  border-bottom-right-radius: ${props => (props.mine ? "0px" : "15px")}
    align-self: ${props => (props.mine ? "flex-end" : "flex-start")}
`;

interface IProps {
  text: string;
  mine: boolean;
}

const Message: React.SFC<IProps> = ({ text, mine }) => {
  return (
    <React.Fragment>
      <Container mine={mine}>{text}</Container>
    </React.Fragment>
  );
};

export default Message;
