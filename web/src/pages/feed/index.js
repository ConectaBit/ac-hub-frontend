import React from "react";
import styled from "styled-components";
import Header from "../../components/header";
import RepoList from '../../components/repoList';
import UserInfo from '../../components/userInfo'

const Layout = styled.div`
  display: flex;
  box-sizing: border-box;
  padding-top: 1rem;
  width: 80%;
  margin: auto;
`;

const LeftBox = styled.div`
  display: flex;
  flex-direction: column;
`;

function Feed() {
  return (
    <>
      <Header />
      <Layout>
        <LeftBox>
        <UserInfo />
        <RepoList />
        </LeftBox>
      </Layout>
    </>
  );
}

export default Feed;
