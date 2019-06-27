import React from "react";
import styled from "styled-components";
import Header from "../../components/header";
import RepoList from '../../components/repoList';

const Layout = styled.div`
  display: flex;
  box-sizing: border-box;
  padding-top: 1rem;
  width: 80%;
  margin: auto;
`;

function Feed() {
  return (
    <>
      <Header />
      <Layout>
        <RepoList />
      </Layout>
    </>
  );
}

export default Feed;
