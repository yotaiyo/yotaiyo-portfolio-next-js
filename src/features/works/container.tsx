import React from 'react';
import { getRepos, Action } from './actions';
import { GithubState } from 'src/common/types/state';
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
  componentDidMount() {
    this.props.dispatch(getRepos());
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
