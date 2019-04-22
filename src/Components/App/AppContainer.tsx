import React, { Fragment } from "react";
import { graphql } from "react-apollo";
import { ThemeProvider } from "src/typed-components";
import GlobalStyle from "../../global-styles";
import theme from "../../theme";
import AppPresenter from "./AppPresenter";
import { IS_LOGGED_IN } from "./AppQueries";

const AppContainer = ({ data }) => (
  <ThemeProvider theme={theme}>
    <Fragment>
      <GlobalStyle />
      <AppPresenter isLoggedIn={data.auth.isLoggedIn} />
    </Fragment>
  </ThemeProvider>
);

export default graphql(IS_LOGGED_IN)(AppContainer);
