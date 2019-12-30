import React from 'react';
import MyLayout from 'src/common/components/MyLayout';
import styled from 'styled-components';
import { Profile } from './components/Profile';
import { History } from './components/History';
import { Links } from './components/Links';
import { getRepos, Action } from 'src/features/works/actions';
import { GithubState } from 'src/features/works/reducers';
import { connect } from 'react-redux';
import { InitialState } from 'src/app/makeStore';
import { ThunkDispatch } from 'redux-thunk';

const Wrapper = styled.div`
  margin-bottom: 100px;
`;

type TopProps = {
  github: GithubState;
  dispatch: ThunkDispatch<InitialState, undefined, Action>;
};

class Top extends React.Component<TopProps> {
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

export default connect((state: InitialState) => state)(Top);
