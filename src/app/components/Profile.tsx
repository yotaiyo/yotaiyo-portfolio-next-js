import React from 'react';
import styled from 'styled-components';
import IconImage from '../assets/images/icon.png';
import { Layout } from '../consts/Layout';
import { Color } from '../consts/Color';

const Wrapper = styled.div`
  padding-top: 120px;
  @media (max-width: 900px) {
    padding-top: 60px;
  }
`;

const Title = styled.h1`
  font-size: ${Layout.Text.Largest}px;
  color: ${Color.Black1};
  margin: 0 auto;
  border-bottom: 2px solid ${Color.Black1};
  width: 130px;
  @media (max-width: 900px) {
    font-size: ${Layout.Text.Large}px;
    width: 85px;
  }
`;

const IconAndItemsWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
  @media (max-width: 1100px) {
    flex-direction: column;
  }
`;

const IconWrapper = styled.div`
  text-align: center;
`;

const Icon = styled.img`
  height: 280px;
  width: 280px;
  border-radius: 30px;
  margin-right: 40px;
  box-shadow: 1px 1px 5px rgb(0, 0, 0, 0.5);
  @media (max-width: 900px) {
    height: 200px;
    width: 200px;
  }
`;

const ItemsTitleAndBodyWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const ItemsWrapper = styled.div`
  margin-left: 60px;
  margin-top: 8px;
  flex-direction: row;
  font-size: ${Layout.Text.Normal}px;
  @media (max-width: 900px) {
    font-size: ${Layout.Text.Small}px;
    margin-left: 20px;
  }
`;

const ItemTitle = styled.div`
  color: ${Color.Black2};
  text-align: left;
  margin-top: 12px;
`;

const ItemBody = styled.div`
  color: ${Color.Black2};
  text-align: left;
  margin-top: 12px;
  white-space: nowrap;
`;

export const Profile = () => {
  const items = [
    { title: 'Name', body: 'Yota Anashige' },
    { title: 'BirthDay', body: '1995/12/18' },
    { title: 'College', body: 'The University of Electro-Communications' },
    {
      title: 'Grade',
      body: 'second-year master`s student ( leave of absence )'
    },
    { title: 'Graduation', body: '2021' },
    { title: 'Interests', body: 'web, front-end' },
    { title: 'Hobbies', body: 'music, jazz, guitar' }
  ];
  return (
    <Wrapper>
      <Title>Profile</Title>
      <IconAndItemsWrapper>
        <IconWrapper>
          <Icon src={IconImage} />
        </IconWrapper>
        <ItemsTitleAndBodyWrapper>
          <ItemsWrapper>
            {items.map((item, index) => {
              return <ItemTitle key={index}>{item.title + ':'}</ItemTitle>;
            })}
          </ItemsWrapper>
          <ItemsWrapper>
            {items.map((item, index) => {
              return <ItemBody key={index}>{item.body}</ItemBody>;
            })}
          </ItemsWrapper>
        </ItemsTitleAndBodyWrapper>
      </IconAndItemsWrapper>
    </Wrapper>
  );
};
