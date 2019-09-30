import MyLayout from '../components/MyLayout'
import styled from 'styled-components'
import { Profile } from '../components/Profile'
import { History } from '../components/History'
import { Links } from '../components/Links'

const Wrapper = styled.div`
  margin-bottom: 100px;
`

export default () => (
  <MyLayout>
    <Wrapper>
      <Profile />
      <History />
      <Links />
    </Wrapper>
  </MyLayout>
)
