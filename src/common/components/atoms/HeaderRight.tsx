import React from 'react';
import styled from 'styled-components';
import { Layout } from 'consts/Layout';
import { Color } from 'consts/Color';
import Link from 'next/link';
import menuIcon from 'public/menu.png';
import { setOverflow } from 'src/common/utils/scroll';

const HeaderRightWrapper = styled.div`
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
  height: 36px;
  margin-top: 4px;
`;

type HeaderRightType = {
  width?: number;
  showMenu: boolean;
  setShowMenu(showMenu: boolean): void;
};

export const HeaderRight: React.FC<HeaderRightType> = props => {
  const { width, showMenu, setShowMenu } = props;
  return (
    <HeaderRightWrapper>
      {width !== undefined ? (
        width <= 414 ? (
          <MenuIcon
            src={menuIcon}
            onClick={() => {
              setOverflow('hidden');
              setShowMenu(!showMenu);
            }}
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
    </HeaderRightWrapper>
  );
};
