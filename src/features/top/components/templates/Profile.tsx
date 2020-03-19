import React from 'react';
import styled from 'styled-components';
import { Layout } from 'consts/Layout';
import { Color } from 'consts/Color';
import { ProfileItem } from '../molecules/ProfileItem';
import { profileItems } from 'consts/profileItems';
import IconImage from 'public/myicon.png';

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

export const Profile = () => {
  return (
    <Wrapper>
      <TitleWrapper>
        <TitleText>Profile</TitleText>
        <TitleLine />
      </TitleWrapper>
    </Wrapper>
  );
};
