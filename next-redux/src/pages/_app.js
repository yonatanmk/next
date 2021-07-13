import React from "react";
import App from "next/app";
import { Provider } from "react-redux";
import { store } from "../app/store";

class AppWrapper extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    );
  }
}

export default AppWrapper;
