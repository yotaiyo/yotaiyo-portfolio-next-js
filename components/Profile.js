import React from 'react'
import styled from 'styled-components'
import IconImage from '../images/icon.png'

const Wrapper = styled.div``

const Title = styled.h1`
  font-size: 48px;
  color: #3e4448;
  margin: 0 auto;
  border-bottom: 2px solid #3e4448;
  width: 150px;
`

const IconAndItemsWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
`

const Icon = styled.img`
  height: 300px;
  width: 300px;
  border-radius: 30px;
  margin-right: 40px;
`

const ItemsWrapper = styled.div`
  margin-left: 60px;
  margin-top: 12px;
`

const ItemTitle = styled.div`
  font-size: 24px;
  color: #54595d;
  text-align: left;
  margin-top: 12px;
  font-weight: bold;
`

const ItemBody = styled.div`
  font-size: 24px;
  color: #54595d;
  text-align: left;
  margin-top: 12px;
`

export const Profile = () => {
  const items = [
    { title: 'Name', body: 'Yota Anashige' },
    { title: 'BirthDay', body: '1995/12/18' },
    { title: 'College', body: 'The University of Electro-Communications' },
    {
      title: 'Grade',
      body: 'second-year master`s student (on a leave of absence )'
    },
    { title: 'Graduation', body: '2021' },
    { title: 'Interests', body: 'web, front-end' },
    { title: 'Hobbies', body: 'music, jazz, guitar' }
  ]
  return (
    <Wrapper>
      <Title>Profile</Title>
      <IconAndItemsWrapper>
        <Icon src={IconImage} />
        <ItemsWrapper>
          {items.map((item, index) => {
            return <ItemTitle key={index}>{item.title}</ItemTitle>
          })}
        </ItemsWrapper>
        <ItemsWrapper>
          {items.map((item, index) => {
            return <ItemBody key={index}>{item.body}</ItemBody>
          })}
        </ItemsWrapper>
      </IconAndItemsWrapper>
    </Wrapper>
  )
}
