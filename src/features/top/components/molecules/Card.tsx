import React from 'react';
import styled from 'styled-components';
import { Layout } from 'consts/Layout';
import { Color } from 'consts/Color';

const CardWrapper = styled.div`
  border-radius: 30px;
  box-shadow: 1px 1px 5px rgb(0, 0, 0, 0.5);
  padding-left: 30px;
  padding-right: 30px;
  min-width: 350px;
  flex: 1;
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
      <CardTitle>{title}</CardTitle>
      <CardPeriod>{period}</CardPeriod>
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
