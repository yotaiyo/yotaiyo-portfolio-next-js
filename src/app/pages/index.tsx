import React from 'react';
import MyLayout from '../components/MyLayout';
import styled from 'styled-components';
import { Profile } from '../components/Profile';
import { History } from '../components/History';
import { Links } from '../components/Links';
import { getRepos } from '../actions/github';
import { connect } from 'react-redux';
import { InitialState } from '../store/makeStore';
import { githubState } from '../reducers/github';
import { ThunkDispatch } from 'redux-thunk';
import { Action } from '../actions/github';

const Wrapper = styled.div`
  margin-bottom: 100px;
`;

type TopProps = {
  github: githubState;
  dispatch: ThunkDispatch<InitialState, undefined, Action>;
};

class Top extends React.Component<TopProps> {
  static async getInitialProps(props: any) {
    if (props.isServer) {
      await props.store.dispatch(getRepos());
    }
    return {};
  }

  // 課金しないとfirebase functionsで外部API叩けないっぽいので応急処置。。。
  componentDidMount() {
    if (this.props.github.hasError) {
      this.props.dispatch(getRepos());
    }
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
