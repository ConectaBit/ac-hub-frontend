import React, { useState } from "react";
import MenuButton from './menuButton'
import styled from "styled-components";

const Menu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-sizing: border-box;
  position: fixed;
  right: 0;
  top: 0;
  transform: ${props =>
    props.show === true ? "translate3d(0vw, 0, 0)" : "translate3d(100vw, 0, 0)"};
  width: 100vw;
  height: 100%;
  transition: transform 0.5s cubic-bezier(0, 0.52, 0, 1);
  background-color: #1a4040;
  background-image: url("http://i.imgur.com/C4jcUSL.jpg");
  background-position: center;
  background-blend-mode: overlay;
`;

const Button = styled.button`
  font-size: 1.4rem;
  border-radius: 0.3rem;
  box-sizing: border-box;
  padding: 1rem;
  border: none;
  background-color: #6175e8;
  color: #ffffff;
  width: 20rem;
  margin: 0 auto;
  transition: all 0.5s;

  :hover {
    opacity: 0.9;
    cursor: pointer;
  }
`;

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`;

function SideBar(props) {
  const [show, setShow] = useState(false);

  function toggleMenu() {
    setShow(!show);
  }

  function handleMouseDown(e) {
    toggleMenu();
    console.log('clicked');
    e.stopPropagation();
  }

  return (
    <>
    <MenuButton handleMouseDown={handleMouseDown} label={props.children}/>
    <Menu show={show} handleMouseDown={handleMouseDown}>
      <Flex>
        testes
        <Button onClick={() => toggleMenu()}>Voltar</Button>
      </Flex>
    </Menu>
    </>
  );
}

export default SideBar;
