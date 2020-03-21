import React from 'react';
import styled from 'styled-components';
import { Layout } from 'consts/Layout';
import { Color } from 'consts/Color';
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
  background-color: ${Color.Black3};
  height: 2px;
  flex: 1;
  margin-top: ${Layout.Text.Largest / 2 + 4}px;
  margin-left: 10px;
`;

const CardWrapper = styled.div`
  width: 480px;
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
  border-radius: 2px;
`;

const MyHeader = styled.img`
  width: 480px;
  height: 250px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
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

const MyProfileCard = styled.div`
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

const MyProfileCardRight = styled.div`
  flex: 1;
  padding-top: ${65 / 2 - 16}px;
  padding-right: 4px;
`;

const ArrowWrapper = styled.div`
  float: right;
  cursor: pointer;
  width: 35px;
  height: 35px;
  border-radius: 35px;
  text-align: center;
  &:hover {
    background-color: ${Color.Black3};
  }
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
          <MyProfileCard>
            <MyIcon src={MyIconImage} alt="my icon" />
            <MyNameAndRoleWrapper>
              <MyName>{myInfo.name}</MyName>
              <MyRole>{myInfo.role}</MyRole>
            </MyNameAndRoleWrapper>
            <MyProfileCardRight>
              <ArrowWrapper onClick={() => onClickArrow(showMyInfo)}>
                <FontAwesomeIcon
                  icon={faChevronDown}
                  color={Color.Black2}
                  size={'lg'}
                  style={{
                    marginTop: '8px',
                    transitionProperty: 'transform',
                    transitionDuration: '0.2s',
                    transitionTimingFunction: 'linear',
                    transform: `rotate(${showMyInfo ? 0 : 180}deg)`
                  }}
                />
              </ArrowWrapper>
            </MyProfileCardRight>
          </MyProfileCard>
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
