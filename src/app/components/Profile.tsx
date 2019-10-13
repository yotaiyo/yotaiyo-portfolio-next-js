import React from 'react';
import styled from 'styled-components';
import IconImage from '../assets/images/icon.png';
import { Layout } from '../consts/Layout';
import { Color } from '../consts/Color';

const Wrapper = styled.div`
  padding-top: 120px;
  padding-left: 20px;
  padding-right: 20px;
  @media (max-width: 411px) {
    padding-top: 60px;
    padding-left: 10px;
    padding-right: 10px;
  }
`;

const Title = styled.h1`
  font-size: ${Layout.Text.Largest}px;
  color: ${Color.Black1};
  margin: 0 auto;
  border-bottom: 2px solid ${Color.Black1};
  width: 120px;
  @media (max-width: 411px) {
    font-size: ${Layout.Text.Larger}px;
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
  @media (max-width: 411px) {
    margin-top: 15px;
  }
`;

const IconWrapper = styled.div`
  text-align: center;
`;

const Icon = styled.img`
  height: 300px;
  width: 300px;
  border-radius: 30px;
  margin-right: 40px;
  box-shadow: 1px 1px 5px rgb(0, 0, 0, 0.5);
  @media (max-width: 900px) {
    margin-right: 0;
  }
  @media (max-width: 411px) {
    height: 150px;
    width: 150px;
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
    margin-left: 0;
  }
  @media (max-width: 411px) {
    font-size: ${Layout.Text.Small}px;
  }
`;

const ItemTitleAndBodyWrapper = styled.div`
  display: flex;
`;

const ItemTitle = styled.div`
  color: ${Color.Black2};
  text-align: left;
  margin-top: 12px;
  flex: 0.35;
`;

const ItemBody = styled.div`
  color: ${Color.Black2};
  text-align: left;
  margin-top: 12px;
  flex: 0.65;
`;

type ItemTitleAndBody = {
  body: string;
  title: string;
};

const ItemTitleAndBody = ({ body, title }: ItemTitleAndBody) => (
  <ItemTitleAndBodyWrapper>
    <ItemTitle>{title + ':'}</ItemTitle>
    <ItemBody>{body}</ItemBody>
  </ItemTitleAndBodyWrapper>
);

export const Profile = () => {
  const items = [
    { title: 'Name', body: 'Yota Anashige' },
    { title: 'BirthDay', body: '1995/12/18' },
    { title: 'College', body: 'The University of Electro-Communications' },
    {
      title: 'Grade',
      body: 'second-year master`s student ( on a leave of absence )'
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
              return (
                <ItemTitleAndBody
                  key={index}
                  body={item.body}
                  title={item.title}
                />
              );
            })}
          </ItemsWrapper>
        </ItemsTitleAndBodyWrapper>
      </IconAndItemsWrapper>
    </Wrapper>
  );
};
