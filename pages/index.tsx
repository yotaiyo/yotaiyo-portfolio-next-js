import React from 'react';
import MyLayout from 'src/common/layout';
import styled from 'styled-components';
import { Profile } from 'src/features/top/components/templates/Profile';
import { History } from 'src/features/top/components/templates/History';
import { Links } from 'src/features/top/components/templates/Links';

const Wrapper = styled.div`
  margin-bottom: 100px;
`;

const TopContainer = () => {
  return (
    <MyLayout pathname={'/'}>
      <Wrapper>
        <Profile />
        <History />
        <Links />
      </Wrapper>
    </MyLayout>
  );
};

export default TopContainer;
