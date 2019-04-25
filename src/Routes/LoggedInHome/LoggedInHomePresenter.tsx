import React from "react";
import Helmet from "react-helmet";
import Sidebar from "react-sidebar";
import Menu from "../../Components/Menu";
import styled from "../../typed-components";

const Container = styled.div`
  height: 100vh;
  background-color: ${props => props.theme.blueColor};
  display: flex;
  flex-direction: column;
`;

const MenuButton = styled.button`
  appearance: none;
  position: absolute;
  top: 15px;
  left: 15px;
  text-align: center;
  font-size: 20px;
  color: white;
  transform: rotate(90deg) scale(1.5, 1.1);
  border: 0;
  background-color: transparent;
  cursor: pointer;
  z-index: 2;
`;

interface IProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

const LoggedOutHomePresenter: React.SFC<IProps> = ({
  isMenuOpen,
  toggleMenu
}) => (
  <Container>
    <Helmet>
      <title>We There</title>
    </Helmet>
    <Sidebar
      sidebar={<Menu />}
      open={isMenuOpen}
      onSetOpen={toggleMenu}
      styles={{
        sidebar: {
          backgroundColor: "#57D1C9",
          width: "70%",
          zIndex: "10"
        }
      }}
    >
      <MenuButton onClick={toggleMenu}>|||</MenuButton>
    </Sidebar>
  </Container>
);

export default LoggedOutHomePresenter;
