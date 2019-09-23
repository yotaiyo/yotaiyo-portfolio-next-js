import Layout from '../components/MyLayout'
import styled from 'styled-components'
import { Profile } from '../components/Profile'

const Wrapper = styled.div`
  padding-top: 200px;
  padding-bottom: 200px;
  text-align: center;
`

export default () => (
  <Layout>
    <Wrapper>
      <Profile />
    </Wrapper>
  </Layout>
)
