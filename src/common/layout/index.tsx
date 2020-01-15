import React from 'react';
import Header from '../components/Header';
import styled from 'styled-components';

const Wrapper = styled.div``;

const MyLayout = (props: { children: React.ReactNode; pathname: string }) => (
  <Wrapper style={{ flex: 1 }}>
    <Header pathname={props.pathname} />
    {props.children}
  </Wrapper>
);

export default MyLayout;
