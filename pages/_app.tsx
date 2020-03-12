import React from 'react';
import App from 'next/app';
import { css, Global } from '@emotion/core';

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Component {...pageProps} />
        <Global
          styles={css`
            body {
              margin: 0;
              flex: 1;
              font-family: -apple-system, BlinkMacSystemFont, Roboto,
                Hiragino Sans, sans-serif;
            }
          `}
        />
      </>
    );
  }
}

export default MyApp;
