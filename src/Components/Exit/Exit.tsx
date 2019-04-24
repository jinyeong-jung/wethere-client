import React from "react";
import { Link } from "react-router-dom";
import styled from "../../typed-components";

const Container = styled.div`
  transform: scale(0.9);
`;

interface IProps {
  backTo: string;
  className?: string;
}

const Exit: React.SFC<IProps> = ({ backTo, className }) => (
  <Container className={className}>
    <Link to={backTo}>
      <svg
        width="24"
        height="24"
        xmlns="http://www.w3.org/2000/svg"
        fill-rule="evenodd"
        clip-rule="evenodd"
        fill="white"
      >
        <path d="M12 11.293l10.293-10.293.707.707-10.293 10.293 10.293 10.293-.707.707-10.293-10.293-10.293 10.293-.707-.707 10.293-10.293-10.293-10.293.707-.707 10.293 10.293z" />
      </svg>
    </Link>
  </Container>
);

export default Exit;
