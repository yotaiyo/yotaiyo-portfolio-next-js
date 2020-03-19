import React from 'react';
import styled from 'styled-components';
import { Layout } from 'consts/Layout';
import { Color } from 'consts/Color';
import { ProfileItem } from '../molecules/ProfileItem';
import { myInfo } from 'consts/profile';
import MyIconImage from 'public/my-icon.png';
import MyHeaderImage from 'public/my-header.png';

const Wrapper = styled.div``;

const TitleWrapper = styled.div`
  display: flex;
`;

const TitleText = styled.span`
  font-size: ${Layout.Text.Largest}px;
  font-weight: bold;
  color: ${Color.Black1};
`;

const TitleLine = styled.div`
  background-color: ${Color.Black1};
  height: 2px;
  flex: 1;
  margin-top: ${Layout.Text.Largest / 2 + 4}px;
  margin-left: 10px;
`;

const CardWrapper = styled.div``;

const MyHeader = styled.img`
  width: 500px;
  height: 250px;
`;

const CardBottomWrapper = styled.div`
  padding: 12px;
`;

const CardBottom = styled.div`
  display: flex;
`;

const MyIcon = styled.img`
  height: 65px;
  width: 65px;
  border-radius: 65px;
`;

const CardBottomRight = styled.div`
  margin-left: 12px;
`;

const MyName = styled.div`
  color: ${Color.Black2};
  font-size: ${Layout.Text.Larger}px;
  font-weight: bold;
  margin-bottom: 12px;
`;

const MyRole = styled.div`
  color: ${Color.Black2};
  font-size: ${Layout.Text.Small}px;
`;

export const Profile = () => {
  return (
    <Wrapper>
      <TitleWrapper>
        <TitleText>Profile</TitleText>
        <TitleLine />
      </TitleWrapper>
      <CardWrapper>
        <MyHeader src={MyHeaderImage} alt="my header" />
        <CardBottomWrapper>
          <CardBottom>
            <MyIcon src={MyIconImage} alt="my icon" />
            <CardBottomRight>
              <MyName>{myInfo.name}</MyName>
              <MyRole>{myInfo.role}</MyRole>
            </CardBottomRight>
          </CardBottom>
        </CardBottomWrapper>
      </CardWrapper>
    </Wrapper>
  );
};
