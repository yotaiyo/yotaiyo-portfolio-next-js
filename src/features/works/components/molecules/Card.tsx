import React from 'react';
import styled from 'styled-components';
import { Layout } from 'consts/Layout';
import { Color } from 'consts/Color';
import { Repo } from 'src/common/types/state';

const CardWrapper = styled.div`
  margin: 0 auto;
  margin-top: 20px;
  box-shadow: 0 0 3px rgb(0, 0, 0, 0.5);
  width: 45%;
  padding: 12px 20px 12px 20px;
  border-radius: 10px;
  @media (max-width: 1200px) {
    width: 95%;
  }
  @media (max-width: 414px) {
    width: 85%;
    padding: 12px 10px 12px 10px;
  }
`;

const CardTitle = styled.div`
  color: ${Color.Black1};
  text-align: center;
  font-size: ${Layout.Text.Large}px;
  @media (max-width: 414px) {
    font-size: ${Layout.Text.Normal}px;
  }
`;

const CardButtonsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 8px;
  &::after {
    margin-left: 12px;
    content: '';
    display: block;
    width: 28%;
  }
`;

const CardButton = styled.button`
  padding: 8px;
  margin-left: 12px;
  font-size: ${Layout.Text.Small}px;
  color: ${Color.White};
  background-color: ${Color.Blue1};
  width: 28%;
  border-radius: 5px;
  border: 0 solid ${Color.White};
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.4);
  outline: none;
  transition: all 0.5s ease;
  &:hover {
    color: ${Color.Red1};
  }
  @media (max-width: 414px) {
    font-size: ${Layout.Text.Smaller}px;
    padding: 4px;
  }
`;

const CardDetailWrapper = styled.div`
  margin-top: 16px;
  animation-name: fade-in;
  animation-duration: 1s;
  animation-timing-function: ease-out;
  @keyframes fade-in {
    0% {
      opacity: 0;
      transform: translate3d(0, -20px, 0);
    }
    100% {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }
`;

const CardDescriptionWrapper = styled.div``;

const CardDescription = styled.div`
  font-size: ${Layout.Text.Small}px;
  text-align: center;
  color: ${Color.Black2};
  @media (max-width: 414px) {
    font-size: ${Layout.Text.Smaller}px;
  }
`;

const CardTopicsWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 16px;
`;

const CardTopic = styled.a`
  font-size: ${Layout.Text.Smaller}px;
  color: ${Color.Black2};
  margin-left: 10px;
  padding: 5px;
  border: 1px solid ${Color.Black2};
  border-radius: 5px;
  white-space: nowrap;
  box-sizing: border-box;
  @media (max-width: 414px) {
    font-size: ${Layout.Text.Smallest}px;
    margin-left: 3px;
  }
`;

type Card = Repo & {
  showDetail: boolean;
  index: number;
  onClickDetailButton(index: number): void;
  openNewWindowWithUrl(url: string): void;
};

export const Card = ({
  title,
  url,
  topics,
  homepage,
  description,
  showDetail,
  onClickDetailButton,
  openNewWindowWithUrl,
  index
}: Card) => (
  <CardWrapper>
    <CardTitle>{title}</CardTitle>
    <CardButtonsWrapper>
      <CardButton
        style={{ marginLeft: 0 }}
        onClick={() => openNewWindowWithUrl(url)}
      >
        Repo
      </CardButton>
      {homepage ? (
        <CardButton onClick={() => openNewWindowWithUrl(homepage)}>
          Web Site
        </CardButton>
      ) : null}
      <CardButton onClick={() => onClickDetailButton(index)}>Detail</CardButton>
    </CardButtonsWrapper>
    {showDetail ? (
      <CardDetailWrapper>
        <CardDescriptionWrapper>
          {description.split('\n').map((line, index) => {
            return <CardDescription key={index}>{line}</CardDescription>;
          })}
        </CardDescriptionWrapper>
        <CardTopicsWrapper>
          {topics.map((topic, index) => (
            <CardTopic key={index}>{topic}</CardTopic>
          ))}
        </CardTopicsWrapper>
      </CardDetailWrapper>
    ) : null}
  </CardWrapper>
);
