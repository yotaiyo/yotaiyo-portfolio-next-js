import React from "react";
import App, { Container } from "next/app";
import { css, Global } from "@emotion/core";

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <Global
          styles={css`
            body {
              margin: 0;
              flex: 1;
              background: linear-gradient(90deg, #FA709A, #FBAB7E, #F7CE68);
              font-family: 'Vollkorn', serif;
            }
          `}
        />
        <Component {...pageProps}/>
      </Container>
    );
  }
}