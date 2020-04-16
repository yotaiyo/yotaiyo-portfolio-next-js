import React from 'react';
import styled from 'styled-components';
import { Color } from 'consts/Color';
import { historyItems } from 'consts/historyItems';
import { HistoryCard } from '../molecules/HistoryCard';
import { SectionTitle } from 'src/common/components/molecules/SectionTitle';

const Wrapper = styled.div`
  margin-top: 100px;
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
      <SectionTitle title="History" />
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
