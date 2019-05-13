import React, { Component } from 'react'
import Layout from '../components/MyLayout.js'
import styled from 'styled-components'
import arrowImage from '../images/arrow.png'

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;   
    margin-top: 50px;
    margin-bottom: 50px;
`

const SkillsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 10px; 
`

const SkillsTitleWrapper = styled.div`
    display: flex;
    flex-direction: row;
    padding-top: 10px;
    padding-bottom: 10px;
`

const Arrow = styled.img`
    width: 30px;
    height: 30px;
    margin-top: 7px;
`

const Title = styled.div`
    font-size: 30px;
    margin-left: 15px;
`

const SkillsCardWrapper = styled.div`
    margin-left: 70px;
    display: flex;
    flex-direction: row;
`

const SkillsBody = styled.div`
    font-size: 20px;
    padding-top: 5px;
    padding-bottom: 5px;
    width: 200px;
`

const Star = styled.div`
    position: relative;
    width: 5em;
    height: 1em;
    font-size: 25px;
`

const StarFront = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    overflow: hidden;
    color: #ffcc33;
`

const StarBack = styled.div`
    color: #ccc;
`

const SkillsTitle = ({ src, alt, title }) => (
    <SkillsTitleWrapper>
        <Arrow src={src} alt={alt} />
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
                    <SkillsTitle src={arrowImage} alt='arrow-image' title='Languages' />
                        <SkillsCard body='Python3' width='80%' />
                        <SkillsCard body='TypeScript' width='60%' />
                        <SkillsCard body='JavaScript' width='60%' />
                        <SkillsCard body='HTML / CSS' width='60%' />
                        <SkillsCard body='Ruby' width='20%' />
                    <SkillsTitle src={arrowImage} alt='arrow-image' title='Frameworks & Libraries' />
                        <SkillsCard body='React Native' width='80%' />
                        <SkillsCard body='React' width='60%' />
                        <SkillsCard body='Next.js' width='40%' />
                        <SkillsCard body='jQuery' width='40%' />
                        <SkillsCard body='Bootstrap' width='60%' />
                        <SkillsCard body='Ruby on Rails' width='20%' />
                        <SkillsCard body='Keras' width='80%' />
                        <SkillsCard body='TensorFlow' width='40%' />
                        <SkillsCard body='Scikit-learn' width='60%' />
                    <SkillsTitle src={arrowImage} alt='arrow-image' title='Others' />
                        <SkillsCard body='React Native' width='80%' />
                        <SkillsCard body='React' width='60%' />
                        <SkillsCard body='Next.js' width='40%' />
                        <SkillsCard body='jQuery' width='40%' />
                        <SkillsCard body='Bootstrap' width='60%' />
                        <SkillsCard body='Ruby on Rails' width='20%' />
                        <SkillsCard body='Keras' width='80%' />
                        <SkillsCard body='TensorFlow' width='40%' />
                        <SkillsCard body='Scikit-learn' width='60%' />
                </SkillsWrapper>
            </Wrapper>
        </Layout>
    )
 }
}

export default Skills