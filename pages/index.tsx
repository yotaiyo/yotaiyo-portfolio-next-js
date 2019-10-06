import React from 'react';
import Layout from '../components/MyLayout';
import styled from 'styled-components';
import MyImage from '../images/my-icon.jpg';

const Wrapper = styled.div`
  padding-top: 200px;
  padding-bottom: 200px;
  @media (max-width: 768px) {
    padding-top: 150px;
    padding-bottom: 150px;
  }
`;

const MyIcon = styled.img`
  height: 250px;
  width: 250px;
  border-radius: 250px;
  @media (max-width: 768px) {
    height: 150px;
    width: 150px;
    border-radius: 150px;
  }
`;

const MyIconWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const Title = styled.div`
  text-align: center;
  font-size: 70px;
  margin-top: 30px;
  color: white;
  @media (max-width: 768px) {
    font-size: 35px;
  }
`;

export default () => (
  <Layout>
    <Wrapper>
      <MyIconWrapper>
        <MyIcon src={MyImage} alt="my-icon" />
      </MyIconWrapper>
      <Title>Welcome to Yotaiyo's Portfolio</Title>
    </Wrapper>
  </Layout>
);
