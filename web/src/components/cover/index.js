import React from "react";
import styled from "styled-components";

const Content = styled.div`
  width: 100%;
  height: 15rem;
  flex-direction: row;
  background-color: #e8809d;
  display: flex;
  padding: 8rem;
  box-sizing: border-box;
  align-items: center;
  justify-items: normal;
  justify-content: center;
`;

const Photo = styled.div`
  height: 12rem;
  width: 12rem;
  background-color: white;
  border-radius: 50%;
  background-image: url(${props => (props.photoUrl)});
  background-size: contain;
  background-repeat: no-repeat;
`;

const Title = styled.h1`
  color: #fff;
  margin-left: 1rem;
  font-size: 2.5rem;
`;

function Cover(props) {
  return (
    <Content>
      <Photo photoUrl={props.photoUrl}/>
      <Title>@{props.text}</Title>
    </Content>
  );
}

export default Cover;
