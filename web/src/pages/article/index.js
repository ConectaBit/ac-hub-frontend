import React from "react";
import styled from "styled-components";
import Header from "../../components/header";
import { Timeline, TimelineItem } from "vertical-timeline-component-for-react";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";

const Layout = styled.div`
  width: 100vw;
`;

const FETCH_POST_DATA = gql`
  query Post($id: ID!) {
    post(id: $id) {
      id
      title
      content
      description
      createdAt
      author {
        id
      }
      comments {
        comment
        id
        createdAt
        user {
          id
        }
      }

      elements(first: 30) {
        id
        description
        name
        author {
          id
        }
        createdAt
      }
    }
  }
`;

function Article(props) {
  const getPostId = () => {
    return parseInt(props.articleID.slice(3));
  };

  const { data, loading } = useQuery(FETCH_POST_DATA, {
    variables: { id: getPostId() }
  });

  console.log(getPostId());
  console.log(data);

  return (
    <>
      <Header />
      <Layout>
        {loading ? (
          <>Loading...</>
        ) : (
          <Timeline key={data.post.id}>
            <TimelineItem dateText={data.post.createdAt}>
              <h1>{data.post.title}</h1>
              <h2>{data.post.content}</h2>
              <p>{data.post.description}</p>
            </TimelineItem>
          </Timeline>
        )}
      </Layout>
    </>
  );
}

export default Article;
