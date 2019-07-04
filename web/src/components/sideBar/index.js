import React, { useState } from "react";
import MenuButton from "./menuButton";
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
  flex: 1;
  background-color: #fff;
  align-self: flex-end;
  background-image: url("https://www.muralswallpaper.com/app/uploads/scientific-chalkboard-childrens-plain.jpg");
  background-size: cover;
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

const CREATE_USER_MUTATION = gql`
  mutation createUser(
    $name: String!
    $email: String!
    $password: String!
    $class: String!
  ) {
    createUser(
      input: { name: $name, email: $email, password: $password, class: $class }
    ) {
      name
      email
    }
  }
`;

function SideBar(props) {
  const [show, setShow] = useState(false);
  const [userName, setUsername] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [inst, setInst] = useState(null);

  const [createUser, { data, error }] = useMutation(CREATE_USER_MUTATION, {
    variables: {
      name: userName,
      email: email,
      password: password,
      class: inst
    },
    onCompleted: () => (
      toggleMenu(),
      toast.success("Usuário criado com sucesso"),
      toast.info("Entre com seu email e senha para continuar")
    ),
    onError: () => toast.error("Algo errado não está certo")
  });

  toast.configure();

  function toggleMenu() {
    setShow(!show);
  }

  function handleMouseDown(e) {
    toggleMenu();
    console.log("clicked");
    e.stopPropagation();
  }

  return (
    <>
      <MenuButton handleMouseDown={handleMouseDown} label={props.children} />
      <Menu show={show} handleMouseDown={handleMouseDown}>
        <Box />
        <Form>
          <Input
            type="text"
            placeholder="Nome de usuário"
            onChange={e => setUsername(e.target.value)}
          />
          <Input
            type="email"
            placeholder="Email"
            onChange={e => setEmail(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Senha"
            onChange={e => setPassword(e.target.value)}
          />
          <Input
            type="text"
            placeholder="Instituição"
            onChange={e => setInst(e.target.value)}
          />
          <Flex>
            <BackButton onClick={() => toggleMenu()}>Voltar</BackButton>
            <RegisterButton onClick={() => createUser()}>Avançar</RegisterButton>
          </Flex>
        </Form>
      </Menu>
    </>
  );
}

export default SideBar;
