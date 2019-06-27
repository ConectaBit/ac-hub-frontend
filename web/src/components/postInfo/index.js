import React from "react";
import styled from "styled-components";
import { ExternalLink } from "styled-icons/feather/ExternalLink";

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

    p{
        font-size: .8rem;
    }
`;

const Details = styled.div`
    display: flex;
    margin-top: 2rem;
    flex-direction: column;
    span{
        font-size: .8rem;
    }
`;

function PostInfo() {
  return (
    <Wrapper>
      <PostDatas>
        <Title>Título</Title>
        <p>Lorem ipsum lorem ipsum lorem lorem ipsum loremlorem ipsum lorem</p>
        <Description><p>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum</p></Description>
      </PostDatas>

      <Details>
          <span>Autor: @yoda</span>
          <span>Data de criação: 14/13¹/12</span>
      </Details>

      <Actions>
        <LinkIcon />
      </Actions>
    </Wrapper>
  );
}

export default PostInfo;
