import React from 'react';
import styled from 'styled-components';
import { Layout } from 'consts/Layout';
import { Color } from 'consts/Color';
import { ProfileItem } from '../molecules/ProfileItem';
import { profileItems } from 'consts/profileItems';
import MyIconImage from 'public/my-icon.png';
import MyHeaderImage from 'public/my-header.png';

const Wrapper = styled.div``;

const TitleWrapper = styled.div`
  display: flex;
`;

const TitleText = styled.span`
  font-size: ${Layout.Text.Largest}px;
  font-weight: bold;
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

const CardBottomWrapper = styled.div``;

const CardBottom = styled.div``;

const MyIcon = styled.img`
  height: 65px;
  width: 65px;
  border-radius: 65px;
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
          </CardBottom>
        </CardBottomWrapper>
      </CardWrapper>
    </Wrapper>
  );
};
