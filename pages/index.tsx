import React, { useState } from 'react';
import MyLayout from 'src/common/layout';
import styled from 'styled-components';
import { Profile } from 'src/features/top/components/templates/Profile';
import { History } from 'src/features/top/components/templates/History';
import { Links } from 'src/features/top/components/templates/Links';

const Wrapper = styled.div`
  margin-top: 120px;
  margin-bottom: 120px;
  width: 920px;
`;

const TopContainer = () => {
  const [showMyInfo, setShowMyInfo] = useState(true);

  const toggleShowMyInfo = (showMyInfo: boolean) => {
    setShowMyInfo(!showMyInfo);
  };

  return (
    <MyLayout pathname={'/'}>
      <Wrapper>
        <Profile showMyInfo={showMyInfo} onClickArrow={toggleShowMyInfo} />
        <History />
        <Links />
      </Wrapper>
    </MyLayout>
  );
};

export default TopContainer;
