import React from 'react';
import { getRepos, Action } from './actions';
import { GithubState } from './reducers';
import { Works } from './components/Works';
import { InitialState } from 'src/common/types/state';
import { ThunkDispatch } from 'redux-thunk';
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
    window.open(url, '_blank', 'noopener');
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
