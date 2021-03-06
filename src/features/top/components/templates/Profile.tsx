import React from 'react';
import styled from 'styled-components';
import IconImage from 'public/myicon.png';
import { Layout } from 'consts/Layout';
import { Color } from 'consts/Color';
import { ProfileItem } from '../molecules/ProfileItem';
import { profileItems } from 'consts/profileItems';

const Wrapper = styled.div`
  padding-top: 120px;
  padding-left: 20px;
  padding-right: 20px;
  @media (max-width: 414px) {
    padding-top: 60px;
    padding-left: 10px;
    padding-right: 10px;
  }
`;

const TitleWrapper = styled.h1`
  display: flex;
  justify-content: center;
`;

const Title = styled.span`
  font-size: ${Layout.Text.Largest}px;
  color: ${Color.Black1};
  border-bottom: 2px solid ${Color.Black1};
  @media (max-width: 414px) {
    font-size: ${Layout.Text.Larger}px;
  }
`;

const IconAndItemsWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
  @media (max-width: 1100px) {
    flex-direction: column;
  }
  @media (max-width: 414px) {
    margin-top: 15px;
  }
`;

const IconWrapper = styled.div`
  text-align: center;
`;

const Icon = styled.img`
  height: 300px;
  border-radius: 30px;
  margin-right: 20px;
  box-shadow: 1px 1px 5px rgb(0, 0, 0, 0.5);
  @media (max-width: 1100px) {
    margin-right: 0;
  }
  @media (max-width: 414px) {
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
  @media (max-width: 414px) {
    font-size: ${Layout.Text.Small}px;
    margin-left: 30px;
  }
`;

export const Profile = () => {
  return (
    <Wrapper>
      <TitleWrapper>
        <Title>Profile</Title>
      </TitleWrapper>
      <IconAndItemsWrapper>
        <IconWrapper>
          <Icon src={IconImage} alt="yotaiyo-icon" />
        </IconWrapper>
        <ItemsTitleAndBodyWrapper>
          <ItemsWrapper>
            {profileItems.map((item, index) => {
              return (
                <ProfileItem key={index} body={item.body} title={item.title} />
              );
            })}
          </ItemsWrapper>
        </ItemsTitleAndBodyWrapper>
      </IconAndItemsWrapper>
    </Wrapper>
  );
};
