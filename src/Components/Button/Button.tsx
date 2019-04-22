import React from "react";
import styled from "../../typed-components";

const Container = styled.input`
  border: none;
  margin: 50px;
  padding: 15px 20px;
  background-color: ${props => props.theme.greyColor};
  color: white;
  font-family: "Noto Sans KR", sans-serif;
  cursor: pointer;
`;

interface IProps {
  className?: string;
  value: string;
  onClick?: any;
}

const Button: React.SFC<IProps> = ({ className, value, onClick }) => (
  <Container
    className={className}
    type={"submit"}
    value={value}
    onClick={onClick}
  />
);

export default Button;
