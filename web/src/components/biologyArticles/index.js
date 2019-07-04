import React from "react";
import styled from "styled-components";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import { ExternalLink } from "styled-icons/feather/ExternalLink";
import {RingSpinner} from 'react-spinners-kit';

const ArticlesList = styled.div`
  padding: 2rem;
`;
const Post = styled.div`
  background-color: #fff;
  padding: 2rem;
  margin-bottom: 2rem;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  border-radius: 5px;

  span {
    font-size: 0.8rem;
  }
`;
const Title = styled.h1`
  font-size: 1.3rem;
`;

const Flex = styled.div`
  display: flex;
  flex-direction: column;
`;

const Actions = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

const LinkIcon = styled(ExternalLink)`
  width: 2rem;
  height: 2rem;
  color: #2e9fff;
  position: relative;
`;

const Loader = styled.div`
  margin: 2rem auto;
  width: 100%;
  display: flex;
  align-items: center;
  justify-items: center;
  justify-content: center;
`;

function BiologyArticles(props) {
  const FETCH_BIA_BIOLOGY = gql`
    query bia($start: Int!) {
      biology(start: $start) {
        data
        titulo
        link
        autores
      }
    }
  `;
  const { loading, data } = useQuery(FETCH_BIA_BIOLOGY, {
    variables: { start: props.start }
  });
  return (
    <ArticlesList>
      {loading ? (
        <Loader><RingSpinner size={8} sizeUnit='rem' color='#7d4cdb' /></Loader>
      ) : (
        <>
          {data.biology.map(article => (
            <Post key={article.titulo}>
              <Title>{article.titulo}</Title>
              <Flex>
                <span>Autores: {article.autores}</span>
                <span>Data: {article.data}</span>
              </Flex>
              <Actions>
                <a href={`http://bia.ifpi.edu.br:8080/${article.link}`}>
              <LinkIcon />
              </a>
              </Actions>
            </Post>
          ))}
        </>
      )}
      {console.log(data)}
    </ArticlesList>
  );
}

export default BiologyArticles;
