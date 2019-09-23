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
              font-family: -apple-system, BlinkMacSystemFont, Roboto,
                Hiragino Sans, sans-serif;
            }
          `}
        />
        <Component {...pageProps} />
      </Container>
    )
  }
}
