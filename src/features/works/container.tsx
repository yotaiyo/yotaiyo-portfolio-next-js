import React, { useState } from 'react';
import { getRepos } from './actions';
import MyLayout from 'src/common/components/MyLayout';
import { Works } from './components/templates/Works';
import { NextPage } from 'next';
import { useSelector } from 'react-redux';
import { InitialState } from 'src/common/types/state';

type WorksContainerProps = {
  pathname: string;
};

export const WorksContainer: NextPage<WorksContainerProps> = props => {
  const [flag, setFlag] = useState(false);
  const [showDetail, setShowDetail] = useState(new Array(10).fill(false));

  const github = useSelector((state: InitialState) => state.github);

  const onClickDetailButton = (index: number) => {
    showDetail[index] = !showDetail[index];
    setFlag(!flag);
    setShowDetail(showDetail);
  };

  const openNewWindowWithUrl = (url: string) => {
    window.open(url, '_blank', 'noopener');
  };

  return (
    <MyLayout pathname={props.pathname}>
      <Works
        github={github}
        showDetail={showDetail}
        onClickDetailButton={onClickDetailButton}
        openNewWindowWithUrl={openNewWindowWithUrl}
      />
    </MyLayout>
  );
};

WorksContainer.getInitialProps = async (props: any) => {
  if (props.store.getState().github.hasError) {
    await props.store.dispatch(getRepos());
  }
  return { pathname: props.pathname };
};
export default WorksContainer;
