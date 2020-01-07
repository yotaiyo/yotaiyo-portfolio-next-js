import React from 'react';
import styled from 'styled-components';
import { Color } from 'consts/Color';

const ProfileItemWrapper = styled.div`
  display: flex;
`;

const ItemTitle = styled.div`
  color: ${Color.Black2};
  text-align: left;
  margin-top: 12px;
  flex: 0.25;
  @media (max-width: 414px) {
    flex: 0.4;
  }
`;

const ItemBody = styled.div`
  color: ${Color.Black2};
  text-align: left;
  margin-top: 12px;
  flex: 0.75;
  @media (max-width: 414px) {
    flex: 0.65;
  }
`;

type ProfileItem = {
  body: string;
  title: string;
};

export const ProfileItem = ({ body, title }: ProfileItem) => (
  <ProfileItemWrapper>
    <ItemTitle>{title + ':'}</ItemTitle>
    <ItemBody>{body}</ItemBody>
  </ProfileItemWrapper>
);
