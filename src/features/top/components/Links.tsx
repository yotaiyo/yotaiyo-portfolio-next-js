import React from 'react';
import styled from 'styled-components';
import { Layout } from 'src/consts/Layout';
import { Color } from 'src/consts/Color';
import githubIcon from 'public/github.png';
import twitterIcon from 'public/twitter.png';
import atcoderIcon from 'public/atcoder.png';

const Wrapper = styled.div`
  margin-top: 100px;
  @media (max-width: 414px) {
    margin-top: 30px;
  }
`;

const TitleWrapper = styled.h1`
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
  @media (max-width: 414px) {
    margin-bottom: 20px;
  }
`;

const Title = styled.span`
  font-size: ${Layout.Text.Largest}px;
  color: ${Color.Black1};
  border-bottom: 2px solid ${Color.Black1};
  @media (max-width: 414px) {
    font-size: ${Layout.Text.Larger}px;
  }
`;

const LinksIconWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Link = styled.a`
  transition: all 0.5s ease;
  &:hover {
    opacity: 0.7;
    filter: alpha(opacity=70);
  }
`;

const LinkIcon = styled.img`
  width: 50px;
  height: 50px;
  @media (max-width: 414px) {
    width: 48px;
    height: 48px;
  }
`;

export const Links = () => {
  return (
    <Wrapper>
      <TitleWrapper>
        <Title>Links</Title>
      </TitleWrapper>
      <LinksIconWrapper>
        <Link href="https://github.com/yotaiyo" target="_blank" rel="noopener">
          <LinkIcon src={githubIcon} alt="github" />
        </Link>
        <Link
          href="https://twitter.com/yotaiyo_1218"
          target="_blank"
          rel="noopener"
        >
          <LinkIcon
            src={twitterIcon}
            style={{ marginLeft: 30, marginRight: 30 }}
            alt="twitter"
          />
        </Link>
        <Link
          href="https://atcoder.jp/users/yotaiyo"
          target="_blank"
          rel="noopener"
        >
          <LinkIcon src={atcoderIcon} alt="atcoder" />
        </Link>
      </LinksIconWrapper>
    </Wrapper>
  );
};
