import React from 'react';
import styled from 'styled-components';
import { Layout } from '../consts/Layout';
import { Color } from '../consts/Color';
import Link from 'next/link';

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
  font-size: ${Layout.Text.Normal}px;
  @media (max-width: 900px) {
    padding: 10px 0 10px 0;
  }
`;

const HeaderTitle = styled.a`
  font-size: ${Layout.Text.Normal}px;
  margin-left: 40px;
  transition: all 0.5s ease;
  &:hover {
    color: ${Color.Red1};
  }
  @media (max-width: 900px) {
    font-size: ${Layout.Text.Small}px;
  }
`;

const SectionWrapper = styled.div`
  margin-right: 60px;
`;

const Section = styled.a`
  font-size: ${Layout.Text.Normal}px;
  margin-left: 60px;
  transition: all 0.5s ease;
  &:hover {
    color: ${Color.Red1};
  }
  @media (max-width: 900px) {
    font-size: ${Layout.Text.Small}px;
  }
`;

export const Header = () => {
  return (
    <Wrapper>
      <Link href="/">
        <HeaderTitle>yotaiyo`s portfolio</HeaderTitle>
      </Link>
      <SectionWrapper>
        <Link href="/">
          <Section>Top</Section>
        </Link>
        <Link href="/works">
          <Section>Works</Section>
        </Link>
      </SectionWrapper>
    </Wrapper>
  );
};

export default Header;
