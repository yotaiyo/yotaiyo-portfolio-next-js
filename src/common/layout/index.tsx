import React from 'react';
import { Header, HeaderProps } from '../components/molecules/Header';
import styled from 'styled-components';

const Wrapper = styled.div``;

type MyLayoutProps = HeaderProps & {
  children: React.ReactNode;
};

const MyLayout = (props: MyLayoutProps) => (
  <Wrapper style={{ flex: 1 }}>
    <Header pathname={props.pathname} />
    {props.children}
  </Wrapper>
);

export default MyLayout;
