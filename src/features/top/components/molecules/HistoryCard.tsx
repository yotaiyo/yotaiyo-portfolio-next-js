import React from 'react';
import styled from 'styled-components';
import { Color } from 'consts/Color';
import { Card, CardType } from './Card';
// @ts-ignore
import useDimensions from 'react-use-dimensions';

const HistoryCardWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
`;

type CircleType = {
  cardHeight: number;
};

const Circle = styled.div.attrs((props: CircleType) => ({
  cardHeight: props.cardHeight
}))`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: ${Color.Blue1};
  position: relative;
  top: ${props => `${props.cardHeight / 2 - 15}px`}
  right: 16px;
`;

const TriangleWrapper = styled.div``;

type TriangleType = {
  cardHeight: number;
};

const Triangle = styled.div.attrs((props: TriangleType) => ({
  cardHeight: props.cardHeight
}))`
  margin-top: ${props => `${props.cardHeight / 2 - 10}px`}
  border-style: solid;
  border-width: 10px 10px 10px 10px;
  border-color: transparent ${Color.White} transparent transparent;
  filter: drop-shadow(0 2px 0 rgb(0, 0, 0, 0.2));
`;

type HistoryCardType = CardType & {
  index: number;
};

export const HistoryCard = ({
  title,
  period,
  body,
  tags,
  index
}: HistoryCardType) => {
  const [ref, { height }] = useDimensions();

  return (
    <HistoryCardWrapper
      style={{ marginTop: index === 0 ? 0 : undefined }}
      ref={ref}
    >
      <Circle cardHeight={height} />
      <TriangleWrapper>
        <Triangle cardHeight={height} />
      </TriangleWrapper>
      <Card title={title} period={period} body={body} tags={tags} />
    </HistoryCardWrapper>
  );
};
