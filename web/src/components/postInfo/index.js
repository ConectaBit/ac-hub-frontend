import React from "react";
import styled from "styled-components";
import { ExternalLink } from "styled-icons/feather/ExternalLink";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";

const Wrapper = styled.div`
  width: 100%;
  height: 15rem;
  margin-bottom: 5rem;
  padding: 1rem;
  border-radius: 5px;
  background-color: #fff;
`;

const LinkIcon = styled(ExternalLink)`
  width: 2rem;
  height: 2rem;
  color: #2e9fff;
`;

const Actions = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const PostDatas = styled.div`
  display: flex;
  flex-direction: column;

  p {
    font-size: 1rem;
  }
`;

const Title = styled.span`
  font-size: 2rem;
`;

const Description = styled.div`
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 1rem;
  margin-top: 1rem;

  p {
    font-size: 0.8rem;
  }
`;

const Details = styled.div`
  display: flex;
  margin-top: 2rem;
  flex-direction: column;
  span {
    font-size: 0.8rem;
  }
`;

const FETCH_POST_DATAS = gql`
  query {
    posts(first: 20) {
      id
      title
      content
      description
      createdAt
      author {
        id
        name
      }
    }
  }
`;

function PostInfo() {
  const { loading, data } = useQuery(FETCH_POST_DATAS);
  console.log(data);
  return (
    <div>
      {loading ? (
        <div>Loading</div>
      ) : (
        <div>
          {data.posts.map(post => (
            <Wrapper key={post.id}>
              <Title>{post.title}</Title>
              <PostDatas>
                <p>{post.description}</p>
              </PostDatas>
              <Description><p>{post.content}</p></Description>
              <Details>
                <span>Autor: {post.author.name}</span>
                <span>{post.createdAt}</span>
              </Details>
              <Actions><LinkIcon /></Actions>
            </Wrapper>
          ))}
        </div>
      )}
    </div>
  );
}

export default PostInfo;
