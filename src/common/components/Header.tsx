import React, { useState } from 'react';
import styled from 'styled-components';
import { Layout } from 'consts/Layout';
import { Color } from 'consts/Color';
import Link from 'next/link';
import menuIcon from 'public/menu.png';
import { useRect } from 'src/common/utils/useRect';

type WrapperType = {
  showMenu: boolean;
};

const Wrapper = styled.div.attrs((props: WrapperType) => ({
  showMenu: props.showMenu
}))`
  box-shadow: ${props =>
    props.showMenu ? null : '0px 5px 5px -5px rgb(0, 0, 0, 0.5)'};
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
  font-size: ${Layout.Text.Normal}px;
  transition: all 0.5s ease;
  &:hover {
    color: ${Color.Red1};
  }
  @media (max-width: 414px) {
    font-size: ${Layout.Text.Small}px;
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
  font-size: ${Layout.Text.Normal}px;
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
  animation-name: fade-in;
  animation-duration: 0.5s;
  animation-timing-function: ease-out;
  @keyframes fade-in {
    0% {
      opacity: 0;
      transform: translate3d(0, -20px, 0);
    }
    100% {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }
`;

const Menus = styled.div`
  display: flex;
  justify-content: center;
`;

type MenuType = {
  isCurrentPath: boolean;
};

const Menu = styled.div.attrs((props: MenuType) => ({
  isCurrentPath: props.isCurrentPath
}))`
  &:first-child {
    margin-left: 0;
  }
  width: 60px;
  height: 20x;
  margin-left: 60px;
  color: ${props => (props.isCurrentPath ? Color.White : Color.Blue1)};
  background-color: ${props =>
    props.isCurrentPath ? Color.Blue1 : Color.White};
  font-size: ${Layout.Text.Smaller}px;
  padding: 6px;
  margin-top: 10px;
  margin-bottom: 15px;
  text-align: center;
  border-radius: 8px;
`;

type HeaderProps = {
  pathname: string;
};

export const Header = (props: HeaderProps) => {
  const [showMenu, setShowMenu] = useState(false);
  const { ref, rect } = useRect();

  return (
    <>
      <Wrapper showMenu={showMenu} ref={ref}>
        <HeaderTitleWrapper>
          <Link href="/">
            <HeaderTitle>yotaiyo`s portfolio</HeaderTitle>
          </Link>
        </HeaderTitleWrapper>
        <SectionWrapper>
          {rect ? (
            rect.width <= 375 ? (
              <MenuIcon
                src={menuIcon}
                onClick={() => setShowMenu(!showMenu)}
                alt="menu"
              />
            ) : (
              <>
                <Link href="/">
                  <Section>Top</Section>
                </Link>
                <Link href="/works">
                  <Section>Works</Section>
                </Link>
              </>
            )
          ) : null}
        </SectionWrapper>
      </Wrapper>
      {showMenu ? (
        <MenusWrapper>
          <Menus>
            <Link href="/">
              <Menu isCurrentPath={props.pathname === '/'}>Top</Menu>
            </Link>
            <Link href="/works">
              <Menu isCurrentPath={props.pathname === '/works'}>Works</Menu>
            </Link>
          </Menus>
        </MenusWrapper>
      ) : null}
    </>
  );
};

export default Header;
