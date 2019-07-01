import React from "react";
import styled from "styled-components";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";

const Wrapper = styled.div`
  padding: 1rem;
  background-color: #fff;
  border-radius: 5px;
  position: fixed;
  top: 4rem;
  right: 1rem;
  width: 29rem;
`;

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  margin: .5rem;
  padding: .5rem;
  border-bottom: 1px solid #ccc;
`;

const FETCH_COMMENTS = gql`
  query commentsByPost($postId: ID!) {
    commentsByPost(postId: $postId) {
      id
      comment
      user {
        name
        id
        photo
      }
      createdAt
    }
  }
`;

function CommentList(props) {
  const { data, loading } = useQuery(FETCH_COMMENTS, {
    variables: { postId: props.postID }
  });
  console.log(data);
  return (
    <Wrapper>
      <h1>Comentários</h1>
      {loading ? (<span>Carregando comentários</span>) : (<div>{data.commentsByPost.map((comment) => (<Flex><span key={comment.id}>{comment.comment}</span></Flex>))}</div>)}
    </Wrapper>
  );
}

export default CommentList;
