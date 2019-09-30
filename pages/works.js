import React from 'react'
import Layout from '../components/MyLayout'
import styled from 'styled-components'
import Octokit from '@octokit/rest'

const Wrapper = styled.div``

export async function getRepos(userName) {
  const octokit = new Octokit()

  const res = await octokit.search.repos({ q: `user:${userName}` })
  const repos = res.data.items

  return repos
}

export default class Works extends React.Component {
  static async getInitialProps() {
    const repos = await getRepos('yotaiyo')
    return {
      repos
    }
  }

  render() {
    const { repos } = this.props
    console.log(repos)
    return (
      <Layout>
        <Wrapper>test</Wrapper>
      </Layout>
    )
  }
}
