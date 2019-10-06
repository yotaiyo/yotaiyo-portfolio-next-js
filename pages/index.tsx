import React from 'react';
import MyLayout from '../src/components/MyLayout';
import styled from 'styled-components';
import { Profile } from '../src/components/Profile';
import { History } from '../src/components/History';
import { Links } from '../src/components/Links';

const Wrapper = styled.div`
  margin-bottom: 100px;
`;

const Top = () => (
  <MyLayout>
    <Wrapper>
      <Profile />
      <History />
      <Links />
    </Wrapper>
  </MyLayout>
);

export default Top;
