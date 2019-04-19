import React, { Fragment } from "react";
import { graphql } from "react-apollo";
import GlobalStyle from "../../global-styles";
import AppPresenter from "./AppPresenter";
import { IS_LOGGED_IN } from "./AppQueries";

const AppContainer = ({ data }) => (
  <Fragment>
    <GlobalStyle />
    <AppPresenter isLoggedIn={data.auth.isLoggedIn} />
  </Fragment>
);

export default graphql(IS_LOGGED_IN)(AppContainer);
