import React from 'react';
import MyLayout from '../components/MyLayout';
import styled from 'styled-components';
import { Layout } from '../consts/Layout';
import ReactLoading from 'react-loading';
import { connect } from 'react-redux';
import { getRepos } from '../store/makeStore';

const LoadingWrapper = styled.div`
  padding-top: 120px;
  display: flex;
  justify-content: center;
`;

const Wrapper = styled.div`
  padding-top: 120px;
`;

const Title = styled.h1`
  font-size: ${Layout.Text.Largest}px;
  color: #3e4448;
  margin: 0 auto;
  border-bottom: 2px solid #3e4448;
  width: 125px;
  margin-bottom: 40px;
`;

class Works extends React.Component<any> {
  static getInitialProps(props) {
    props.store.dispatch(getRepos());
  }
  render() {
    const { repos, hasError } = this.props;
    return (
      <MyLayout>
        {hasError ? (
          <LoadingWrapper>
            <ReactLoading
              type={'spinningBubbles'}
              color={'#00c4cc'}
              height={'10%'}
              width={'10%'}
            />
          </LoadingWrapper>
        ) : (
            <Wrapper>
              <Title>Works</Title>
              {repos.map((repo, index) => {
                return <div key={index}>{repo.title}</div>;
              })}
            </Wrapper>
          )}
      </MyLayout>
    );
  }
}

export default connect(state => state)(Works);
