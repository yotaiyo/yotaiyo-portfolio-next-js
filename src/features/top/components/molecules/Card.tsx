import React from 'react';
import styled from 'styled-components';
import { Layout } from 'consts/Layout';
import { Color } from 'consts/Color';

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

export type CardType = {
  title: string;
  body: string;
  tags: string[];
};

export const Card = ({ title, body, tags }: CardType) => {
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
