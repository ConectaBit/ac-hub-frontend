import React from "react";
import styled from "styled-components";
import Header from "../../components/header";
import RepoList from "../../components/repoList";
import UserInfo from "../../components/userInfo";
import PostInfo from "../../components/postInfo";

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

const CenterBox = styled.div`
  width: 100%;
  margin-left: 15rem;
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
        <CenterBox>
          <PostInfo />
          <PostInfo />
          <PostInfo />
          <PostInfo />
          <PostInfo />
          <PostInfo />
        </CenterBox>
      </Layout>
    </>
  );
}

export default Feed;
