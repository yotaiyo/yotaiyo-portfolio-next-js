import React from 'react';
import styled from 'styled-components';
import ReactLoading from 'react-loading';
import MyLayout from '../../components/MyLayout';
import { Card } from './Card';
import { Repo } from '../actions';
import { Color } from '../../../../consts/Color';
import { Layout } from '../../../../consts/Layout';
import { useSelector } from 'react-redux';
import { InitialState } from 'src/app/makeStore';

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

const TitleWrapper = styled.h1`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  @media (max-width: 768px) {
    margin-bottom: 0;
  }
`;

const Title = styled.span`
  font-size: ${Layout.Text.Largest}px;
  color: ${Color.Black1};
  border-bottom: 2px solid ${Color.Black1};
  @media (max-width: 414px) {
    font-size: ${Layout.Text.Larger}px;
  }
`;

const CardsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
  max-width: 2000px;
  margin: 0 auto;
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
  const github = useSelector((state: InitialState) => state.github);
  return (
    <MyLayout>
      {github.hasError || github.repos.length === 0 ? (
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
          <TitleWrapper>
            <Title>Works</Title>
          </TitleWrapper>
          <CardsWrapper>
            {github.repos.map((repo: Repo, index: number) => {
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
