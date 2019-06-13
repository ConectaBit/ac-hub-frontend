import React from "react";
import styled from "styled-components";
import { RingSpinner } from "react-spinners-kit";
const Content = styled.div`
  display: flex;
  justify-content: center;
  background-color: black;
  border-radius: 0.8rem;
  height: 40rem;
  width: 30rem;
  background-image: url(${props => props.urlImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  transition: 1s;
  padding: 1rem;
  margin: 0.3rem;
  background-blend-mode: luminosity;
  align-items: center;

  :hover {
    background-blend-mode: normal;
    background-position-y: top;
    background-size: 50rem;
    cursor: pointer;
  }

  h2 {
    font-family: "Varela Round", sans-serif;
    font-size: 3rem;
    color: white;
    margin-top: 125%;
  }

  span {
    font-size: 1.5rem;
    color: white;
    text-align: center;
  }
`;

function Card(props) {
  return (
    <Content urlImage={props.urlImage}>
      {props.isLoading === true ? (
        <RingSpinner color="#C876E8" size={10} sizeUnit="rem" />
      ) : (
        <h2>{props.title}</h2>
      )}
    </Content>
  );
}

export default Card;
