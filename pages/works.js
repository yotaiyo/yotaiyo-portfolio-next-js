import React from 'react'
import Layout from '../components/MyLayout'
import styled from 'styled-components'

const Wrapper = styled.div``

export default class Works extends React.Component {
  static async getInitialProps() {
    return { a: 'a' }
  }

  render() {
    return (
      <Layout>
        <Wrapper>test</Wrapper>
      </Layout>
    )
  }
}
