import React from 'react'
import styled from 'styled-components'
import IconImage from '../assets/images/icon.png'
import { Layout } from '../consts/Layout'

const Wrapper = styled.div`
  padding-top: 120px;
`

const Title = styled.h1`
  font-size: ${Layout.Text.Largest}px;
  color: #3e4448;
  margin: 0 auto;
  border-bottom: 2px solid #3e4448;
  width: 130px;
`

const IconAndItemsWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
`

const Icon = styled.img`
  height: 280px;
  width: 280px;
  border-radius: 30px;
  margin-right: 40px;
  box-shadow: 1px 1px 5px rgb(0, 0, 0, 0.5);
`

const ItemsWrapper = styled.div`
  margin-left: 60px;
  margin-top: 8px;
`

const ItemTitle = styled.div`
  font-size: ${Layout.Text.Normal}px;
  color: #54595d;
  text-align: left;
  margin-top: 12px;
`

const ItemBody = styled.div`
  font-size: ${Layout.Text.Normal}px;
  color: #54595d;
  text-align: left;
  margin-top: 12px;
  white-space: nowrap;
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
            return <ItemTitle key={index}>{item.title + ':'}</ItemTitle>
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
