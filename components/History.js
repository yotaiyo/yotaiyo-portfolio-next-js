import React from 'react'
import styled from 'styled-components'
import { Layout } from '../public/Layout'

const Wrapper = styled.div`
  margin-top: 100px;
`

const Title = styled.h1`
  font-size: ${Layout.Text.Largest}px;
  color: #3e4448;
  margin: 0 auto;
  border-bottom: 2px solid #3e4448;
  width: 170px;
  margin-bottom: 40px;
`

const PeriodWrapper = styled.div`
  margin-top: 20px;
  margin-right: 40px;
`

const Period = styled.div`
  font-size: ${Layout.Text.Small}px;
  color: #54595d;
`

const MyHistoriesWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex: 1;
`

const MyHistories = styled.div`
  border-left: 2px solid #cbced0;
  flex: 0.5;
`

const CardWrapper = styled.div`
  border-radius: 30px;
  box-shadow: 1px 1px 5px rgb(0, 0, 0, 0.5);
  height: 200px;
  width: 680px;
  flex: 1;
`

const CardTitle = styled.div`
  font-size: ${Layout.Text.Large}px;
  color: #3e4448;
  margin-top: 20px;
  height: 30px;
`

const CardBodyWrapper = styled.div`
  margin-top: 20px;
  height: 80px;
`

const CardBody = styled.div`
  font-size: ${Layout.Text.Small}px;
  color: #54595d;
`

const CardTagsWrapper = styled.div``

const CardTag = styled.span`
  font-size: ${Layout.Text.Small}px;
  color: #54595d;
  margin-left: 10px;
  padding: 5px;
  border: 1px solid #54595d;
  border-radius: 5px;
  white-space: nowrap;
`

const Card = ({ title, body, tags }) => {
  return (
    <CardWrapper>
      <CardTitle>{title}</CardTitle>
      <CardBodyWrapper>
        {body.split('\n').map((line, index) => {
          return <CardBody key={index}>{line}</CardBody>
        })}
      </CardBodyWrapper>
      <CardTagsWrapper>
        {tags.map((tag, index) => {
          return <CardTag key={index}>{tag}</CardTag>
        })}
      </CardTagsWrapper>
    </CardWrapper>
  )
}

const CircleAndCardWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
`

const Circle = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #00c4cc;
  position: relative;
  right: 16px;
  top: 80px;
`

const TriangleWrapper = styled.div``

const Triangle = styled.div`
  margin-top: 85px;
  border-style: solid;
  border-width: 10px 10px 10px 10px;
  border-color: transparent #fff transparent transparent;
  filter: drop-shadow(0 2px 0 rgb(0, 0, 0, 0.1));
`

const CircleAndCard = ({ title, body, tags, index }) => {
  return (
    <CircleAndCardWrapper style={{ marginTop: index === 0 ? 0 : null }}>
      <Circle />
      <TriangleWrapper>
        <Triangle />
      </TriangleWrapper>
      <Card title={title} body={body} tags={tags} />
    </CircleAndCardWrapper>
  )
}

export const History = () => {
  const Items = [
    {
      period: '2019.09 ~',
      title: 'eureka 長期インターン',
      body: 'フロントエンドエンジニアとして、Pairs Web版の開発に参加中。',
      tags: ['TypeScript', 'React', 'Redux']
    },
    {
      period: '2019.09',
      title: 'DMM.com 短期インターン',
      body:
        'クエスト型インターン、DMM GUILDに参加。\nDMMが実際に抱えている技術的な課題に挑戦。',
      tags: ['Vue', 'React', 'Redux', 'Vanilla JS']
    },
    {
      period: '2019.01 ~ 08',
      title: 'FIREBUG 長期インターン',
      body: 'toC向けマッチングアプリ開発に参加。',
      tags: ['TypeScript', 'React Native', 'Graph QL']
    },
    {
      period: '2019.12 ~ 01',
      title: 'Apollo 短期インターン',
      body:
        'webエンジニアリングに関する基礎を学ぶ。\nその後、業務委託のアプリ開発案件に参加。',
      tags: [
        'HTML/CSS',
        'JavaScript',
        'TypeScript',
        'jQuery',
        'React',
        'React Native'
      ]
    }
  ]
  return (
    <Wrapper>
      <Title>History</Title>
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
            )
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
            )
          })}
        </MyHistories>
      </MyHistoriesWrapper>
    </Wrapper>
  )
}
