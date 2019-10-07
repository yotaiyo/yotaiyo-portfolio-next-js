import React from 'react';
import App from 'next/app';
import { css, Global } from '@emotion/core';
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';
import { makeStore } from '../store/makeStore';
import { Store } from 'redux';

type AppProps = {
  store: Store;
};

class MyApp extends App<AppProps> {
  render() {
    const { Component, pageProps, store } = this.props;
    return (
      <Provider store={store}>
        <Component {...pageProps} />
        <Global
          styles={css`
            body {
              margin: 0;
              flex: 1;
              font-family: -apple-system, BlinkMacSystemFont, Roboto,
                Hiragino Sans, sans-serif;
              font-weight: 250;
              letter-spacing: 1px;
            }
          `}
        />
      </Provider>
    );
  }
}

export default withRedux(makeStore)(MyApp);
