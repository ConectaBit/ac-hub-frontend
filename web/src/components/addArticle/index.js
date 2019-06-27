import React, { useState } from "react";
import AddButton from "./addButton";
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
  background-image: url("http://studioclio.com.br/sites/default/files/imagens/evento/platao_e_aristoteles.jpg");
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

  option{
    background-color: transparent;
  }
`;

function AddArticle(props) {
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
      <AddButton handleMouseDown={handleMouseDown} label={props.children} />
      <Menu show={show} handleMouseDown={handleMouseDown}>
        <Box />
        <Form>
          <Input type="text" placeholder="Adicione um título ao seu trabalho" />
          <Input type="textarea" placeholder="Agora uma pequena descrição" />
          <Select>
            <option value='Matemática'>Matemática</option>
            <option value='Biologia'>Biologia</option>
            <option value='Química'>Química</option>
            <option value='Física'>Física</option>
          </Select>
          <Flex>
            <BackButton onClick={() => toggleMenu()}>Voltar</BackButton>
            <RegisterButton>Avançar</RegisterButton>
          </Flex>
        </Form>
      </Menu>
    </>
  );
}

export default AddArticle;
