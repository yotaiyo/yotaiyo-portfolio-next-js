import React from 'react';
import styled from 'styled-components';
import { Layout } from '../consts/Layout';
import { Color } from '../consts/Color';

const Wrapper = styled.div`
  margin-top: 100px;
  padding-left: 20px;
  padding-right: 20px;
  @media (max-width: 414px) {
    margin-top: 30px;
    padding-left: 10px;
    padding-right: 10px;
  }
`;

const TitleWrapper = styled.h1`
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
  @media (max-width: 414px) {
    margin-bottom: 20px;
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

const PeriodWrapper = styled.div`
  margin-top: 20px;
  margin-right: 30px;
  @media (max-width: 414px) {
    display: none;
  }
`;

const Period = styled.div`
  font-size: ${Layout.Text.Small}px;
  color: ${Color.Black2};
  text-align: center;
  white-space: nowrap;
  @media (max-width: 414px) {
    font-size: ${Layout.Text.Smaller}px;
  }
`;

const MyHistoriesWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex: 1;
`;

const MyHistories = styled.div`
  border-left: 2px solid ${Color.Black3};
  flex: 0.6;
  @media (max-width: 414px) {
    border-left: 1px solid ${Color.Black3};
  }
`;

const CardWrapper = styled.div`
  border-radius: 30px;
  box-shadow: 1px 1px 5px rgb(0, 0, 0, 0.5);
  height: 200px;
  padding-left: 30px;
  padding-right: 30px;
  min-width: 350px;
  flex: 1;
  text-align: center;
  @media (max-width: 414px) {
    min-width: 0;
  }
  @media (max-width: 320px) {
    padding-left: 10px;
    padding-right: 10px;
  }
`;

const CardTitle = styled.div`
  font-size: ${Layout.Text.Large}px;
  color: ${Color.Black1};
  margin-top: 20px;
  height: 30px;
  @media (max-width: 414px) {
    font-size: ${Layout.Text.Normal - 2}px;
  }
`;

const CardBodyWrapper = styled.div`
  margin-top: 20px;
  height: 80px;
`;

const CardBody = styled.div`
  font-size: ${Layout.Text.Small}px;
  color: ${Color.Black2};
  @media (max-width: 414px) {
    font-size: ${Layout.Text.Smaller}px;
  }
`;

const CardTagsWrapper = styled.div``;

const CardTag = styled.span`
  font-size: ${Layout.Text.Smaller}px;
  color: ${Color.Black2};
  margin-left: 10px;
  padding: 5px;
  border: 1px solid ${Color.Black2};
  border-radius: 5px;
  @media (max-width: 414px) {
    font-size: ${Layout.Text.Smallest}px;
    margin-left: 5px;
    padding: 2px;
  }
`;

type Card = {
  title: string;
  body: string;
  tags: string[];
};

const Card = ({ title, body, tags }: Card) => {
  return (
    <CardWrapper>
      <CardTitle>{title}</CardTitle>
      <CardBodyWrapper>
        {body.split('\n').map((line, index) => {
          return <CardBody key={index}>{line}</CardBody>;
        })}
      </CardBodyWrapper>
      <CardTagsWrapper>
        {tags.map((tag, index) => {
          return <CardTag key={index}>{tag}</CardTag>;
        })}
      </CardTagsWrapper>
    </CardWrapper>
  );
};

const CircleAndCardWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
`;

const Circle = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: ${Color.Blue2};
  position: relative;
  right: 16px;
  top: 80px;
`;

const TriangleWrapper = styled.div``;

const Triangle = styled.div`
  margin-top: 85px;
  border-style: solid;
  border-width: 10px 10px 10px 10px;
  border-color: transparent ${Color.White} transparent transparent;
  filter: drop-shadow(0 2px 0 rgb(0, 0, 0, 0.1));
`;

type CircleAndCard = Card & {
  index: number;
};

const CircleAndCard = ({ title, body, tags, index }: CircleAndCard) => {
  return (
    <CircleAndCardWrapper style={{ marginTop: index === 0 ? 0 : undefined }}>
      <Circle />
      <TriangleWrapper>
        <Triangle />
      </TriangleWrapper>
      <Card title={title} body={body} tags={tags} />
    </CircleAndCardWrapper>
  );
};

export const History = () => {
  const Items = [
    {
      period: '2019.09 ~',
      title: 'eureka 長期インターン',
      body: 'フロントエンドエンジニアとして、Pairs Web版の開発に参加。',
      tags: ['typescript', 'react', 'redux']
    },
    {
      period: '2019.09',
      title: 'DMM.com 短期インターン',
      body:
        'クエスト型インターン、DMM GUILDに参加。DMMが実際に抱えている技術的な課題に挑戦。',
      tags: ['vue', 'react', 'redux', 'vanillajs']
    },
    {
      period: '2019.01 ~ 08',
      title: 'FIREBUG 長期インターン',
      body: 'toB向けマッチングアプリ開発に参加。',
      tags: ['typescript', 'reactnative', 'graphql']
    },
    {
      period: '2018.12 ~ 01',
      title: 'Apollo 短期インターン',
      body:
        'webエンジニアリングに関する基礎を学ぶ。その後、業務委託のアプリ開発案件に参加。',
      tags: ['html/css', 'typescript', 'jquery', 'react']
    }
  ];
  return (
    <Wrapper>
      <TitleWrapper>
        <Title>History</Title>
      </TitleWrapper>
      <MyHistoriesWrapper>
        <PeriodWrapper>
          {Items.map((item, index) => {
            return (
              <Period
                style={{
                  marginTop: index === 0 ? 68 : 30,
                  height: index === Items.length - 1 ? 100 : 200
                }}
                key={index}
              >
                {item.period}
              </Period>
            );
          })}
        </PeriodWrapper>
        <MyHistories>
          {Items.map((item, index) => {
            return (
              <CircleAndCard
                title={item.title}
                body={item.body}
                tags={item.tags}
                index={index}
                key={index}
              />
            );
          })}
        </MyHistories>
      </MyHistoriesWrapper>
    </Wrapper>
  );
};
