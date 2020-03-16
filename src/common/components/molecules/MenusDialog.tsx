import React from 'react';
import styled from 'styled-components';
import { Layout } from 'consts/Layout';
import { Color } from 'consts/Color';
import Link from 'next/link';
import { setOverflow } from 'src/common/utils/scroll';
import clearIcon from 'public/clear.png';

const MenusWrapper = styled.div`
  background-color: red;
  height: 100%;
  width: 100%;
  position: fixed;
  z-index: 2;
  background-color: ${Color.Blue1};
  animation-name: fade-in-menus;
  animation-duration: 0.3s;
  animation-timing-function: ease-out;
  @keyframes fade-in-menus {
    0% {
      opacity: 0;
      transform: translate3d(100px, 0, 0);
    }
    100% {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }
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

const ClearIcon = styled.img`
  position: fixed;
  top: 12px;
  right: 10px;
  z-index: 3;
`;

export type MenusDialogProps = {
  pathname: string;
  showMenu: boolean;
  setShowMenu(showMenu: boolean): void;
};

export const MenusDialog = (props: MenusDialogProps) => {
  const { pathname, showMenu, setShowMenu } = props;
  return (
    <MenusWrapper>
      <ClearIcon
        src={clearIcon}
        alt="clear"
        onClick={() => {
          setOverflow('visible');
          setShowMenu(!showMenu);
        }}
      />
      <Menus>
        <Link href="/">
          <Menu
            isCurrentPath={pathname === '/'}
            onClick={() => {
              setOverflow('visible');
            }}
          >
            Top
          </Menu>
        </Link>
        <Link href="/works">
          <Menu
            isCurrentPath={props.pathname === '/works'}
            onClick={() => {
              setOverflow('visible');
            }}
          >
            Works
          </Menu>
        </Link>
      </Menus>
    </MenusWrapper>
  );
};
