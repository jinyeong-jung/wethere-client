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
    <Route path={"/wethere-client"} exact={true} component={LoggedOutHome} />
    <Route path={"/wethere-client/signup"} exact={true} component={SignUp} />
    <Route
      path={"/wethere-client/signup/verify-phone"}
      component={PhoneVerification}
    />
    <Route path={"/wethere-client/login"} component={LocalLogin} />
    <Route path={"/wethere-client/social-login"} component={SocialLogin} />
    <Redirect from={"*"} to={"/wethere-client/"} />
  </Switch>
);

const LoggedInRoutes: React.SFC = () => (
  <Switch>
    <Route path={"/wethere-client/"} exact={true} component={LoggedInHome} />
    <Route
      path={"/wethere-client/verify-couple"}
      exact={true}
      component={CoupleVerification}
    />
    <Route
      path={"/wethere-client/verify-couple/request"}
      exact={true}
      component={RequestCoupleVerification}
    />
    <Route
      path={"/wethere-client/verify-couple/complete"}
      exact={true}
      component={CompleteCoupleVerification}
    />
    <Route
      path={"/wethere-client/verify-couple/waiting"}
      exact={true}
      component={WaitingCoupleVerification}
    />
    <Route
      path={"/wethere-client/initial-profile"}
      exact={true}
      component={InitialProfile}
    />
    <Route path={"/wethere-client/profile"} exact={true} component={Profile} />
    <Route path={"/wethere-client/chat"} exact={true} component={Chat} />
    <Route
      path={"/wethere-client/chat/:chatId"}
      exact={true}
      component={ChatRoom}
    />
    <Route path={"/wethere-client/chat/add"} exact={true} component={AddChat} />
    <Route path={"/wethere-client/places"} exact={true} component={Places} />
    <Route
      path={"/wethere-client/places/delete/:placeId"}
      exact={true}
      component={DeletePlace}
    />
    <Route path={"/wethere-client/feeds"} exact={true} component={Feeds} />
    <Route
      path={"/wethere-client/feeds/:placeId"}
      exact={true}
      component={PlaceFeeds}
    />
    <Route
      path={"/wethere-client/feeds/:placeId/add"}
      exact={true}
      component={AddFeed}
    />
    <Route
      path={"/wethere-client/feeds/detail/:feedId"}
      exact={true}
      component={FeedDetail}
    />
    <Route
      path={"/wethere-client/settings"}
      exact={true}
      component={Settings}
    />
    <Redirect from={"*"} to={"/wethere-client/"} />
  </Switch>
);

AppPresenter.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired
};

export default AppPresenter;
