import React, { useState } from 'react';
import styled from 'styled-components';
import { Layout } from 'consts/Layout';
import { Color } from 'consts/Color';
import Link from 'next/link';
import menuIcon from 'public/menu.png';

const Wrapper = styled.div`
  // box-shadow: 0px 5px 5px -5px rgb(0, 0, 0, 0.5);
  background-color: ${Color.Blue1};
  position: fixed;
  width: 100%;
  z-index: 1;
  padding: 20px 0 20px 0;
  color: ${Color.White};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
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

const MenusWrapper = styled.div`
  padding-top: 58px;
  position: fixed;
  width: 100%;
  // background-color: ${Color.Blue1};
  background-color: rgba(0, 0, 0, 0.5);
  box-shadow: 0px 5px 5px -5px rgb(0, 0, 0, 0.5);
`;

const Menus = styled.div`
  display: flex;
  justify-content: center;
`;

const Menu = styled.div`
  &:first-child {
    margin-left: 0;
  }
  width: 60px;
  height: 20x;
  margin-left: 60px;
  color: ${Color.Blue1};
  background-color: ${Color.White};
  font-size: ${Layout.Text.Smaller}px;
  padding: 6px;
  margin-top: 10px;
  margin-bottom: 15px;
  text-align: center;
  border-radius: 8px;
`;

export const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <Wrapper>
        <HeaderTitleWrapper>
          <Link href="/">
            <HeaderTitle>yotaiyo`s portfolio</HeaderTitle>
          </Link>
        </HeaderTitleWrapper>
        <SectionWrapper>
          <MenuIcon
            src={menuIcon}
            onClick={() => setShowMenu(!showMenu)}
            alt="menu"
          />
          {/* <Link href="/">
            <Section>Top</Section>
          </Link>
          <Link href="/works">
            <Section>Works</Section>
          </Link> */}
        </SectionWrapper>
      </Wrapper>
      {showMenu ? (
        <MenusWrapper>
          <Menus>
            <Link href="/">
              <Menu>Top</Menu>
            </Link>
            <Link href="/works">
              <Menu>Works</Menu>
            </Link>
          </Menus>
        </MenusWrapper>
      ) : null}
    </>
  );
};

export default Header;
