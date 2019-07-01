import React, { useState } from "react";
import styled from "styled-components";
import { useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";

const COMMENT_MUTATION = gql`
  mutation createComment($comment: String!, $post: Int!) {
    createComment(input: { comment: $comment, post: $post }) {
      comment
    }
  }
`;

const Wrapper = styled.div`
  position: fixed;
  top: 25rem;
  right: 1rem;
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  padding: 1rem;
  border: 1px solid #ccc;
  outline: 0;
  border-radius: 5px;
  width: 29rem;
  height: 4rem;
`;

const Button = styled.button`
  padding: 1rem;
  border: 0;
  color: #fff;
  background-color: rgb(125, 76, 219);
  border-radius: 5px;
  margin-top: 1rem;

  :hover {
    opacity: 0.9;
    cursor: pointer;
  }
`;

function AddComment(props) {
  const [comment, setComment] = useState(null);
  console.log(props.postID)
  const [createComment, { data, loading, error }] = useMutation(COMMENT_MUTATION, {
    variables: {
      comment: comment,
      post: props.postID
    }
  });
  return (
    <Wrapper>
      <Input
        type="text"
        placeholder="Escreva um comentário"
        rows={5}
        onChange={e => setComment(e.target.value)}
      />
      <Button onClick={() => createComment()}>{loading ? 'Enviando...' : 'Enviar'}</Button>
    </Wrapper>
  );
}

export default AddComment;
