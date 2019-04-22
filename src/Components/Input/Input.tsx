import React from "react";
import styled from "../../typed-components";

const Container = styled.input`
  border: 3px solid white;
  border-radius: 20px;
  margin: 10px 40px;
  padding: 13px 20px;
  color: ${props => props.theme.greyColor};
  text-align: center;
  font-family: "Noto Sans KR", sans-serif;
  :focus {
    border: 3px solid #ffe869;
  }
`;

interface IProps {
  placeholder: string;
  type?: string;
  name?: string;
  required?: boolean;
  value: string;
  onChange: any;
}

const Input: React.SFC<IProps> = ({
  placeholder,
  type,
  name,
  required,
  value,
  onChange
}) => (
  <Container
    placeholder={placeholder}
    type={type}
    name={name}
    required={required}
    value={value}
    onChange={onChange}
  />
);

export default Input;
