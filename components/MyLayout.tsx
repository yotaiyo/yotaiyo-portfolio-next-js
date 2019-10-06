import React from 'react';
import Header from './Header';
import styled from 'styled-components';

const Wrapper = styled.div``;

const MyLayout = props => (
  <Wrapper style={{ flex: 1 }}>
    <Header />
    {props.children}
  </Wrapper>
);

export default MyLayout;
