import React, { useState } from "react";
import MenuButton from "./menuButton";
import styled from "styled-components";

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
    color: #FFF;
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
  background-image: url("https://i.pinimg.com/originals/b0/2e/89/b02e8993d9a498bef8130255beed11e8.jpg");
  background-size: cover;
  background-position: center;
`;

const Flex = styled.div`
  display: flex;
  flex-direction: row;
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
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

  :focus{
    border-bottom: 1px solid red;
  }
`;

function SideBar(props) {
  const [show, setShow] = useState(false);

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
          <Input type="text" placeholder="Nome de usuário" />
          <Input type="email" placeholder="Email" />
          <Input type="password" placeholder="Senha" />
          <Input type="text" placeholder="Instituição" />
          <Flex>
          <BackButton onClick={() => toggleMenu()}>Voltar</BackButton>
          <RegisterButton>Pronto</RegisterButton>
          </Flex>
        </Form>
      </Menu>
    </>
  );
}

export default SideBar;
