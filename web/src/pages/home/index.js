import React from "react";
import styled from "styled-components";
import Header from "../../components/header";
//import Fade from "react-reveal/Fade";
import SideBar from "../../components/sideBar";
//import MenuButton from "../../components/sideBar/menuButton";

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  height: 100vh;
  margin: auto;
  justify-content: center;
  background-image: url('https://www.bricks4kidz.com.au/act-northside/wp-content/uploads/sites/16/2018/02/Madame-curie-Copertina-blogr.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-blend-mode: luminosity;
`;

const Box = styled.div`
  display: flex;
  width: 100%;
  justify-items: center;
  margin-top: 3rem;
  border: 1px solid red;
  text-align: center;
  color: #FFF;
`;

const Title = styled.h1`
  font-size: 5rem;
  text-transform: uppercase;
  text-align: center;
`;

const Menu = styled.div`
  display: flex;
  color: #FFF;
  position: fixed;
  top: 2rem;
  right: 2rem;
  text-align: center;
  padding-bottom: .5rem;

  :hover{
    cursor: pointer;
  }

  span{
    margin: auto .5rem;
    font-size: 1rem;

    :hover{
      border-bottom: 1px solid #FFF;
      transition: all .5s;
    }
  }
`;

function Home() {
  return (
    <>
      <Layout>
          <Menu>
            <SideBar>
            <span>Cadastre-se</span>
            </SideBar>
            <span>Entre</span>
          </Menu>
          <Box>
            <Title>ALguma coisa aqui depois</Title>
          </Box>
      </Layout>
    </>
  );
}

export default Home;
