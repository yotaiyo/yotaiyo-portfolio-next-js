import React from 'react';
import MyLayout from 'src/common/layout';
import styled from 'styled-components';
import { Profile } from './components/templates/Profile';
import { History } from './components/templates/History';
import { Links } from './components/templates/Links';
import { NextPage } from 'next';

const Wrapper = styled.div`
  margin-bottom: 100px;
`;

type TopContainerProps = {
  pathname: string;
};

const TopContainer: NextPage<TopContainerProps> = props => {
  return (
    <MyLayout pathname={props.pathname}>
      <Wrapper>
        <Profile />
        <History />
        <Links />
      </Wrapper>
    </MyLayout>
  );
};

TopContainer.getInitialProps = async (props: any) => {
  return { pathname: props.pathname };
};

export default TopContainer;
