import Layout from '../components/MyLayout.js'
import styled from 'styled-components'
import LinkImage from '../images/link.png'

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 50px;
    margin-bottom: 50px;
    @media (max-width: 768px) {
        margin-top: 25px;
        margin-bottom: 25px;
    }
`

const ReposWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    @media (max-width:  1200px) {
        flex-direction: column;
    }
`

const ReposCardWrapper = styled.div`
    padding-top: 20px;
    padding-bottom: 20px;
    padding-left: 50px;
    padding-right: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    box-shadow:0px 0px 6px 0.05px #000000;
    margin-top: 30px;
    border-radius: 30px;
    height: 200px;
    @media (max-width: 768px) {
        padding-top: 10px;
        padding-bottom: 10px;
        padding-left: 25px;
        padding-right: 25px;
        margin-top: 15px;
        border-radius: 15px;
        height: 100px;
    }
`
const ReposTitleWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`

const ReposTitle = styled.div`
    font-size: 25px;
    font-weight: bold;
    @media (max-width: 768px) {
        font-size: 15px;
    }
`

const LinkIcon = styled.img`
    width: 15px;
    height: 15px;
    margin-top: 12px;
    @media (max-width: 768px) {
        width: 8px;
        height: 8px;
        margin-top: 0px;
        padding-bottom: 1px;
    }
`

const ReposBody = styled.div`
    text-align: center;
    margin-top: 20px;
    height: 60px;
    @media (max-width: 1200px) {
        margin-top: 10px;
        height: 30px;
    }
    @media (max-width: 768px) {
        font-size: 10px;   
    }
`

const ReposKeywords = styled.div`
    text-align: center;
    margin-top: 20px;
    @media (max-width: 1200px) {
        mqrgin-top: 10px;
    }
    @media (max-width: 768px) {
        font-size: 10px;   
    }
`

const ReposCard = ({ title, body, keywords, url }) => (
    <ReposCardWrapper>
        <ReposTitleWrapper>
            <ReposTitle>{title}</ReposTitle>
            <a href={url}>
                <LinkIcon src={LinkImage} alt='link-image' style={{ marginLeft: 8 }} />
            </a>
        </ReposTitleWrapper>
        <ReposBody>{body}</ReposBody>
        <ReposKeywords>{'keywords: ' + keywords}</ReposKeywords>
    </ReposCardWrapper>
)

const ReposLeft = styled.div`
    flex: 0.4;
    margin-right: 30px;
    @media (max-width: 1200px) {
        margin-left: 10px;    
        margin-right: 10px;    
    }
`

const ReposRight = styled.div`
    flex: 0.4;
    margin-left: 30px;
    @media (max-width: 1200px) {
        margin-left: 10px;
        margin-right: 10px;    
    }
`


export default () => (
    <Layout>
        <Wrapper>
            <ReposWrapper>
                <ReposLeft>
                    <ReposCard 
                        title='yotaiyo-portfolio-next-js' 
                        body='このポートフォリオです。' 
                        keywords='JavaScript, Next.js, Firebase'
                        url='https://github.com/yotaiyo/yotaiyo-portfolio-next-js'
                    />
                    <ReposCard 
                        title='yotaiyo-portfolio-react' 
                        body='ポートフォリオ第1弾。' 
                        keywords='JavaScript, React, Github.io'
                        url='https://github.com/yotaiyo/yotaiyo-portfolio-react'
                    />
                    <ReposCard 
                        title='music-auto-tagging' 
                        body='楽曲波形から、そのジャンルや楽器、ムードといったタグを予測するレポジトリ。MagnaTagATuneと呼ばれる大規模データセットを用いる。' 
                        keywords='Python3, Keras, TensorFlow, Scikit-learn, GPU'
                        url='https://github.com/yotaiyo/music-auto-tagging'
                    />
                    <ReposCard 
                        title='music-genre-classification' 
                        body='楽曲波形から、そのジャンルを予測するレポジトリ。GTZANと呼ばれるデータセットを用いる。' 
                        keywords='Python3, Keras, TensorFlow, Scikit-learn, GPU'
                        url='https://github.com/yotaiyo/music-genre-classification'
                    />
                </ReposLeft>
                <ReposRight>
                    <ReposCard 
                        title='weather-app-react' 
                        body='お天気APIを叩いて、向こう3日間の情報を表示する。' 
                        keywords='JavaScript, React, Github.io'
                        url='https://github.com/yotaiyo/weather-app-react'
                    />
                    <ReposCard 
                        title='jazz-genre-classification-svm' 
                        body='ジャズ好きが高じて作成したレポジトリ。音源波形からBopなどのサブジャンルを予測する。' 
                        keywords='Python3, Scikit-learn'
                        url='https://github.com/yotaiyo/jazz-genre-classification-svm'
                    />
                    <ReposCard 
                        title='jazz-genre-classification-cnn' 
                        body='ジャズ好きが高じて作成したレポジトリ2。音源波形からBopなどのサブジャンルを予測する。' 
                        keywords='Python3, TensorFlow, Scikit-learn'
                        url='https://github.com/yotaiyo/jazz-genre-classification-cnn'
                    />
                </ReposRight>
            </ReposWrapper>
        </Wrapper>
    </Layout>
)