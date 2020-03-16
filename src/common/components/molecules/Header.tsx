import React, { useState } from 'react';
import styled from 'styled-components';
import { Layout } from 'consts/Layout';
import { Color } from 'consts/Color';
import Link from 'next/link';
import { HeaderRight } from '../atoms/HeaderRight';
// @ts-ignore
import useDimensions from 'react-use-dimensions';
import clearIcon from 'public/clear.png';

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
    padding: 6px 0 6px 0;
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

const ClearIcon = styled.img`
  position: absolute;
  top: 12px;
  right: 10px;
`;

const MenusWrapper = styled.div`
  background-color: red;
  height: 100%;
  width: 100%;
  position: fixed;
  z-index: 2;
  background-color: ${Color.Blue1};
`;

const Menus = styled.div`
  position: relative;
  top: 50%;
  left: 50%;
  transform: translateY(-50%);
  width: 100%;
`;

type MenuType = {
  isCurrentPath: boolean;
};

const Menu = styled.div.attrs((props: MenuType) => ({
  isCurrentPath: props.isCurrentPath
}))`
  &:first-child {
    margin-top: 0;
  }
  margin-top: 30px;
  width: 60px;
  text-align: center;
  color: ${props => (props.isCurrentPath ? Color.Red1 : Color.White)};
  font-size: ${Layout.Text.Large}px;
  transform: translateX(-50%);
`;

type HeaderProps = {
  pathname: string;
};

export const Header = (props: HeaderProps) => {
  const [showMenu, setShowMenu] = useState(false);
  const [ref, { width }] = useDimensions();

  return (
    <>
      <Wrapper showMenu={showMenu} ref={ref}>
        <HeaderTitleWrapper>
          <Link href="/">
            <HeaderTitle>yotaiyo`s portfolio</HeaderTitle>
          </Link>
        </HeaderTitleWrapper>
        <HeaderRight
          width={width}
          showMenu={showMenu}
          setShowMenu={setShowMenu}
        />
      </Wrapper>
      {showMenu ? (
        <MenusWrapper>
          <ClearIcon
            src={clearIcon}
            alt="clear"
            onClick={() => setShowMenu(!showMenu)}
          />
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
