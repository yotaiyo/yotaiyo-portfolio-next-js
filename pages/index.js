import Layout from '../components/MyLayout'
import styled from 'styled-components'
import { Profile } from '../components/Profile'
import { History } from '../components/History'

const Wrapper = styled.div`
  text-align: center;
`

export default () => (
  <Layout>
    <Wrapper>
      <Profile />
      <History />
    </Wrapper>
  </Layout>
)
