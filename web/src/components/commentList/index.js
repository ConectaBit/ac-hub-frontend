import React from "react";
import styled from "styled-components";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";

const Wrapper = styled.div`
  padding: 1rem;
  background-color: #fff;
  border-radius: 5px;
  flex:1;
  overflow: -moz-hidden-unscrollable;
`;

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0.5rem;
  padding: 0.5rem;
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
      {loading ? (
        <span>Carregando comentários</span>
      ) : (
        <div>
          {data.commentsByPost.map(comment => (
            <Flex key={comment.id}>
              <span>{comment.user.name}</span>
              <span>{comment.comment}</span>
            </Flex>
          ))}
        </div>
      )}
    </Wrapper>
  );
}

export default CommentList;
