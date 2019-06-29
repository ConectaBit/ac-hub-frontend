import React from "react";
import styled from "styled-components";
import { Add } from "styled-icons/material/Add";
import Header from "../../components/header";
import RepoList from "../../components/repoList";
import UserInfo from "../../components/userInfo";
import PostInfo from "../../components/postInfo";
import AddArticle from '../../components/addArticle'

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
  display: flex;
  flex-direction: column;
`;

const AddIcon = styled(Add)`
  width: 2rem;
  height: 2rem;
  color: #2e9fff;
  :hover {
    cursor: pointer;
  }
`;

const WriteButton = styled.button`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  border: 0;
  background-color: #fff;
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  transition: all .3s;

  :hover{
    cursor: pointer;
    width: 5rem;
    height: 5rem;
  }
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
        </CenterBox>

        <AddArticle>
        <WriteButton>
          <AddIcon />
        </WriteButton>
        </AddArticle>
  
      </Layout>
    </>
  );
}

export default Feed;
