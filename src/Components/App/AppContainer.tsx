import React, { Fragment } from "react";
import { graphql } from "react-apollo";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { ThemeProvider } from "src/typed-components";
import GlobalStyle from "../../global-styles";
import theme from "../../theme";
import AppPresenter from "./AppPresenter";
import { IS_LOGGED_IN } from "./AppQueries";

const AppContainer = ({ data }) => (
  <React.Fragment>
    <ThemeProvider theme={theme}>
      <Fragment>
        <GlobalStyle />
        <AppPresenter isLoggedIn={data.auth.isLoggedIn} />
      </Fragment>
    </ThemeProvider>
    <ToastContainer
      position={"bottom-center"}
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick={true}
      rtl={false}
      draggable={true}
      pauseOnHover={true}
    />
  </React.Fragment>
);

export default graphql(IS_LOGGED_IN)(AppContainer);
