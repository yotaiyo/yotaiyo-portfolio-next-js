import React from 'react';
import styled from 'styled-components';
import { Layout } from 'consts/Layout';
import { Color } from 'consts/Color';
import Link from 'next/link';
import menuIcon from 'public/menu.png';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  box-shadow: 0px 5px 5px -5px rgb(0, 0, 0, 0.5);
  background-color: ${Color.Blue1};
  position: fixed;
  width: 100%;
  z-index: 1;
  padding: 20px 0 20px 0;
  color: ${Color.White};
  @media (max-width: 414px) {
    padding: 10px 0 12px 0;
  }
`;

const HeaderTitleWrapper = styled.div`
  display: flex;
  flex-direction; column;
  justify-content: center;
  align-items: center;
`;

const HeaderTitle = styled.a`
  margin-left: 40px;
  transition: all 0.5s ease;
  font-size: ${Layout.Text.Normal}px;
  height: ${Layout.Text.Normal}px;
  &:hover {
    color: ${Color.Red1};
  }
  @media (max-width: 414px) {
    font-size: ${Layout.Text.Small}px;
    height: ${Layout.Text.Small}px;
    margin-left: 10px;
  }
`;

const SectionWrapper = styled.div`
  margin-right: 60px;
  @media (max-width: 414px) {
    margin-right: 10px;
  }
`;

const Section = styled.a`
  margin-left: 60px;
  transition: all 0.5s ease;
  &:hover {
    color: ${Color.Red1};
  }
  @media (max-width: 414px) {
    margin-left: 25px;
  }
`;

const MenuIcon = styled.img`
  height: 24px;
  margin-top: 4px;
`;

export const Header = () => {
  return (
    <Wrapper>
      <HeaderTitleWrapper>
        <Link href="/">
          <HeaderTitle>yotaiyo`s portfolio</HeaderTitle>
        </Link>
      </HeaderTitleWrapper>
      <SectionWrapper>
        <MenuIcon src={menuIcon} />
        {/* <Link href="/">
          <Section>Top</Section>
        </Link>
        <Link href="/works">
          <Section>Works</Section>
        </Link> */}
      </SectionWrapper>
    </Wrapper>
  );
};

export default Header;
