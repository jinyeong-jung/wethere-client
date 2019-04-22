import React from "react";
import styled from "../../typed-components";

const Container = styled.input`
  border: none;
  border-radius: 20px;
  margin: 10px 40px;
  padding: 13px 20px;
  color: ${props => props.theme.greyColor};
  text-align: center;
`;

interface IProps {
  placeholder: string;
  type?: string;
}

const Input: React.SFC<IProps> = ({ placeholder, type }) => (
  <Container placeholder={placeholder} type={type} />
);

export default Input;
