import React, { useState } from "react";
import styled from "styled-components";
import {useQuery} from '@apollo/react-hooks';
import gql from 'graphql-tag';
import { DominoSpinner } from "react-spinners-kit";

const Box = styled.div`
  @import url("https://fonts.googleapis.com/css?family=Varela+Round&display=swap");
  padding: 1rem;
  border-radius: 5px;
  box-sizing: border-box;
  text-align: center;
  display: flex;
  background-color: #FFF;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  top: 17.5rem;
  position: fixed;
  margin: auto;
  width: 12rem;

  li {
    font-family: "Varela Round", sans-serif;
    letter-spacing: 2px;
    display: block;
    margin: 0.5rem auto;
    font-size: 1rem;
    color: #7c9999;

    :hover {
      color: #ff82de;
      cursor: pointer;
    }
  }
`;

const FETCH_REPOS = gql`
  query{
  currentUser{
    id
    posts{
    	title
      id
    }
  }
}
`;

function RepoList() {
  const {data, loading} = useQuery(FETCH_REPOS); 

  console.log(data)
  return(
    <Box>
    {loading ? (
      <DominoSpinner color="#59D9D9" size={10} sizeUnit="rem" />
      ) : (<ul>
        {data.currentUser.posts.map((post) => (<li key={post.id}>{post.title}</li>))}
      </ul>)
    }</Box>
  );
}

export default RepoList;
