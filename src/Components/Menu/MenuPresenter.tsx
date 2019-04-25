import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { getMyProfile } from "src/types/api";
import styled from "../../typed-components";

const Container = styled.div`
  height: 100%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Header = styled.h2`
  color: white;
  font-size: 35px;
  text-align: center;
  padding: 10px 0;
`;

const Profile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Image = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-top: 20px;
  box-shadow: 0px 4px 3px 0px rgba(0, 0, 0, 0.1);
`;

const Text = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: center;
`;

const Name = styled.span`
  color: white;
`;

const Gender = styled.span`
  font-size: 12px;
  color: white;
`;

const Status = styled.div`
  color: white;
  font-size: 12px;
  font-weight: 300;
  margin-top: 5px;
  display: block;
  margin-bottom: 10px;
`;

const Button = styled.input`
  border: 0.7px solid white;
  background-color: transparent;
  padding: 5px 10px;
  color: white;
  font-size: 12px;
  margin-top: 10px;
  cursor: pointer;
`;

const Category = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
`;

const ExtendedLink = styled(Link)`
  margin: 10px 0px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const Icon = styled.span`
  margin-right: 25px;
`;

const Label = styled.span`
  color: white;
  font-size: 15px;
  font-weight: 300;
`;

const Footer = styled.h3`
  color: white;
  position: absolute;
  bottom: 20px;
  font-size: 20px;
`;

interface IProps {
  data?: getMyProfile;
  loading: boolean;
}

const MenuPresenter: React.SFC<IProps> = ({
  data: { GetMyProfile: { user = null } = {} } = {},
  loading
}) => (
  <Container>
    {!loading && user && user.nickname && (
      <Fragment>
        <Header>안녕하세요!</Header>
        <Profile>
          <Image
            src={
              user.profilePhoto ||
              "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
            }
          />
          <Text>
            <Name>{user.nickname}</Name>
            <Gender>{user.gender === "MALE" ? "(男)" : "(女)"}</Gender>
          </Text>
          <Status>
            {user.status === "HAPPY"
              ? "😁 행복행복"
              : user.status === "DEPRESSED"
              ? "😢 우울해요"
              : user.status === "MAD"
              ? "😤 화가 난다"
              : user.status === "ENERGIZED"
              ? "🤩 에너지 뿜뿜"
              : user.status === "UNCERTAIN"
              ? "🤐 모르겠당"
              : user.status === "PEACEFUL"
              ? "😊 평화롭구나"
              : "😖 혼돈의 카오스"}
          </Status>
          <Link to={"/profile"}>
            <Button type="button" value="프로필 수정" />
          </Link>
        </Profile>
        <Category>
          <ExtendedLink to={"/chat"}>
            <Icon>
              <svg
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
                fillRule="evenodd"
                clipRule="evenodd"
                fill="white"
              >
                <path d="M20 15c0 .552-.448 1-1 1s-1-.448-1-1 .448-1 1-1 1 .448 1 1m-3 0c0 .552-.448 1-1 1s-1-.448-1-1 .448-1 1-1 1 .448 1 1m-3 0c0 .552-.448 1-1 1s-1-.448-1-1 .448-1 1-1 1 .448 1 1m5.415 4.946c-1 .256-1.989.482-3.324.482-3.465 0-7.091-2.065-7.091-5.423 0-3.128 3.14-5.672 7-5.672 3.844 0 7 2.542 7 5.672 0 1.591-.646 2.527-1.481 3.527l.839 2.686-2.943-1.272zm-13.373-3.375l-4.389 1.896 1.256-4.012c-1.121-1.341-1.909-2.665-1.909-4.699 0-4.277 4.262-7.756 9.5-7.756 5.018 0 9.128 3.194 9.467 7.222-1.19-.566-2.551-.889-3.967-.889-4.199 0-8 2.797-8 6.672 0 .712.147 1.4.411 2.049-.953-.126-1.546-.272-2.369-.483m17.958-1.566c0-2.172-1.199-4.015-3.002-5.21l.002-.039c0-5.086-4.988-8.756-10.5-8.756-5.546 0-10.5 3.698-10.5 8.756 0 1.794.646 3.556 1.791 4.922l-1.744 5.572 6.078-2.625c.982.253 1.932.407 2.85.489 1.317 1.953 3.876 3.314 7.116 3.314 1.019 0 2.105-.135 3.242-.428l4.631 2-1.328-4.245c.871-1.042 1.364-2.384 1.364-3.75" />
              </svg>
            </Icon>
            <Label>채팅</Label>
          </ExtendedLink>
          <ExtendedLink to={"/places"}>
            <Icon>
              <svg
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
                fillRule="evenodd"
                clipRule="evenodd"
                fill="white"
              >
                <path d="M12 10c-1.104 0-2-.896-2-2s.896-2 2-2 2 .896 2 2-.896 2-2 2m0-5c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3m-7 2.602c0-3.517 3.271-6.602 7-6.602s7 3.085 7 6.602c0 3.455-2.563 7.543-7 14.527-4.489-7.073-7-11.072-7-14.527m7-7.602c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602" />
              </svg>
            </Icon>
            <Label>플레이스</Label>
          </ExtendedLink>
          <ExtendedLink to={"/feeds"}>
            <Icon>
              <svg
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
                fillRule="evenodd"
                clipRule="evenodd"
                fill="white"
              >
                <path d="M8.071 21.586l-7.071 1.414 1.414-7.071 14.929-14.929 5.657 5.657-14.929 14.929zm-.493-.921l-4.243-4.243-1.06 5.303 5.303-1.06zm9.765-18.251l-13.3 13.301 4.242 4.242 13.301-13.3-4.243-4.243z" />
              </svg>
            </Icon>
            <Label>피드</Label>
          </ExtendedLink>
          <ExtendedLink to={"/settings"}>
            <Icon>
              <svg
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
                fillRule="evenodd"
                clipRule="evenodd"
                fill="white"
              >
                <path d="M12 8.666c-1.838 0-3.333 1.496-3.333 3.334s1.495 3.333 3.333 3.333 3.333-1.495 3.333-3.333-1.495-3.334-3.333-3.334m0 7.667c-2.39 0-4.333-1.943-4.333-4.333s1.943-4.334 4.333-4.334 4.333 1.944 4.333 4.334c0 2.39-1.943 4.333-4.333 4.333m-1.193 6.667h2.386c.379-1.104.668-2.451 2.107-3.05 1.496-.617 2.666.196 3.635.672l1.686-1.688c-.508-1.047-1.266-2.199-.669-3.641.567-1.369 1.739-1.663 3.048-2.099v-2.388c-1.235-.421-2.471-.708-3.047-2.098-.572-1.38.057-2.395.669-3.643l-1.687-1.686c-1.117.547-2.221 1.257-3.642.668-1.374-.571-1.656-1.734-2.1-3.047h-2.386c-.424 1.231-.704 2.468-2.099 3.046-.365.153-.718.226-1.077.226-.843 0-1.539-.392-2.566-.893l-1.687 1.686c.574 1.175 1.251 2.237.669 3.643-.571 1.375-1.734 1.654-3.047 2.098v2.388c1.226.418 2.468.705 3.047 2.098.581 1.403-.075 2.432-.669 3.643l1.687 1.687c1.45-.725 2.355-1.204 3.642-.669 1.378.572 1.655 1.738 2.1 3.047m3.094 1h-3.803c-.681-1.918-.785-2.713-1.773-3.123-1.005-.419-1.731.132-3.466.952l-2.689-2.689c.873-1.837 1.367-2.465.953-3.465-.412-.991-1.192-1.087-3.123-1.773v-3.804c1.906-.678 2.712-.782 3.123-1.773.411-.991-.071-1.613-.953-3.466l2.689-2.688c1.741.828 2.466 1.365 3.465.953.992-.412 1.082-1.185 1.775-3.124h3.802c.682 1.918.788 2.714 1.774 3.123 1.001.416 1.709-.119 3.467-.952l2.687 2.688c-.878 1.847-1.361 2.477-.952 3.465.411.992 1.192 1.087 3.123 1.774v3.805c-1.906.677-2.713.782-3.124 1.773-.403.975.044 1.561.954 3.464l-2.688 2.689c-1.728-.82-2.467-1.37-3.456-.955-.988.41-1.08 1.146-1.785 3.126" />
              </svg>
            </Icon>
            <Label>설정</Label>
          </ExtendedLink>
        </Category>
        <Footer>We There</Footer>
      </Fragment>
    )}
  </Container>
);

export default MenuPresenter;
