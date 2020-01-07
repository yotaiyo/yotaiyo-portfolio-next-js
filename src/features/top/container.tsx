import React from 'react';
import MyLayout from 'src/common/components/MyLayout';
import styled from 'styled-components';
import { Profile } from './components/templates/Profile';
import { History } from './components/templates/History';
import { Links } from './components/templates/Links';

const Wrapper = styled.div`
  margin-bottom: 100px;
`;

export const TopContainer = () => {
  return (
    <MyLayout>
      <Wrapper>
        <Profile />
        <History />
        <Links />
      </Wrapper>
    </MyLayout>
  );
};
