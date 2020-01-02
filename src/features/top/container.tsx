import React from 'react';
import MyLayout from 'src/common/components/MyLayout';
import styled from 'styled-components';
import { Profile } from './components/Profile';
import { History } from './components/History';
import { Links } from './components/Links';
import { Action } from 'src/features/works/actions';
import { GithubState } from 'src/common/types/state';
import { InitialState } from 'src/common/types/state';
import { ThunkDispatch } from 'redux-thunk';

const Wrapper = styled.div`
  margin-bottom: 100px;
`;

type TopProps = {
  github: GithubState;
  dispatch: ThunkDispatch<InitialState, undefined, Action>;
};

class Top extends React.Component<TopProps> {
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
