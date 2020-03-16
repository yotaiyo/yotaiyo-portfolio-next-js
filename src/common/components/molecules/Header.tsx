import React, { useState } from 'react';
import styled from 'styled-components';
import { Layout } from 'consts/Layout';
import { Color } from 'consts/Color';
import Link from 'next/link';
import { HeaderRight } from '../atoms/HeaderRight';
// @ts-ignore
import useDimensions from 'react-use-dimensions';
import {
  MenusDialog,
  MenusDialogProps
} from 'src/common/components/molecules/MenusDialog';

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

export type HeaderProps = {
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
        <MenusDialog
          pathname={props.pathname}
          showMenu={showMenu}
          setShowMenu={setShowMenu}
        />
      ) : null}
    </>
  );
};
