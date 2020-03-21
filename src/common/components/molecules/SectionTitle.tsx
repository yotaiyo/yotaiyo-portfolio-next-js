import React from 'react';
import styled from 'styled-components';
import { Layout } from 'consts/Layout';
import { Color } from 'consts/Color';

const SectionTitleWrapper = styled.div`
  display: flex;
  margin-bottom: 24px;
`;

const SectionTitleText = styled.span`
  font-size: ${Layout.Text.Largest}px;
  font-weight: bold;
  color: ${Color.Black1};
`;

const SectionTitleLine = styled.div`
  background-color: ${Color.Black3};
  height: 2px;
  flex: 1;
  margin-top: ${Layout.Text.Largest / 2 + 4}px;
  margin-left: 10px;
`;

type SectionTitleType = {
  title: string;
};

export const SectionTitle = ({ title }: SectionTitleType) => {
  return (
    <SectionTitleWrapper>
      <SectionTitleText>{title}</SectionTitleText>
      <SectionTitleLine />
    </SectionTitleWrapper>
  );
};
