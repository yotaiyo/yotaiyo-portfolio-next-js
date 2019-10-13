import React from 'react';
import MyLayout from '../components/MyLayout';
import styled from 'styled-components';
import { Layout } from '../consts/Layout';
import { Color } from '../consts/Color';
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
  margin-left: 30px;
  margin-right: 30px;
  margin-bottom: 50px;
  @media (max-width: 414px) {
    padding-top: 60px;
    margin-left: 0;
    margin-right: 0;
  }
`;

const Title = styled.h1`
  font-size: ${Layout.Text.Largest}px;
  color: ${Color.Black1};
  margin: 0 auto;
  border-bottom: 2px solid ${Color.Black1};
  width: 125px;
  margin-bottom: 40px;
  @media (max-width: 414px) {
    font-size: ${Layout.Text.Larger}px;
    width: 85px;
    margin-bottom: 10px;
  }
`;

const CardsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
  @media (max-width: 1200px) {
    flex-direction: column;
    flex-wrap: none;
  }
`;

const CardWrapper = styled.div`
  margin: 0 auto;
  margin-top: 20px;
  box-shadow: 0 0 3px rgb(0, 0, 0, 0.5);
  width: 45%;
  padding: 12px 20px 12px 20px;
  border-radius: 10px;
  @media (max-width: 1200px) {
    width: 95%;
  }
  @media (max-width: 414px) {
    width: 85%;
    padding: 12px 10px 12px 10px;
  }
`;

const CardTitle = styled.div`
  color: ${Color.Black1};
  text-align: center;
  font-size: ${Layout.Text.Large}px;
  @media (max-width: 414px) {
    font-size: ${Layout.Text.Normal}px;
  }
`;

const CardButtonsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 8px;
  &::after {
    margin-left: 12px;
    content: '';
    display: block;
    width: 28%;
  }
`;

const CardButton = styled.button`
  padding: 8px;
  margin-left: 12px;
  font-size: ${Layout.Text.Small}px;
  color: ${Color.White};
  background-color: ${Color.Blue2};
  width: 28%;
  border-radius: 5px;
  border: 0.2px solid ${Color.Black2};
  box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.5);
  outline: none;
  transition: all 0.5s ease;
  &:hover {
    color: ${Color.Red1};
  }
  @media (max-width: 414px) {
    font-size: ${Layout.Text.Smaller}px;
    padding: 4px;
  }
`;

const CardDetailWrapper = styled.div`
  margin-top: 16px;
  animation-name: fade-in;
  animation-duration: 1s;
  animation-timing-function: ease-out;
  @keyframes fade-in {
    0% {
      opacity: 0;
      transform: translate3d(0, -20px, 0);
    }
    100% {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }
`;

const CardDescriptionWrapper = styled.div``;

const CardDescription = styled.div`
  font-size: ${Layout.Text.Small}px;
  text-align: center;
  color: ${Color.Black2};
  @media (max-width: 414px) {
    font-size: ${Layout.Text.Smaller}px;
  }
`;

const CardTopicsWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 16px;
`;

const CardTopic = styled.a`
  font-size: ${Layout.Text.Smaller}px;
  color: ${Color.Black2};
  margin-left: 10px;
  padding: 5px;
  border: 1px solid ${Color.Black2};
  border-radius: 5px;
  white-space: nowrap;
  box-sizing: border-box;
  @media (max-width: 414px) {
    font-size: ${Layout.Text.Smallest}px;
    margin-left: 3px;
  }
`;

type Card = Repo & {
  showDetail: boolean;
  index: number;
  onClickDetailButton(index: number): void;
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
  openNewWindowWithUrl,
  index
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
        <CardButton onClick={() => onClickDetailButton(index)}>Detail</CardButton>
      </CardButtonsWrapper>
      {showDetail ? (
        <CardDetailWrapper>
          <CardDescriptionWrapper>
            {description.split('\n').map((line, index) => {
              return <CardDescription key={index}>{line}</CardDescription>;
            })}
          </CardDescriptionWrapper>
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
  showDetail: boolean[];
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
    const { hasError, repos } = this.props.state.github;
    return (
      <MyLayout>
        {hasError || repos.length === 0 ? (
          <LoadingWrapper>
            <ReactLoading
              type={'spinningBubbles'}
              color={Color.Blue2}
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
                      showDetail={showDetail[index]}
                      onClickDetailButton={this.onClickDetailButton}
                      openNewWindowWithUrl={this.openNewWindowWithUrl}
                      index={index}
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
