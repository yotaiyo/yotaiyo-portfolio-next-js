import Link from 'next/link'
import styled from 'styled-components'
import homeIcon from '../images/home.png'

const Icon = styled.img`
  width: 30px;
  height: 30px;
`

const Body = styled.div``

const Header = () => (
    <div>
      <Link href="/">
        <Icon src={homeIcon} alt='homeIcon' />
      </Link>
      <Link href="/">
        <Body>Home</Body>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
    </div>
)

export default Header