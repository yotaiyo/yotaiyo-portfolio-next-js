import React from 'react';
import styled from 'styled-components';
import { Layout } from 'consts/Layout';
import { Color } from 'consts/Color';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

const MyInfoItemWrapper = styled.div`
  display: flex;
  margin-top: 48px;
`;

const MyInfoItemRight = styled.div`
  margin-left: 46px;
`;

const MyInfoItemTitleWrapper = styled.div`
  display: flex;
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
  margin-top: 4px;
  width: 40px;
  height: 40px;
  opacity: 0.6;
  filter: alpha(opacity=60);
`;

const LinkWrapper = styled.a`
  color: ${Color.Black1};
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
  fontAwesomeIcon,
  link
}: MyInfoItemType) => {
  return (
    <MyInfoItemWrapper>
      {icon ? <Icon src={icon} alt={`${title} Icon`} /> : null}
      {fontAwesomeIcon ? (
        <FontAwesomeIcon
          icon={fontAwesomeIcon}
          size={'2x'}
          style={{
            marginTop: '4px',
            opacity: '0.6',
            filter: 'alpha(opacity=60)',
            width: '40px',
            height: '40px'
          }}
        />
      ) : null}
      <MyInfoItemRight>
        <MyInfoItemTitleWrapper>
          <MyInfoItemTitle>{title}</MyInfoItemTitle>
          {link ? (
            <LinkWrapper
              href={link}
              target="_blank"
              rel="noopener"
              title={`link of ${title}`}
            >
              <FontAwesomeIcon
                icon={faExternalLinkAlt}
                style={{
                  marginLeft: '6px',
                  opacity: '0.6',
                  filter: 'alpha(opacity=60)',
                  width: '20px',
                  height: '20px'
                }}
              />
            </LinkWrapper>
          ) : null}
        </MyInfoItemTitleWrapper>
        <MyInfoItemContent>{content}</MyInfoItemContent>
      </MyInfoItemRight>
    </MyInfoItemWrapper>
  );
};
