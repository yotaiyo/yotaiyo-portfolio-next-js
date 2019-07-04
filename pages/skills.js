import React, { Component } from 'react'
import Layout from '../components/MyLayout.js'
import styled from 'styled-components'

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;   
    margin-top: 100px;
    margin-bottom: 50px;
    @media (max-width: 768px) {
        margin-top: 50px;
        margin-bottom: 25px;
    }

`

const SkillsWrapper = styled.div`
    display: flex;
    flex-direction: column;
`

const SkillsTitleWrapper = styled.div`
    display: flex;
    flex-direction: row;
    padding-top: 10px;
    padding-bottom: 5px;
    @media (max-width: 768px) {
        padding-top: 5px;
        padding-bottom: 2px;
    }
`

const Title = styled.div`
    font-size: 30px;
    margin-left: 15px;
    @media (max-width: 768px) {
        font-size: 15px;
        margin-left: 8px;
    }
`

const SkillsCardWrapper = styled.div`
    margin-left: 70px;
    display: flex;
    flex-direction: row;
    @media (max-width: 768px) {
        margin-left: 30px;
    }
`

const SkillsBody = styled.div`
    font-size: 20px;
    padding-top: 5px;
    padding-bottom: 5px;
    width: 200px;
    @media (max-width: 768px) {
        font-size: 12px;
        padding-top: 3px;
        padding-bottom: 3px;
        width: 120px;
    }
`

const Star = styled.div`
    position: relative;
    width: 5em;
    height: 1em;
    font-size: 25px;
    z-index: 0;
    @media (max-width: 768px) {
        width: 5em;
        height: 0.5em;
        font-size: 15px;    
    }
`

const StarFront = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    overflow: hidden;
    color: #FFFF00;
    z-index: 0;
`

const StarBack = styled.div`
    color: #ccc;
`

const SkillsTitle = ({ title }) => (
    <SkillsTitleWrapper>
        <Title>{title}</Title>
    </SkillsTitleWrapper>
) 

const SkillsCard = ({ body, width }) => (
    <SkillsCardWrapper>
        <SkillsBody>{body}</SkillsBody>
        <Star>
            <StarFront style={{ width: width }}>★★★★★</StarFront>
            <StarBack>★★★★★</StarBack>
        </Star>
    </SkillsCardWrapper>
)

class Skills extends Component {
    render() {

    return (
        <Layout>
            <Wrapper>
                <SkillsWrapper>
                    <SkillsTitle title='Languages' />
                        <SkillsCard body='Python3' width='80%' />
                        <SkillsCard body='TypeScript' width='60%' />
                        <SkillsCard body='JavaScript' width='60%' />
                        <SkillsCard body='HTML / CSS' width='60%' />
                        <SkillsCard body='Ruby' width='20%' />
                    <SkillsTitle title='Frameworks & Libraries' />
                        <SkillsCard body='React Native' width='80%' />
                        <SkillsCard body='React' width='80%' />
                        <SkillsCard body='Next.js' width='60%' />
                        <SkillsCard body='jQuery' width='40%' />
                        <SkillsCard body='Bootstrap' width='60%' />
                        <SkillsCard body='Ruby on Rails' width='40%' />
                        <SkillsCard body='Keras' width='80%' />
                        <SkillsCard body='TensorFlow' width='40%' />
                        <SkillsCard body='Scikit-learn' width='60%' />
                    <SkillsTitle title='Others' />
                        <SkillsCard body='Mac OS' width='80%' />
                        <SkillsCard body='Ubuntu' width='80%' />
                        <SkillsCard body='Windows' width='60%' />
                        <SkillsCard body='VS code' width='60%' />
                        <SkillsCard body='Git' width='60%' />
                        <SkillsCard body='GPU' width='60%' />
                        <SkillsCard body='Circle CI' width='20%' />
                        <SkillsCard body='Heroku' width='20%' />
                        <SkillsCard body='AWS' width='20%' />
                        <SkillsCard body='Firebase' width='20%' />
                </SkillsWrapper>
            </Wrapper>
        </Layout>
    )
 }
}

export default Skills