import React, { useState } from "react";
import AddButton from "./addButton";
import styled from "styled-components";
import { useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";
import { toast } from "react-toastify";
import { Redirect } from "react-router-dom";
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
      : "translate3d(100vw, 0, 0)"};
  width: 100vw;
  height: 100%;
  transition: transform 0.5s cubic-bezier(0, 0.52, 0, 1);
  background-color: #1a4040;
  background-position: center;
  background-blend-mode: overlay;

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

const Box = styled.div`
  height: 100%;
  flex: 2;
  background-color: #fff;
  align-self: flex-end;
  background-image: url("https://mymodernmet.com/wp/wp-content/uploads/2018/08/leonardo-da-vinci-vitruvian-man-1.jpg");
  background-size: cover;
  background-blend-mode: luminosity;
  background-position: center;
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

const Input = styled.input`
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

const ErrorMessage = styled.span`
  color: tomato;
  text-align: center;
`;

const CREATE_ARTICLE_MUTATION = gql`
  mutation createPost(
    $title: String!
    $description: String!
    $content: String!
  ) {
    createPost(
      input: { title: $title, content: $description, description: $content }
    ) {
      title
      content
      description
      id
    }
  }
`;

function AddArticle(props) {
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState(null);
  const [description, setDescription] = useState(null);
  const [content, setContent] = useState("Matemática");

  const [createArticle, { data, error }] = useMutation(
    CREATE_ARTICLE_MUTATION,
    {
      variables: {
        title: title,
        description: description,
        content: content
      }
    }
  );

  toast.configure();

  function toggleMenu() {
    setShow(!show);
  }

  function handleMouseDown(e) {
    toggleMenu();
    e.stopPropagation();
  }

  function success() {
    toast.success('Trabalho criado com sucesso');
    toast.info('Agora você pode adicionar elementos ao seu trabalho')
    return <Redirect to={`/article/id:${data.createPost.id}`} />;
  }

  return (
    <>
      <AddButton handleMouseDown={handleMouseDown} label={props.children} />
      <Menu show={show} handleMouseDown={handleMouseDown}>
        <Box />
        <Form>
          <Input
            type="text"
            placeholder="Adicione um título ao seu trabalho"
            onChange={e => setTitle(e.target.value)}
          />
          <Input
            type="textarea"
            placeholder="Agora uma pequena descrição"
            onChange={e => setDescription(e.target.value)}
          />
          <Select
            onChange={e => setContent(e.target.value)}
            defaultValue={content}
          >
            <option value="Matemática">Matemática</option>
            <option value="Biologia">Biologia</option>
            <option value="Química">Química</option>
            <option value="Física">Física</option>
            <option value="Computação">Computação</option>
          </Select>
          {error ? <ErrorMessage>Algo errado não está certo</ErrorMessage> : null}
          <Flex>
            <BackButton onClick={() => toggleMenu()}>Voltar</BackButton>
            <RegisterButton onClick={() => createArticle()}>
              Avançar
            </RegisterButton>
          </Flex>
        </Form>
        {data ? success() : null}
      </Menu>
    </>
  );
}

export default AddArticle;
