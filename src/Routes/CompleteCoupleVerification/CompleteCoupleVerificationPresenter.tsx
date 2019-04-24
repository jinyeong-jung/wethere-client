import React from "react";
import style from "../../typed-components";

const Container = style.div`
    height: 100vh;
    background-color: ${props => props.theme.blueColor}
`;

const CompleteCoupleVerificationPresenter: React.SFC = () => (
  <Container>인증 완료</Container>
);

export default CompleteCoupleVerificationPresenter;
