import React from 'react';
import styled from 'styled-components';
import { Layout } from 'consts/Layout';
import { Color } from 'consts/Color';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

const MyInfoItemWrapper = styled.div`
  display: flex;
  margin-top: 24px;
`;

const MyInfoItemRight = styled.div`
  margin-left: 46px;
`;

const MyInfoItemTitle = styled.div`
  color: ${Color.Black1};
  font-size: ${Layout.Text.Normal}px;
`;

const MyInfoItemContent = styled.div`
  color: ${Color.Black2};
  font-size: ${Layout.Text.Small}px;
  margin-top: 4px;
`;

type MyInfoItemType = {
  title: string;
  content: string;
  icon: IconProp;
  link?: string;
};

export const MyInfoItem = ({ title, content, icon }: MyInfoItemType) => {
  return (
    <MyInfoItemWrapper>
      <FontAwesomeIcon
        icon={icon}
        color={Color.Black2}
        size={'2x'}
        style={{ marginTop: '8px' }}
      />
      <MyInfoItemRight>
        <MyInfoItemTitle>{title}</MyInfoItemTitle>
        <MyInfoItemContent>{content}</MyInfoItemContent>
      </MyInfoItemRight>
    </MyInfoItemWrapper>
  );
};
