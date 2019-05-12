import Layout from '../components/MyLayout.js'
import styled from 'styled-components'
import MyImage from '../images/my-icon.jpg'

const Wrapper = styled.div`
    padding-top: 200px;
    padding-bottom: 200px;
`

const MyIcon = styled.img`
    height: 200px;
    width: 200px;
    border-radius: 200px;
`

const MyIconWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`

const Title = styled.div`
    text-align: center;
    font-size: 50px;
    margin-top: 30px;
`

export default () => (
    <Layout style={{ backgroundColor: 'blue' }}>
        <Wrapper>
            <MyIconWrapper>
                <MyIcon src={MyImage} alt='my-icon' />
            </MyIconWrapper>
            <Title>Welcome to Yotaiyo's Portfolio</Title>
        </Wrapper>
    </Layout>
)