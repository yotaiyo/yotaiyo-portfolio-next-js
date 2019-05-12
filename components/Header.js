import Link from 'next/link'
import styled from 'styled-components'
import homeImage from '../images/home.png'
import aboutImage from '../images/about.png'
import skillsImage from '../images/skills.png'
import reposImage from '../images/github.png'

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 30px;
  padding-bottom: 30px;
  box-shadow: 0px 5px 10px -3px rgba(0,0,0,0.5);
  background-color: white;
`

const SectionWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 70px;
  margin-right: 70px;
`

const Icon = styled.img`
  width: 20px;
  height: 20px;
  margin-top: 5px;
`

const Body = styled.div`
  font-size: 20px;
  margin-left: 8px;
  font-family: 'Vollkorn', serif;
`

const Section = ({ src, alt, body, href }) => (
  <Link href={href}>
    <SectionWrapper>
      <Icon src={src} alt={alt} />
      <Body>{body}</Body>
    </SectionWrapper>
  </Link>
)

const Header = () => (
    <Wrapper>
      <Section src={homeImage} alt='home' body='Home' href='/' />
      <Section src={aboutImage} alt='about' body='About' href='/about' />
      <Section src={skillsImage} alt='skills' body='Skills' href='/about' />
      <Section src={reposImage} alt='repos' body='Repos' href='/about' />
    </Wrapper>
)

export default Header