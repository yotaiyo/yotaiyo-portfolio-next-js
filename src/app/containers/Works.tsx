import React from 'react';
import { getRepos } from '../actions/github';
import { GithubState } from '../reducers/github';
import { Works } from '../components/Works';
import { InitialState } from '../store/makeStore';
import { ThunkDispatch } from 'redux-thunk';
import { Action } from '../actions/github';
import { connect } from 'react-redux';

type WorksProps = {
  github: GithubState;
  dispatch: ThunkDispatch<InitialState, undefined, Action>;
};

type WorksState = {
  showDetail: boolean[];
};

class WorksContainer extends React.Component<WorksProps, WorksState> {
  static async getInitialProps(props: any) {
    if (props.store.getState().github.hasError) {
      await props.store.dispatch(getRepos());
    }
    return {};
  }

  constructor(props: WorksProps) {
    super(props);
    this.state = {
      showDetail: new Array(10).fill(false)
    };
  }

  onClickDetailButton = (index: number) => {
    let showDetail = this.state.showDetail;
    showDetail[index] = !showDetail[index];
    this.setState({ showDetail });
  };

  openNewWindowWithUrl = (url: string) => {
    window.open(url, '_blank');
  };

  render() {
    const { showDetail } = this.state;
    return (
      <Works
        showDetail={showDetail}
        onClickDetailButton={this.onClickDetailButton}
        openNewWindowWithUrl={this.openNewWindowWithUrl}
      />
    );
  }
}

export default connect((state: InitialState) => state)(WorksContainer);
