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
  padding-top: 100px;
  margin-left: 100px;
  margin-right: 100px;
`;

const Title = styled.h1`
  font-size: ${Layout.Text.Largest}px;
  color: #3e4448;
  margin: 0 auto;
  border-bottom: 2px solid #3e4448;
  width: 125px;
  margin-bottom: 40px;
`;

const CardsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const CardWrapper = styled.div`
  margin-top: 20px;
  box-shadow: 0 0 3px rgb(0, 0, 0, 0.5);
  width: 45%;
  padding: 12px 20px 12px 20px;
  border-radius: 10px;
`;

const CardTitle = styled.div`
  color: #54595d;
  font-size: ${Layout.Text.Normal}px;
`;

const CardButtonsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  color: #54595d;
  margin-top: 8px;
  &::after {
    margin-left: 12px;
    content: '';
    display: block;
    width: 28%;
  }
`;

const CardButton = styled.button`
  padding: 5px;
  margin-left: 12px;
  font-size: ${Layout.Text.Small}px;
  color: #fff;
  background-color: #00c4cc;
  width: 28%;
  border-radius: 5px;
  border: 0.2px solid #54595d;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
  outline: none;
`;

const CardDetailWrapper = styled.div``;

const CardDescription = styled.div``;

const CardTopicsWrapper = styled.div``;

const CardTopic = styled.a`
  font-size: 10px;
  color: #54595d;
  margin-left: 10px;
  padding: 5px;
  border: 1px solid #54595d;
  border-radius: 5px;
  white-space: nowrap;
  box-sizing: border-box;
`;

type Card = Repo & {
  showDetail: boolean;
  onClickDetailButton(): void;
  openNewWindowWithUrl(url: string): void;
};

const Card = ({
  title,
  url,
  topics,
  homepage,
  description,
  showDetail,
  onClickDetailButton,
  openNewWindowWithUrl
}: Card) => (
  <CardWrapper>
    <CardTitle>{title}</CardTitle>
    <CardButtonsWrapper>
      <CardButton
        style={{ marginLeft: 0 }}
        onClick={() => openNewWindowWithUrl(url)}
      >
        Repository
      </CardButton>
      {homepage ? (
        <CardButton onClick={() => openNewWindowWithUrl(homepage)}>
          Web Site
        </CardButton>
      ) : null}
      <CardButton onClick={onClickDetailButton}>Detail</CardButton>
    </CardButtonsWrapper>
    {showDetail ? (
      <CardDetailWrapper>
        <CardDescription>{description}</CardDescription>
        <CardTopicsWrapper>
          {topics.map((topic, index) => (
            <CardTopic key={index}>{topic}</CardTopic>
          ))}
        </CardTopicsWrapper>
      </CardDetailWrapper>
    ) : null}
  </CardWrapper>
);

type WorksProps = {
  state: InitialState;
};

type WorksState = {
  showDetail: boolean;
};

class Works extends React.Component<WorksProps, WorksState> {
  static async getInitialProps(props: any) {
    await props.store.dispatch(getRepos());
    const state = await props.store.getState();
    return { state };
  }

  constructor(props: WorksProps) {
    super(props);
    this.state = {
      showDetail: false
    };
  }

  onClickDetailButton = () => {
    this.setState({ showDetail: !this.state.showDetail });
  };

  openNewWindowWithUrl = (url: string) => {
    window.open(url, '_blank');
  };

  render() {
    const { showDetail } = this.state;
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
            <CardsWrapper>
              {repos.map((repo: Repo, index: number) => {
                return (
                  <Card
                    title={repo.title}
                    url={repo.url}
                    homepage={repo.homepage}
                    topics={repo.topics}
                    description={repo.description}
                    key={index}
                    showDetail={showDetail}
                    onClickDetailButton={this.onClickDetailButton}
                    openNewWindowWithUrl={this.openNewWindowWithUrl}
                  />
                );
              })}
            </CardsWrapper>
          </Wrapper>
        )}
      </MyLayout>
    );
  }
}

export default Works;
