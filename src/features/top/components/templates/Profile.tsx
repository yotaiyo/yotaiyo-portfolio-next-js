import React from 'react';
import styled from 'styled-components';
import { Layout } from 'consts/Layout';
import { Color } from 'consts/Color';
import { ProfileItem } from '../molecules/ProfileItem';
import { profileItems } from 'consts/profileItems';
import IconImage from 'public/my-icon.png';
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

const CardHeaderImage = styled.img`
  width: 500px;
  height: 250px;
`;

export const Profile = () => {
  return (
    <Wrapper>
      <TitleWrapper>
        <TitleText>Profile</TitleText>
        <TitleLine />
      </TitleWrapper>
      <CardWrapper>
        <CardHeaderImage src={MyHeaderImage} />
      </CardWrapper>
    </Wrapper>
  );
};
