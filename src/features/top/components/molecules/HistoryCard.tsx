import React from 'react';
import styled from 'styled-components';
import { Color } from 'consts/Color';
import { Card, CardType } from './Card';

const HistoryCardWrapper = styled.div`
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

type HistoryCardType = CardType & {
  index: number;
};

export const HistoryCard = ({ title, body, tags, index }: HistoryCardType) => {
  return (
    <HistoryCardWrapper style={{ marginTop: index === 0 ? 0 : undefined }}>
      <Circle />
      <TriangleWrapper>
        <Triangle />
      </TriangleWrapper>
      <Card title={title} body={body} tags={tags} />
    </HistoryCardWrapper>
  );
};
