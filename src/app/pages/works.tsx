import React from 'react';
import { getRepos } from '../actions/github';
import { githubState } from '../reducers/github';
import { Works } from '../components/Works';
import { connect } from 'react-redux';
import { InitialState } from '../store/makeStore';
import { ThunkDispatch } from 'redux-thunk';
import { Action } from '../actions/github';

type WorksProps = {
  github: githubState;
  dispatch: ThunkDispatch<InitialState, undefined, Action>;
};

type WorksState = {
  showDetail: boolean[];
};

class WorksContainer extends React.Component<WorksProps, WorksState> {
  static async getInitialProps(props: any) {
    await props.store.dispatch(getRepos());
    return {};
  }

  constructor(props: WorksProps) {
    super(props);
    this.state = {
      showDetail: new Array(10).fill(false)
    };
  }

  componentDidMount() {
    if (this.props.github.hasError) {
      this.props.dispatch(getRepos());
    }
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
