import Layout from '../components/MyLayout.js'
import styled from 'styled-components'

const ReposWrapper = styled.div``

const ReposCardWrapper = styled.div`
    padding: 30px;
    width: 500px;
    height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const ReposTitle = styled.div`
    font-size: 30px;
`

const ReposBody = styled.div``

const ReposKeywords = styled.div``

const ReposCard = ({ title, body, keywords }) => (
    <ReposCardWrapper>
        <ReposTitle>{title}</ReposTitle>
        <ReposBody>{body}</ReposBody>
        <ReposKeywords>{'keywords: ' + keywords}</ReposKeywords>
    </ReposCardWrapper>
)

export default () => (
    <Layout>
        <ReposWrapper>
            <ReposCard 
                title='yotaiyo-portfolio-next-js' 
                body='このポートフォリオです。' 
                keywords='JavaScript, Next.js, Firebase'
            />
            <ReposCard 
                title='yotaiyo-portfolio-react' 
                body='ポートフォリオ第1弾。' 
                keywords='JavaScript, React, Github.io'
            />
            <ReposCard 
                title='music-auto-tagging' 
                body='楽曲波形から、そのジャンルや楽器、ムードといったタグを予測するレポジトリ。MagnaTagATuneと呼ばれる大規模データセットを用いる。' 
                keywords='Python3, Keras, TensorFlow, Scikit-learn, GPU'
            />
            <ReposCard 
                title='music-genre-classification' 
                body='楽曲波形から、そのジャンルを予測するレポジトリ。GTZANと呼ばれるデータセットを用いる。' 
                keywords='Python3, Keras, TensorFlow, Scikit-learn, GPU'
            />
            <ReposCard 
                title='weather-app-react' 
                body='お天気APIを叩いて、向こう3日間の情報を表示する。' 
                keywords='JavaScript, React, Github.io'
            />
            <ReposCard 
                title='jazz-genre-classification-svm' 
                body='ジャズ好きが高じて作成したレポジトリ。音源波形からBopなどのサブジャンルを予測する。' 
                keywords='Python3, Scikit-learn'
            />
            <ReposCard 
                title='jazz-genre-classification-cnn' 
                body='ジャズ好きが高じて作成したレポジトリ2。音源波形からBopなどのサブジャンルを予測する。' 
                keywords='Python3, TensorFlow, Scikit-learn'
            />
        </ReposWrapper>
    </Layout>
)