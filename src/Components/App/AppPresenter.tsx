import PropTypes from "prop-types";
import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import AddChat from "../../Routes/AddChat";
import AddFeed from "../../Routes/AddFeed";
import Chat from "../../Routes/Chat";
import ChatRoom from "../../Routes/ChatRoom";
import CompleteCoupleVerification from "../../Routes/CompleteCoupleVerification";
import CoupleVerification from "../../Routes/CoupleVerification";
import DeletePlace from "../../Routes/DeletePlace";
import FeedDetail from "../../Routes/FeedDetail";
import Feeds from "../../Routes/Feeds";
import InitialProfile from "../../Routes/InitialProfile";
import LocalLogin from "../../Routes/LocalLogin";
import LoggedInHome from "../../Routes/LoggedInHome";
import LoggedOutHome from "../../Routes/LoggedOutHome";
import PhoneVerification from "../../Routes/PhoneVerification";
import PlaceFeeds from "../../Routes/PlaceFeeds";
import Places from "../../Routes/Places";
import Profile from "../../Routes/Profile";
import RequestCoupleVerification from "../../Routes/RequestCoupleVerification";
import Settings from "../../Routes/Settings";
import SignUp from "../../Routes/SignUp";
import SocialLogin from "../../Routes/SocialLogin";
import WaitingCoupleVerification from "../../Routes/WaitingCoupleVerification";

interface IProps {
  isLoggedIn: boolean;
}

const AppPresenter: React.SFC<IProps> = ({ isLoggedIn }) => (
  <BrowserRouter>
    {isLoggedIn ? <LoggedInRoutes /> : <LoggedOutRoutes />}
  </BrowserRouter>
);

const LoggedOutRoutes: React.SFC = () => (
  <Switch>
    <Route path={"/"} exact={true} component={LoggedOutHome} />
    <Route path={"/signup"} exact={true} component={SignUp} />
    <Route path={"/signup/verify-phone"} component={PhoneVerification} />
    <Route path={"/login"} component={LocalLogin} />
    <Route path={"/social-login"} component={SocialLogin} />
    <Redirect from={"*"} to={"/"} />
  </Switch>
);

const LoggedInRoutes: React.SFC = () => (
  <Switch>
    <Route path={"/"} exact={true} component={LoggedInHome} />
    <Route
      path={"/verify-couple"}
      exact={true}
      component={CoupleVerification}
    />
    <Route
      path={"/verify-couple/request"}
      exact={true}
      component={RequestCoupleVerification}
    />
    <Route
      path={"/verify-couple/complete"}
      exact={true}
      component={CompleteCoupleVerification}
    />
    <Route
      path={"/verify-couple/waiting"}
      exact={true}
      component={WaitingCoupleVerification}
    />
    <Route path={"/initial-profile"} exact={true} component={InitialProfile} />
    <Route path={"/profile"} exact={true} component={Profile} />
    <Route path={"/chat"} exact={true} component={Chat} />
    <Route path={"/chat/:chatId"} exact={true} component={ChatRoom} />
    <Route path={"/chat/add"} exact={true} component={AddChat} />
    <Route path={"/places"} exact={true} component={Places} />
    <Route
      path={"/places/delete/:placeId"}
      exact={true}
      component={DeletePlace}
    />
    <Route path={"/feeds"} exact={true} component={Feeds} />
    <Route path={"/feeds/:placeId"} exact={true} component={PlaceFeeds} />
    <Route path={"/feeds/:placeId/add"} exact={true} component={AddFeed} />
    <Route path={"/feeds/detail/:feedId"} exact={true} component={FeedDetail} />
    <Route path={"/settings"} exact={true} component={Settings} />
    <Redirect from={"*"} to={"/"} />
  </Switch>
);

AppPresenter.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired
};

export default AppPresenter;
