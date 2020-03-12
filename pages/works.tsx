import React, { useState } from 'react';
import MyLayout from 'src/common/layout';
import { Works } from 'src/features/works/components/templates/Works';
import fetch from 'isomorphic-unfetch';
import { Repo } from 'src/common/types/state';
import { convertFetchReposResult } from 'src/common/utils/convertFetchReposResult';

type WorksContainerProps = {
  repos: Repo[];
  pathname: string;
};

function WorksContainer({ pathname, repos }: WorksContainerProps) {
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

  return (
    <MyLayout pathname={pathname}>
      <Works
        repos={convertFetchReposResult(repos)}
        showDetail={showDetail}
        onClickDetailButton={onClickDetailButton}
        openNewWindowWithUrl={openNewWindowWithUrl}
      />
    </MyLayout>
  );
}

export async function getStaticProps() {
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

  return {
    props: {
      repos: json
    }
  };
}

export default WorksContainer;
