import React from 'react';
import styled from 'styled-components';
import { Layout } from 'consts/Layout';
import { Color } from 'consts/Color';
import { myInfo } from 'consts/profile';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

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

export const MyInfoItem = () => {
  return (
    <MyInfoItemWrapper>
      <FontAwesomeIcon
        icon={faEnvelope}
        color={Color.Black2}
        size={'2x'}
        style={{ marginTop: '8px' }}
      />
      <MyInfoItemRight>
        <MyInfoItemTitle>Email</MyInfoItemTitle>
        <MyInfoItemContent>{myInfo.email}</MyInfoItemContent>
      </MyInfoItemRight>
    </MyInfoItemWrapper>
  );
};
