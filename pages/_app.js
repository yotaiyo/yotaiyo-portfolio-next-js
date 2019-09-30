import React from 'react'
import App, { Container } from 'next/app'
import { css, Global } from '@emotion/core'
import { getRepos } from '../lib/api/github'

export default class MyApp extends App {
  static async getInitialProps() {
    const getReposResponse = await getRepos('yotaiyo')
    return {
      getReposResponse
    }
  }

  render() {
    const { Component, getReposResponse } = this.props

    return (
      <Container>
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
        <Component getReposResponse={getReposResponse} />
      </Container>
    )
  }
}
