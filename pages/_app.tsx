import React from 'react'
import App, { Container } from 'next/app'
import { css, Global } from '@emotion/core'

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props

    return (
      <Container>
        <Global
          styles={css`
            body {
              margin: 0;
              flex: 1;
              background: linear-gradient(90deg, #fa709a, #fbab7e, #f7ce68);
              font-family: 'Vollkorn', serif;
            }
          `}
        />
        <Component {...pageProps} />
      </Container>
    )
  }
}
