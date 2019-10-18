import React from 'react';
import styled from 'styled-components';
import ReactLoading from 'react-loading';
import MyLayout from '../components/MyLayout';
import { Card } from '../components/Card';
import { Repo } from '../actions/github';
import { Color } from '../consts/Color';
import { Layout } from '../consts/Layout';
import { useSelector } from 'react-redux';
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

type WorksProps = {
  showDetail: boolean[];
  onClickDetailButton(index: number): void;
  openNewWindowWithUrl(url: string): void;
};

export const Works: React.FC<WorksProps> = props => {
  const { showDetail, onClickDetailButton, openNewWindowWithUrl } = props;
  const state = useSelector((state: InitialState) => state);
  return (
    <MyLayout>
      {state.github.hasError || state.github.repos.length === 0 ? (
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
            {state.github.repos.map((repo: Repo, index: number) => {
              return (
                <Card
                  title={repo.title}
                  url={repo.url}
                  homepage={repo.homepage}
                  topics={repo.topics}
                  description={repo.description}
                  key={index}
                  showDetail={showDetail[index]}
                  onClickDetailButton={onClickDetailButton}
                  openNewWindowWithUrl={openNewWindowWithUrl}
                  index={index}
                />
              );
            })}
          </CardsWrapper>
        </Wrapper>
      )}
    </MyLayout>
  );
};

export default Works;
