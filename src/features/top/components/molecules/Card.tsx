import React from 'react';
import styled from 'styled-components';
import { Layout } from 'consts/Layout';
import { Color } from 'consts/Color';

const CardWrapper = styled.div`
  border-radius: 4px;
  padding-left: 30px;
  padding-right: 30px;
  min-width: 350px;
  flex: 1;
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.1),
    0px 1px 1px 0px rgba(0, 0, 0, 0.05), 0px 1px 3px 0px rgba(0, 0, 0, 0.4);
  @media (max-width: 414px) {
    min-width: 0;
  }
  @media (max-width: 320px) {
    padding-left: 10px;
    padding-right: 10px;
  }
`;

const CardTitleAndPeriodWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

const CardTitle = styled.div`
  font-size: ${Layout.Text.Large}px;
  color: ${Color.Black1};
  @media (max-width: 414px) {
    font-size: ${Layout.Text.Normal - 2}px;
  }
`;

const CardPeriod = styled.div`
  font-size: ${Layout.Text.Small}px;
  color: ${Color.Black2};
  margin-top: 10px;
  @media (max-width: 414px) {
    font-size: ${Layout.Text.Smaller}px;
  }
`;

const CardBodiesWrapper = styled.div`
  margin: 0 auto;
  max-width: 1000px;
`;

const CardBodies = styled.div`
  display: inline-block;
  margin-top: 20px;
  text-align: left;
`;

const CardBody = styled.div`
  font-size: ${Layout.Text.Smaller}px;
  color: ${Color.Black2};
  display: inline-block;
  @media (max-width: 414px) {
    font-size: ${Layout.Text.Smallest}px;
  }
`;

const CardTagsWrapper = styled.div`
  box-sizing: border-box;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const CardTag = styled.span`
  font-size: ${Layout.Text.Smaller}px;
  color: ${Color.Black2};
  @media (max-width: 414px) {
    font-size: ${Layout.Text.Smallest}px;
  }
`;

export type CardType = {
  title: string;
  period: string;
  body: string;
  tags: string[];
};

export const Card = ({ title, period, body, tags }: CardType) => {
  return (
    <CardWrapper>
      <CardTitleAndPeriodWrapper>
        <CardTitle>{title}</CardTitle>
        <CardPeriod>{period}</CardPeriod>
      </CardTitleAndPeriodWrapper>
      <CardBodiesWrapper>
        <CardBodies>
          {body.split('\n').map((line, index) => {
            return <CardBody key={index}>{line}</CardBody>;
          })}
        </CardBodies>
      </CardBodiesWrapper>
      <CardTagsWrapper>
        {tags.map((tag, index) => {
          return <CardTag key={index}>{`${tag}, `}</CardTag>;
        })}
      </CardTagsWrapper>
    </CardWrapper>
  );
};
