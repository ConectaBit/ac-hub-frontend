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
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  padding: 1rem;
  border: 1px solid #ccc;
  outline: 0;
  border-radius: 5px;
  flex: 1;
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
  console.log(props.postID);
  const [createComment, { loading }] = useMutation(COMMENT_MUTATION, {
    variables: {
      comment: comment,
      post: props.postID
    },
    refetchQueries: ["commentsByPost"],
    onCompleted: () => setComment("")
  });
  return (
    <Wrapper>
      <Input
        type="text"
        placeholder="Escreva um comentário"
        rows={5}
        value={comment}
        onChange={e => setComment(e.target.value)}
      />
      <Button onClick={() => createComment()}>
        {loading ? "Enviando..." : "Enviar"}
      </Button>
    </Wrapper>
  );
}

export default AddComment;
