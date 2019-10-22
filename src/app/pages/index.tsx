import React from 'react';
import MyLayout from '../components/MyLayout';
import styled from 'styled-components';
import { Profile } from '../components/Profile';
import { History } from '../components/History';
import { Links } from '../components/Links';
import { getRepos } from '../actions/github';

const Wrapper = styled.div`
  margin-bottom: 100px;
`;

class Top extends React.Component {
  static async getInitialProps(props: any) {
    if (props.isServer) {
      await props.store.dispatch(getRepos());
    }
    return {};
  }

  render() {
    return (
      <MyLayout>
        <Wrapper>
          <Profile />
          <History />
          <Links />
        </Wrapper>
      </MyLayout>
    );
  }
}

export default Top;
