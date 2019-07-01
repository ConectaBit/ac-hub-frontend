import React, { useState } from "react";
import AddButton from "./addButton";
import styled from "styled-components";
import { useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Menu = styled.div`
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  position: fixed;
  right: 0;
  top: 0;
  transform: ${props =>
    props.show === true
      ? "translate3d(0vw, 0, 0)"
      : "translate3d(35vw, 0, 0)"};
  width: 35vw;
  height: 100%;
  transition: transform 0.5s cubic-bezier(0, 0.52, 0, 1);
  background-color: #1a4040;
  background-position: center;
  background-blend-mode: overlay;
  z-index: 1;

  :hover {
    cursor: auto;
  }
`;

const BackButton = styled.button`
  font-size: 1rem;
  border-radius: 0.3rem;
  box-sizing: border-box;
  padding: 1rem;
  border: 2px solid rgb(125, 76, 219);
  color: rgb(125, 76, 219);
  width: 20rem;
  margin: 0 auto;
  transition: all 0.5s;
  background-color: transparent;

  :hover {
    cursor: pointer;
    background-color: rgb(125, 76, 219);
    color: #fff;
  }
`;

const RegisterButton = styled.button`
  font-size: 1rem;
  border-radius: 0.3rem;
  box-sizing: border-box;
  padding: 1rem;
  border: none;
  background-color: #72f0b8;
  color: #ffffff;
  width: 20rem;
  margin: 0 auto;
  transition: all 0.5s;

  :hover {
    opacity: 0.7;
    cursor: pointer;
  }
`;

const Flex = styled.div`
  display: flex;
  flex-direction: ${props => props.direction};
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 3;
  background-color: #fff;
`;

const Textarea = styled.textarea`
  width: 80%;
  font-size: 1.5rem;
  padding: 1rem;
  border: 0;
  outline: 0;
  border-bottom: 1px solid #72f0b8;
  margin: 1rem auto;
  transition: all 0.5s;

  :focus {
    border-bottom: 1px solid red;
  }
`;

const Select = styled.select`
  width: 80%;
  margin: 1rem auto;
  font-size: 1.5rem;
  padding: 1rem;
  border: 0;
  outline: 0;
  background-color: transparent;
  border-bottom: 1px solid #72f0b8;

  :focus {
    border-bottom: 1px solid red;
  }

  option {
    background-color: transparent;
  }
`;

const CREATE_ELEMENT_MUTATION = gql`
  mutation createElement(
    $name: String!
    $description: String!
    $post: Int!
  ) {
    createElement(
      input: {
        name: $name
        description: $description
        post: $post
      }
    ) {
      name
      description
    }
  }
`;

function AddElement(props) {
  const [show, setShow] = useState(false);
  const [name, setName] = useState(null);
  const [description, setDescription] = useState(null);

  const [createElement, { data, error }] = useMutation(
    CREATE_ELEMENT_MUTATION,
    {
      variables: {
        name: name,
        description: description,
        post: props.postID
      }
    }
  );

  toast.configure();

  function add(){
    createElement();
    if(data) {
      toast.success("Trabalho criado com sucesso!")
      setShow(!show);
      toast.warn("Agora você pode adicionar elementos ao seu trabalho")
    }

    if(error) {
      toast.error('Algo errado não está certo ')
    }
  }

  function toggleMenu() {
    setShow(!show);
  }

  function handleMouseDown(e) {
    toggleMenu();
    e.stopPropagation();
  }

  return (
    <>
      <AddButton handleMouseDown={handleMouseDown} label={props.children} />
      <Menu show={show} handleMouseDown={handleMouseDown}>
        <Form>
          <Select
            onChange={e => setName(e.target.value)}
            defaultValue={description}
          >
            <option value="Introdução">Introdução</option>
            <option value="Metodologia">Metodologia</option>
            <option value="Justificativa">Justificativa</option>
            <option value="Física">Publicação</option>
          </Select>
          <Textarea type="text" placeholder="Conteúdo" onChange={e => setDescription(e.target.value)} rows={10} />
          <Flex direction='column'>
            <BackButton onClick={() => toggleMenu()}>Voltar</BackButton>
            <RegisterButton onClick={() => add()}>Adicionar</RegisterButton>
          </Flex>
        </Form>
      </Menu>
    </>
  );
}

export default AddElement;
