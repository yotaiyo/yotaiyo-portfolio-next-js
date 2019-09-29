import React from 'react'
import styled from 'styled-components'
import { Layout } from '../consts/Layout'

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  box-shadow: 0px 5px 5px -5px #54595d;
  background-color: #00abb3;
  position: fixed;
  width: 100%;
  z-index: 1;
  padding: 20px 0 20px 0;
  color: #fff;
  font-size: ${Layout.Text.Normal}px;
`

const HeaderTitle = styled.div`
  font-size: ${Layout.Text.Normal}px;
  margin-left: 40px;
  transition: all 0.5s ease;
  &:hover {
    color: #cc0066;
  }
`

const SectionWrapper = styled.div`
  margin-right: 60px;
`

const Section = styled.span`
  font-size: ${Layout.Text.Normal}px;
  margin-left: 60px;
  transition: all 0.5s ease;
  &:hover {
    color: #cc0066;
  }
`

export const Header = () => {
  return (
    <Wrapper>
      <HeaderTitle>yotaiyo`s portfolio</HeaderTitle>
      <SectionWrapper>
        <Section>Top</Section>
        <Section>Works</Section>
      </SectionWrapper>
    </Wrapper>
  )
}

export default Header
