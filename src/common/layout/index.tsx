import React from 'react';
import { Header, HeaderProps } from '../components/molecules/Header';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

type MyLayoutProps = HeaderProps & {
  children: React.ReactNode;
};

const MyLayout = (props: MyLayoutProps) => (
  <Wrapper>
    <Header pathname={props.pathname} />
    {props.children}
  </Wrapper>
);

export default MyLayout;
