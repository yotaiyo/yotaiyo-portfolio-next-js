import React from 'react';
import styled from 'styled-components';
import { Layout } from 'consts/Layout';
import { Color } from 'consts/Color';
import { historyItems } from 'consts/historyItems';
import { HistoryCard } from '../molecules/HistoryCard';

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

const MyHistoriesWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex: 1;
`;

const MyHistories = styled.div`
  border-left: 2px solid ${Color.Black3};
  flex: 0.6;
  max-width: 1000px;
  @media (max-width: 414px) {
    border-left: 1px solid ${Color.Black3};
  }
`;

export const History = () => {
  return (
    <Wrapper>
      <TitleWrapper>
        <Title>History</Title>
      </TitleWrapper>
      <MyHistoriesWrapper>
        <MyHistories>
          {historyItems.map((item, index) => {
            return (
              <HistoryCard
                title={item.title}
                period={item.period}
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
