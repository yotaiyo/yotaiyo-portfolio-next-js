import Link from 'next/link'
import styled from 'styled-components'
import homeIcon from '../images/home.png'

const HomeIcon = styled.img``

const Header = () => (
    <div>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
        <HomeIcon src={homeIcon} />
    </div>
)

export default Header