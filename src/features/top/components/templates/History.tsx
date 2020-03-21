import React from 'react';
import styled from 'styled-components';
import { Layout } from 'consts/Layout';
import { Color } from 'consts/Color';
import { historyItems } from 'consts/historyItems';
import { HistoryCard } from '../molecules/HistoryCard';

const Wrapper = styled.div`
  margin-top: 100px;
`;

const TitleWrapper = styled.div`
  display: flex;
  margin-bottom: 24px;
`;

const TitleText = styled.span`
  font-size: ${Layout.Text.Largest}px;
  font-weight: bold;
  color: ${Color.Black1};
`;

const TitleLine = styled.div`
  background-color: ${Color.Black3};
  height: 2px;
  flex: 1;
  margin-top: ${Layout.Text.Largest / 2 + 4}px;
  margin-left: 10px;
`;

const MyHistoriesWrapper = styled.div`
  padding-left: 15px;
`;

const MyHistories = styled.div`
  border-left: 1px solid ${Color.Black3};
`;

export const History = () => {
  return (
    <Wrapper>
      <TitleWrapper>
        <TitleText>History</TitleText>
        <TitleLine />
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
