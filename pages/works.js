import React from 'react'
import Layout from '../components/MyLayout'
import styled from 'styled-components'
import Octokit from '@octokit/rest'

const Wrapper = styled.div``

const getReposFromAPI = async userName => {
  const octokit = new Octokit()
  let res
  try {
    res = await octokit.search.repos({ q: `user:${userName}` })
    return {
      success: {
        repos: res.data.items
      },
      hasError: false
    }
  } catch (e) {
    return {
      success: null,
      hasError: true
    }
  }
}

const getReposActions = async () => {
  const repos = await getReposFromAPI('yotaiyo')
  if (repos.hasError) {
    return 'error'
  } else {
    return repos.success.repos
  }
}

export default class Works extends React.Component {
  static async getInitialProps() {
    const repos = await getReposActions()
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
