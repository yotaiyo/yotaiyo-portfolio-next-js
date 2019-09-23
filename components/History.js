import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  margin-top: 100px;
  padding: 30px;
`

const Title = styled.h1`
  font-size: 48px;
  color: #3e4448;
  margin: 0 auto;
  border-bottom: 2px solid #3e4448;
  width: 170px;
`

const CirclAndCardWrapper = styled.div``

const Circle = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #00c4cc;
  position: relative;
  top: 150px;
  left: -55px;
`

const CardsWrapper = styled.div`
  border-left: 2px solid #cbced0;
  padding-left: 30px;
  padding-bottom: 50px;
  margin: 0 auto;
  max-width: 1000px;
`

const CardWrapper = styled.div`
  border-radius: 30px;
  box-shadow: 0 0 8px rgb(0, 0, 0, 0.5);
  padding: 30px;
  margin-left: 30px;
`

const CardTitle = styled.div`
  font-size: 28px;
  font-weight: bold;
  color: #3e4448;
`

const CardBody = styled.div`
  font-size: 20px;
  color: #54595d;
  margin-top: 40px;
`

const CardTagsWrapper = styled.div`
  margin-top: 40px;
`

const CardTag = styled.span`
  font-size: 20px;
  color: #54595d;
  margin-left: 10px;
  padding: 5px;
  border: 1px solid #54595d;
  border-radius: 5px;
`

const Card = ({ title, body, tags }) => {
  return (
    <CardWrapper>
      <CardTitle>{title}</CardTitle>
      <CardBody>{body}</CardBody>
      <CardTagsWrapper>
        {tags.map((tag, index) => {
          return <CardTag key={index}>{tag}</CardTag>
        })}
      </CardTagsWrapper>
    </CardWrapper>
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
        'クエスト型インターン、DMM GUILDに参加。DMMが実際に抱えている技術的な課題に挑戦。',
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
        'webエンジニアリングに関する基礎を学ぶ、その後、業務委託のアプリ開発案件に参加。',
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
      <CardsWrapper>
        {Items.map((item, index) => {
          return (
            <CirclAndCardWrapper>
              <Circle />
              <Card title={item.title} body={item.body} tags={item.tags} />
            </CirclAndCardWrapper>
          )
        })}
      </CardsWrapper>
    </Wrapper>
  )
}
