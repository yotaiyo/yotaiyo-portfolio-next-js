import React, { useState } from 'react';
import MyLayout from 'src/common/layout';
import { Works } from './components/templates/Works';
import { NextPage } from 'next';
import fetch from 'isomorphic-unfetch';
import { Repo } from 'src/common/types/state';

type WorksContainerProps = {
  repos: Repo[];
  pathname: string;
};

export const WorksContainer: NextPage<WorksContainerProps> = props => {
  const [flag, setFlag] = useState(false);
  const [showDetail, setShowDetail] = useState(new Array(10).fill(false));

  const onClickDetailButton = (index: number) => {
    showDetail[index] = !showDetail[index];
    setFlag(!flag);
    setShowDetail(showDetail);
  };

  const openNewWindowWithUrl = (url: string) => {
    window.open(url, '_blank', 'noopener');
  };

  console.log(props.repos);

  return (
    <MyLayout pathname={props.pathname}>
      <Works
        github={props.repos}
        showDetail={showDetail}
        onClickDetailButton={onClickDetailButton}
        openNewWindowWithUrl={openNewWindowWithUrl}
      />
    </MyLayout>
  );
};

WorksContainer.getInitialProps = async (props: any) => {
  const res = await fetch(
    `https://api.github.com/users/${process.env.GITHUB_USER_NAME}/repos?per_page=100`,
    {
      headers: {
        Authorization: `Bearer ${process.env.GITHUB_API_TOKEN}`,
        Accept: 'application/vnd.github.mercy-preview+json'
      }
    }
  );

  const json = await res.json();

  return { pathname: props.pathname, repos: json };
};
export default WorksContainer;
