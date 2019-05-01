import React from "react";
import Helmet from "react-helmet";
import Sidebar from "react-sidebar";
import Title from "src/Components/Title";
import Menu from "../../Components/Menu";
import styled from "../../typed-components";

const Container = styled.div`
  height: 100vh;
  background-color: ${props => props.theme.blueColor};
  display: flex;
  flex-direction: column;
  align-items: center;
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

const Intro = styled.div`
  color: white;
  text-align: center;
  line-height: 1.5;
`;

const Footer = styled.div`
  position: absolute
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 30px;
`;

const Item = styled.div`
  color: rgba(0, 0, 0, 0.3);
  font-size: 12px;
  margin-bottom: 5px;
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
    <Title text="We There" />
    <Intro>
      오직 내 애인과 단둘만의 대화를 나누세요. <br />
      <br />
      이번 주말에 가고싶은 곳이 있나요?
      <br />
      우리 둘 만의 플레이스로 등록해보세요.
      <br />
      <br />
      꽁냥꽁냥 행복한 데이트를 즐기셨나요?
      <br />
      인증 사진과 함께 추억을 기록하세요.
      <br />
      <br />
      우리 둘만의 추억 보관함, We There♥
    </Intro>
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
    <Footer>
      <Item>
        <a href="https://www.facebook.com/jennnyee">Facebook　</a>
        <a href="https://www.instagram.com/loves.are">Instagram　</a>
        <a href="https://github.com/jinyeong-jung">Github</a>
      </Item>
      <Item>정진영 (Jinyeong Jung)</Item>
      <Item>© 한량 인생 - All rights reserved.</Item>
    </Footer>
  </Container>
);

export default LoggedOutHomePresenter;
