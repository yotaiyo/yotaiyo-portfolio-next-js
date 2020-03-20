import React from 'react';
import styled from 'styled-components';
import { Layout } from 'consts/Layout';
import { Color } from 'consts/Color';
import { ProfileItem } from '../molecules/ProfileItem';
import { myInfo } from 'consts/profile';
import MyIconImage from 'public/my-icon.png';
import MyHeaderImage from 'public/my-header.png';
import TwitterIcon from 'public/twitter.png';
import GithubIcon from 'public/github.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronDown,
  faEnvelope,
  faHeart,
  faGraduationCap,
  faBirthdayCake
} from '@fortawesome/free-solid-svg-icons';
import { MyInfoItem } from '../molecules/MyInfoItem';

const Wrapper = styled.div``;

const TitleWrapper = styled.div`
  display: flex;
  margin-bottom: 24px;
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

const CardWrapper = styled.div`
  width: 500px;
  border: 1px solid ${Color.Black3};
`;

const MyHeader = styled.img`
  width: 500px;
  height: 250px;
`;

type CardBottomWrapperType = {
  showMyInfo: boolean;
};

const CardBottomWrapper = styled.div.attrs((props: CardBottomWrapperType) => ({
  showMyInfo: props.showMyInfo
}))`
  padding: 12px;
  margin-top: 12px;
  overflow: hidden;
  height: ${props => (props.showMyInfo ? '72px' : '630px')};
  transition-property: height;
  transition-duration: 0.2s;
  transition-timing-function: linear;
`;

const CardBottom = styled.div`
  display: flex;
`;

const MyIcon = styled.img`
  height: 65px;
  width: 65px;
  border-radius: 65px;
`;

const MyNameAndRoleWrapper = styled.div`
  margin-left: 12px;
`;

const MyName = styled.div`
  color: ${Color.Black1};
  font-size: ${Layout.Text.Larger}px;
  font-weight: bold;
  margin-bottom: 12px;
`;

const MyRole = styled.div`
  color: ${Color.Black2};
  font-size: ${Layout.Text.Small}px;
`;

const ArrowWrapper = styled.div`
  flex: 1;
  padding-top: ${65 / 2 - 4}px;
  padding-right: 4px;
`;

const MyInfoDetailWrapper = styled.div`
  margin-top: 24px;
`;

type ProfileType = {
  showMyInfo: boolean;
  onClickArrow(showMyInfo: boolean): void;
};

export const Profile = ({ showMyInfo, onClickArrow }: ProfileType) => {
  return (
    <Wrapper>
      <TitleWrapper>
        <TitleText>Profile</TitleText>
        <TitleLine />
      </TitleWrapper>
      <CardWrapper>
        <MyHeader src={MyHeaderImage} alt="my header" />
        <CardBottomWrapper showMyInfo={showMyInfo}>
          <CardBottom>
            <MyIcon src={MyIconImage} alt="my icon" />
            <MyNameAndRoleWrapper>
              <MyName>{myInfo.name}</MyName>
              <MyRole>{myInfo.role}</MyRole>
            </MyNameAndRoleWrapper>
            <ArrowWrapper>
              <FontAwesomeIcon
                icon={faChevronDown}
                color={Color.Black2}
                size={'lg'}
                style={{ float: 'right', cursor: 'pointer' }}
                onClick={() => onClickArrow(showMyInfo)}
              />
            </ArrowWrapper>
          </CardBottom>
          <MyInfoDetailWrapper>
            <MyInfoItem
              title="Email"
              content={myInfo.email}
              fontAwesomeIcon={faEnvelope}
            />
            <MyInfoItem
              title="Twitter"
              content={myInfo.twitter.id}
              icon={TwitterIcon}
              link={myInfo.twitter.link}
            />
            <MyInfoItem
              title="Github"
              content={myInfo.github.id}
              icon={GithubIcon}
              link={myInfo.github.link}
            />
            <MyInfoItem
              title="Likes"
              content={myInfo.likes}
              fontAwesomeIcon={faHeart}
            />
            <MyInfoItem
              title="College"
              content={myInfo.college}
              fontAwesomeIcon={faGraduationCap}
            />
            <MyInfoItem
              title="Birthday"
              content={myInfo.birthday}
              fontAwesomeIcon={faBirthdayCake}
            />
          </MyInfoDetailWrapper>
        </CardBottomWrapper>
      </CardWrapper>
    </Wrapper>
  );
};
