import Layout from '../components/MyLayout.js'
import styled from 'styled-components'
import MyImage from '../images/my-icon.jpg'
import LinkImage from '../images/link.png'

const ProfileCardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 150px;
  margin-bottom: 50px;
  @media (max-width: 768px) {
    margin-top: 70px;
    margin-bottom: 50px;
  }
`

const ProfileCard = styled.div`
  display: flex;
  flex-direction: row;
`

const MyIcon = styled.img`
  height: 180px;
  width: 180px;
  border-radius: 180px;
  @media (max-width: 768px) {
    height: 25px;
    width: 25px;
    border-radius: 25px;
    margin-left: 10px;
  }
`

const CardRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 30px;
  @media (max-width: 768px) {
    margin-left: 10px;
  }
`

const Title = styled.div`
  font-size: 35px;
  @media (max-width: 768px) {
    font-size: 15px;
  }
`

const ProfileBody = styled.div`
  margin-top: 10px;
  margin-left: 5px;
  font-size: 18px;
  @media (max-width: 768px) {
    margin-top: 0px;
    margin-left: 5px;
    margin-right: 5px;
    font-size: 10px;
  }
`

const History = styled.div`
  margin-top: 50px;
  @media (max-width: 768px) {
    margin-top: 25px;
  }
`

const HistoryCardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 500px;
  margin-top: 10px;
  margin-left: 5px;
  @media (max-width: 768px) {
    width: 300px;
  }
`

const Age = styled.div`
  width: 120px;
  font-size: 18px;
  @media (max-width: 768px) {
    width: 80px;
    font-size: 10px;
  }
`

const HistoryBodyWrapper = styled.div`
  margin-left: 30px;
  @media (max-width: 768px) {
    margin-left: 0px;
  }
`

const HistoryBodyTitle = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: 768px) {
    height: 15px;
  }
`

const HistoryTitle = styled.div`
  font-size: 18px;
  font-weight: bold;
  @media (max-width: 768px) {
    font-size: 10px;
  }
`

const HistoryBody2 = styled.div`
  font-size: 15px;
  margin-left: 5px;
  margin-top: 6px;
  @media (max-width: 768px) {
    font-size: 10px;
  }
`
const HistoryBody3 = styled.div`
  font-size: 15px;
  margin-left: 5px;
  @media (max-width: 768px) {
    font-size: 10px;
  }
`

const Links = styled.div`
  margin-top: 50px;
`

const LinksWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  margin-left: 20px;
`

const LinkWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 5px;
`

const LinkBody = styled.div`
  font-size: 18px;
  width: 80px;
  @media (max-width: 768px) {
    font-size: 10px;
    width: 48px;
    height: 10px;
  }
`

const LinkIcon = styled.img`
  width: 12px;
  height: 12px;
  margin-top: 8px;
  @media (max-width: 768px) {
    width: 8px;
    height: 8px;
    margin-top: 0px;
    padding-bottom: 6px;
  }
`

const HistoryCard = ({ age, title, body2, body3, url }) => (
  <HistoryCardWrapper>
    <Age>{age}</Age>
    <HistoryBodyWrapper>
      <HistoryBodyTitle>
        <HistoryTitle>{title}</HistoryTitle>
        {url ? (
          <a href={url}>
            <LinkIcon
              src={LinkImage}
              alt="link-image"
              style={{ marginLeft: 4 }}
            />
          </a>
        ) : (
          <div></div>
        )}
      </HistoryBodyTitle>
      <HistoryBody2>{body2}</HistoryBody2>
      <HistoryBody3>{body3}</HistoryBody3>
    </HistoryBodyWrapper>
  </HistoryCardWrapper>
)

const Link = ({ body, url }) => (
  <LinkWrapper>
    <LinkBody>{body}</LinkBody>
    <a href={url}>
      <LinkIcon src={LinkImage} alt="link-image" />
    </a>
  </LinkWrapper>
)

export default () => (
  <Layout>
    <ProfileCardWrapper>
      <ProfileCard>
        <MyIcon src={MyImage} />

        <CardRight>
          <Title>Profile</Title>
          <ProfileBody>
            はじめまして。私は穴繁 陽太と申します。
            <br />
            大学院で 音×機械学習 をメインに研究をしている学生です。
            <br />
            web系の技術に興味があります。
            <br />
            最近は、フロントエンドよりのコードを書いていることが多いです。
            <br />
          </ProfileBody>

          <History>
            <Title>History</Title>
            <HistoryCard
              age="2014.04 ~"
              title="電気通信大学"
              body2="モダンジャズ研究会に入部。"
            />
            <HistoryCard
              age="2017.04 ~"
              title="千葉研究室"
              body2="好きだった音楽に関する研究テーマを選択。"
              url="http://www.di.mi.uec.ac.jp/"
            />
            <HistoryCard
              age="2018.12 ~ 01"
              title="Apollo"
              body2="webエンジニアリングに関する課題をこなす。"
              body3="その後、アプリ開発に参加。"
              url="https://apollo-project.jp/"
            />
            <HistoryCard
              age="2019.01 ~"
              title="FIREBUG"
              body2="React Nativeを使用したアプリ開発に参加。"
              url="https://firebug.jp/"
            />
          </History>

          <Links>
            <Title>Links</Title>
            <LinksWrapper>
              <Link body="Github" url="https://github.com/yotaiyo" />
              <Link body="AtCoder" url="https://atcoder.jp/users/yotaiyo" />
              <Link body="Twitter" url="https://twitter.com/yotaiyo_1218" />
            </LinksWrapper>
          </Links>
        </CardRight>
      </ProfileCard>
    </ProfileCardWrapper>
  </Layout>
)
