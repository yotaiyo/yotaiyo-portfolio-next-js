import React from 'react';
import MyLayout from '../components/MyLayout';
import styled from 'styled-components';
import { Layout } from '../consts/Layout';
import ReactLoading from 'react-loading';
import { getRepos, Repo } from '../actions/github';
import { InitialState } from '../store/makeStore';

const LoadingWrapper = styled.div`
  padding-top: 120px;
  display: flex;
  justify-content: center;
`;

const Wrapper = styled.div`
  padding-top: 120px;
`;

const Title = styled.h1`
  font-size: ${Layout.Text.Largest}px;
  color: #3e4448;
  margin: 0 auto;
  border-bottom: 2px solid #3e4448;
  width: 125px;
  margin-bottom: 40px;
`;

const CardWrapper = styled.div``;

const CardTitle = styled.div``;

const CardUrl = styled.button``;

const CardHomePage = styled.button``;

const CardTopic = styled.div``;

const showRepos = [
  'portfolio',
  'music-auto-tagging',
  'to-do-app-frontend',
  'to-do-app-backend',
  'weather-app',
  'tinder-card',
  'to-do-app-hooks',
  'music-genre-classification'
];

const Card = ({ title, url, topics, homepage }: Repo) =>
  showRepos.indexOf(title) >= 0 ? (
    <CardWrapper>
      <CardTitle>{title}</CardTitle>
      <CardUrl>{url}</CardUrl>
      <CardHomePage>{homepage}</CardHomePage>
      {topics.map((topic, index) => (
        <CardTopic key={index}>{topic}</CardTopic>
      ))}
    </CardWrapper>
  ) : null;

type WorksProps = {
  state: InitialState;
};

class Works extends React.Component<WorksProps> {
  static async getInitialProps(props: any) {
    await props.store.dispatch(getRepos());
    const state = await props.store.getState();
    return { state };
  }

  render() {
    const { hasError, repos } = this.props.state.github;
    return (
      <MyLayout>
        {hasError || repos.length === 0 ? (
          <LoadingWrapper>
            <ReactLoading
              type={'spinningBubbles'}
              color={'#00c4cc'}
              height={'10%'}
              width={'10%'}
            />
          </LoadingWrapper>
        ) : (
          <Wrapper>
            <Title>Works</Title>
            {repos.map((repo: Repo, index: number) => {
              return (
                <Card
                  title={repo.title}
                  url={repo.url}
                  homepage={repo.homepage}
                  topics={repo.topics}
                  key={index}
                />
              );
            })}
          </Wrapper>
        )}
      </MyLayout>
    );
  }
}

export default Works;
