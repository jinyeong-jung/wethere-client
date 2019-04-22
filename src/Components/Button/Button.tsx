import React from "react";
import styled from "../../typed-components";

const Container = styled.button`
  border: none;
`;

interface IProps {
  className?: string;
}

const Button: React.SFC<IProps> = ({ className }) => (
  <Container className={className}>Button</Container>
);

export default Button;
