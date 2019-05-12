import Header from './Header'
import styled from 'styled-components'

const Wrapper = styled.div``

const Layout = (props) => (
  <Wrapper>
    <Header />
    {props.children}
  </Wrapper>
)

export default Layout