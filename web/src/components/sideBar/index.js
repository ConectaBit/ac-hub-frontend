import React, { useState } from "react";
import MenuButton from './menuButton'
import styled from "styled-components";
import { ArrowBackOutline } from "styled-icons/typicons/ArrowBackOutline";

const Menu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-sizing: border-box;
  position: fixed;
  right: 0;
  top: 0;
  transform: ${props =>
    props.show === true ? "translate3d(0vw, 0, 0)" : "translate3d(40vw, 0, 0)"};
  width: 40vw;
  height: 100vh;
  transition: transform 0.5s cubic-bezier(0, 0.52, 0, 1);
  background-color: #1a4040;
  background-image: url("https://cdn.eso.org/images/screen/eso1006a.jpg");
  background-position: center;
  background-blend-mode: luminosity;
`;

const Input = styled.input`
  position: static;
  font-size: 1.4rem;
  padding: 0.7rem;
  border: 2px solid transparent;
  border-radius: 0.3rem;
  margin: 0 auto 1rem;
  width: 30rem;

  :focus {
    border: 2px solid red;
  }
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
`;

const Logo = styled.svg`
  height: 15rem;
  width: 15rem;
  color: #59d9d9;
  align-self: center;
  margin-bottom: 2rem;
`;

const IconBack = styled(ArrowBackOutline)`
  color: #fff;
  margin: auto;
  border: 1px solid transparent;

  :hover {
    color: #b8c2ff;
    cursor: pointer;
    transition: all 0.5s;
  }
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
    <MenuButton handleMouseDown={handleMouseDown}/>
    <Menu show={show} handleMouseDown={handleMouseDown}>
      <Flex>
        <Logo viewBox="0 0 346 346" fill="none">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M173 346C268.545 346 346 268.545 346 173C346 134.147 333.192 98.2848 311.567 69.4063C314.555 65.282 316.316 60.2113 316.316 54.7292C316.316 40.8969 305.103 29.6836 291.271 29.6836C285.789 29.6836 280.718 31.445 276.594 34.4326C247.715 12.8082 211.853 0 173 0C77.4547 0 0 77.4547 0 173C0 268.545 77.4547 346 173 346ZM266.225 54.7292C266.225 49.4217 267.876 44.4997 270.693 40.4489C243.365 20.2741 209.575 8.34853 173 8.34853C82.0655 8.34853 8.34853 82.0655 8.34853 173C8.34853 263.935 82.0655 337.651 173 337.651C263.935 337.651 337.651 263.935 337.651 173C337.651 136.425 325.726 102.635 305.551 75.3075C301.5 78.1238 296.578 79.7748 291.271 79.7748C277.438 79.7748 266.225 68.5615 266.225 54.7292ZM173 291.271C238.319 291.271 291.271 238.319 291.271 173C291.271 107.681 238.319 54.7292 173 54.7292C107.681 54.7292 54.7292 107.681 54.7292 173C54.7292 188.273 57.6241 202.869 62.8951 216.271C57.944 219.9 54.7292 225.758 54.7292 232.367C54.7292 243.382 63.6583 252.311 74.6729 252.311C77.8273 252.311 80.8106 251.579 83.4621 250.275C105.15 275.382 137.219 291.271 173 291.271ZM88.1985 247.024C108.833 270.643 139.174 285.563 173 285.563C235.167 285.563 285.564 235.167 285.564 173C285.564 110.833 235.167 60.4366 173 60.4366C110.833 60.4366 60.4369 110.833 60.4369 173C60.4369 187.306 63.1057 200.989 67.9725 213.577C70.0666 212.83 72.3223 212.424 74.6729 212.424C85.6875 212.424 94.6166 221.353 94.6166 232.367C94.6166 238.162 92.145 243.38 88.1985 247.024ZM172.536 217.062C196.615 217.062 216.134 197.542 216.134 173.464C216.134 149.385 196.615 129.866 172.536 129.866C148.458 129.866 128.938 149.385 128.938 173.464C128.938 197.542 148.458 217.062 172.536 217.062Z"
            fill={props.isLogged === true ? "#FFFFFF" : "#FFFFFF"}
          />
        </Logo>
        <Input placeholder="Usuário" />
        <Input placeholder="Senha" type="password" />
        <Button onMouseDown={() => toggleMenu()}>Entrar</Button>
      </Flex>
    </Menu>
    </>
  );
}

export default SideBar;
