<<<<<<< HEAD:pages/index.js
import MyLayout from '../components/MyLayout'
import styled from 'styled-components'
import { Profile } from '../components/Profile'
import { History } from '../components/History'
import { Links } from '../components/Links'

const Wrapper = styled.div`
  margin-bottom: 100px;
`
=======
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
>>>>>>> origin/feature/014-renewal:pages/index.tsx

export default () => (
  <MyLayout>
    <Wrapper>
      <Profile />
      <History />
      <Links />
    </Wrapper>
<<<<<<< HEAD:pages/index.js
  </MyLayout>
)
=======
  </Layout>
);
>>>>>>> origin/feature/014-renewal:pages/index.tsx
