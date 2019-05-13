import Layout from '../components/MyLayout.js'
import styled from 'styled-components'

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`

const ReposWrapper = styled.div`
    margin-top: 50px;
    display: flex;
    flex-direction: row;
    justify-content: center;
`

const ReposCardWrapper = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    box-shadow:0px 0px 6px 0.05px #000000;
    margin-top: 30px;
    border-radius: 30px;
    height: 150px;
`

const ReposTitle = styled.div`
    font-size: 25px;
    text-align: center;
`

const ReposBody = styled.div`
    text-align: center;
    margin-top: 20px;
    height: 60px;
`

const ReposKeywords = styled.div`
    text-align: center;
    margin-top: 20px;
`

const ReposCard = ({ title, body, keywords }) => (
    <ReposCardWrapper>
        <ReposTitle>{title}</ReposTitle>
        <ReposBody>{body}</ReposBody>
        <ReposKeywords>{'keywords: ' + keywords}</ReposKeywords>
    </ReposCardWrapper>
)

const ReposLeft = styled.div`
    flex: 0.4;
    margin-right: 30px;
`

const ReposRight = styled.div`
    flex: 0.4;
    margin-left: 30px;
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
                </ReposLeft>
                <ReposRight>
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
                </ReposRight>
            </ReposWrapper>
        </Wrapper>
    </Layout>
)