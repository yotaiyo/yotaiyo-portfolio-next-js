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

const Icon = styled.img`
  margin-top: 8px;
  width: 33px;
  height: 33px;
  opacity: 0.5;
  filter: alpha(opacity=50);
`;

type MyInfoItemType = {
  title: string;
  content: string;
  icon?: any;
  fontAwesomeIcon?: IconProp;
  link?: string;
};

export const MyInfoItem = ({
  title,
  content,
  icon,
  fontAwesomeIcon
}: MyInfoItemType) => {
  return (
    <MyInfoItemWrapper>
      {icon ? <Icon src={icon} alt={`${title} Icon`} /> : null}
      {fontAwesomeIcon ? (
        <FontAwesomeIcon
          icon={fontAwesomeIcon}
          size={'2x'}
          style={{
            marginTop: '8px',
            opacity: '0.5',
            filter: 'alpha(opacity=50)'
          }}
        />
      ) : null}
      <MyInfoItemRight>
        <MyInfoItemTitle>{title}</MyInfoItemTitle>
        <MyInfoItemContent>{content}</MyInfoItemContent>
      </MyInfoItemRight>
    </MyInfoItemWrapper>
  );
};
