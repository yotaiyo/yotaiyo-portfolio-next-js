import Layout from '../components/MyLayout.js'
import styled from 'styled-components'
import MyImage from '../images/my-icon.jpg'

const ProfileCardWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 100px;
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
    width: 90px;
    font-size: 18px;
`

const HistoryBodyWrapper = styled.div`
    margin-left: 30px;
`

const HistoryBody1 = styled.div`
    font-size: 18px;
`

const HistoryBody2 = styled.div`
    font-size: 15px;
    margin-left: 5px;
`
const HistoryBody3 = styled.div`
    font-size: 15px;
    margin-left: 5px;
`

const HistoryCard = ({ age, body1, body2, body3 }) => (
    <HistoryCardWrapper>
        <Age>{age}</Age>
        <HistoryBodyWrapper> 
            <HistoryBody1>{body1}</HistoryBody1>
            <HistoryBody2>{body2}</HistoryBody2>
            <HistoryBody3>{body3}</HistoryBody3>
        </HistoryBodyWrapper>
    </HistoryCardWrapper>

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
                        大学院で音×機械学習をメインに研究を行なっている学生です。<br />
                        web系の技術にも興味を持っています。<br />
                        最近は、フロントエンドよりのコードを書いていることが多いです。<br />
                    </ProfileBody>

                    <History>
                        <Title>History</Title>
                        <HistoryCard age='2014.04~' body1='電気通信大学' body2='モダンジャズ研究会に入部。'/>
                        <HistoryCard age='2017.04~' body1={<a href='http://www.di.mi.uec.ac.jp/'>千葉研究室</a>} body2='好きだった音楽に関する研究テーマを選択。'/>
                        <HistoryCard age='2018.12~01' body1={<a href='https://apollo-project.jp/'>Apollo</a>} body2='webエンジニアリングに関する課題をこなす。' body3='その後、アプリ開発に参加。'/>
                        <HistoryCard age='2019.01~' body1={<a href='https://firebug.jp/'>FIREBUG</a>} body2='React Nativeを使用したアプリ開発に参加。' />
                    </History>
                </CardRight>
            </ProfileCard>
        </ProfileCardWrapper>
    </Layout>
)