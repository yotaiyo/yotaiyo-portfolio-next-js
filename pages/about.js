import Layout from '../components/MyLayout.js'
import styled from 'styled-components'
import MyImage from '../images/my-icon.jpg'
import LinkImage from '../images/link.png'

const ProfileCardWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 100px;
    margin-bottom: 50px;
`

const ProfileCard = styled.div`
    display: flex;
    flex-direction: row;
`

const MyIcon = styled.img`
    height: 180px;
    width: 180px;
    border-radius: 180px;
`

const CardRight = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 30px;
`

const Title = styled.div`
    font-size: 35px;
`

const ProfileBody = styled.div`
    margin-top: 10px;
    margin-left: 5px;
    font-size: 18px;
`

const History = styled.div`
    margin-top: 50px;
`

const HistoryCardWrapper = styled.div`
    display: flex;
    flex-direction: row;
    width: 500px;
    margin-top: 10px;
    margin-left: 5px;
`

const Age = styled.div`
    width: 120px;
    font-size: 18px;
`

const HistoryBodyWrapper = styled.div`
    margin-left: 30px;
`

const HistoryBodyTitle = styled.div`
    display: flex;
    flex-direction: row;
`

const HistoryTitle = styled.div`
    font-size: 18px;
    font-weight: bold;
`

const HistoryBody2 = styled.div`
    font-size: 15px;
    margin-left: 5px;
    margin-top: 6px;
`
const HistoryBody3 = styled.div`
    font-size: 15px;
    margin-left: 5px;
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
`

const LinkIcon = styled.img`
    width: 12px;
    height: 12px;
    margin-top: 8px;
`

const HistoryCard = ({ age, title, body2, body3, url }) => (
    <HistoryCardWrapper>
        <Age>{age}</Age>
        <HistoryBodyWrapper>
            <HistoryBodyTitle> 
                <HistoryTitle>{title}</HistoryTitle>
                { url ?
                <a href={url}>
                    <LinkIcon src={LinkImage} alt='link-image' style={{ marginLeft: 8 }} />
                </a> : <div></div>
                }
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
            <LinkIcon src={LinkImage} alt='link-image' />
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
                        はじめまして。私は穴繁 陽太と申します。<br />
                        大学院で 音×機械学習 をメインに研究をしている学生です。<br />
                        web系の技術に興味があります。<br />
                        最近は、フロントエンドよりのコードを書いていることが多いです。<br />
                    </ProfileBody>

                    <History>
                        <Title>History</Title>
                        <HistoryCard age='2014.04 ~' title='電気通信大学' body2='モダンジャズ研究会に入部。'/>
                        <HistoryCard age='2017.04 ~' title='千葉研究室' body2='好きだった音楽に関する研究テーマを選択。' url='http://www.di.mi.uec.ac.jp/' />
                        <HistoryCard age='2018.12 ~ 01' title='Apollo' body2='webエンジニアリングに関する課題をこなす。' body3='その後、アプリ開発に参加。' url='https://apollo-project.jp/' />
                        <HistoryCard age='2019.01 ~' title='FIREBUG' body2='React Nativeを使用したアプリ開発に参加。' url='https://firebug.jp/' />
                    </History>

                    <Links>
                        <Title>Links</Title>
                        <LinksWrapper>
                            <Link body='Github' url='https://github.com/yotaiyo' />
                            <Link body='AtCoder' url='https://atcoder.jp/users/yotaiyo' />
                            <Link body='Twitter' url='https://twitter.com/yotaiyo_1218'/>
                        </LinksWrapper>
                    </Links>
                </CardRight>
            </ProfileCard>
        </ProfileCardWrapper>
    </Layout>
)