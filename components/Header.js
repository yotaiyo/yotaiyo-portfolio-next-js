import React, { Component } from 'react'
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
  box-shadow: 0px 5px 10px -3px rgba(0,0,0,0.5);
  background-color: white;
`

const SectionWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 50px;
  padding-right: 50px;
  @media (max-width: 768px) {
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 20px;
    padding-right: 20px;
  }
`

const Icon = styled.img`
  width: 20px;
  height: 20px;
  margin-top: 5px;
  @media (max-width: 768px) {
    width: 10px;
    height: 10px;
    margin-top: 4px;
  }
`

const Body = styled.div`
  font-size: 20px;
  margin-left: 8px;
  font-family: 'Vollkorn', serif;
  @media (max-width: 768px) {
    font-size: 12px;
  }
`

const Section = ({ src, alt, body, href, onMouseOver, onMouseOut, onMouse }) => {
  return (
  <Link href={href}>
    <SectionWrapper onMouseOver={onMouseOver} onMouseOut={onMouseOut} style={onMouse ? {backgroundColor: 'rgb(238,238,238)'} : {}}>
      <Icon src={src} alt={alt} />
      <Body>{body}</Body>
    </SectionWrapper>
  </Link>
)}
export class Header extends Component {
  constructor(props){
    super(props);

  this.state = {  onMouseHome: false,
                  onMouseAbout: false,
                  onMouseSkills: false,
                  onMouseRepos: false }
  }

  render() {
  return (
    <Wrapper>
      <Section 
        src={homeImage} 
        alt='home' 
        body='Home' 
        href='/'
        onMouseOver={() => this.setState({ onMouseHome: true  })}
        onMouseOut={() => this.setState({ onMouseHome: false })}
        onMouse={this.state.onMouseHome}
      />
      <Section 
        src={aboutImage} 
        alt='about' 
        body='About' 
        href='/about' 
        onMouseOver={() => this.setState({ onMouseAbout: true  })}  
        onMouseOut={() => this.setState({ onMouseAbout: false })}
        onMouse={this.state.onMouseAbout}
      />
      <Section 
        src={skillsImage} 
        alt='skills' 
        body='Skills' 
        href='/skills' 
        onMouseOver={() => this.setState({ onMouseSkills: true  })}
        onMouseOut={() => this.setState({ onMouseSkills: false })}
        onMouse={this.state.onMouseSkills}
      />
      <Section 
        src={reposImage} 
        alt='repos' 
        body='Repos' 
        href='/repos'
        onMouseOver={() => this.setState({ onMouseRepos: true  })}  
        onMouseOut={() => this.setState({ onMouseRepos: false })}
        onMouse={this.state.onMouseRepos}
      />
    </Wrapper>

  )
}}

export default Header