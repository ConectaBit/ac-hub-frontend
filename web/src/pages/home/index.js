import React from "react";
import styled from "styled-components";
import Header from "../../components/header";
//import Fade from "react-reveal/Fade";
import SideBar from "../../components/sideBar";
//import MenuButton from "../../components/sideBar/menuButton";
import Card from "../../components/card";

const Layout = styled.div`
  display: flex;
  flex-direction: row;
`;

const Box = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 5rem;
  width: 100%;
  justify-items: center;
`;

const FlexItem = styled.div`
  flex: ${props => (props.flex ? props.flex : 1)};
`;

function Home() {
  return (
    <>
      <Layout>
        <Header
          firstItem={{ label: "Item" }}
          secondItem={{ label: "Explorar" }}
          thirdItem={{ label: "Login" }}
        >
          <SideBar>Cadastre-se</SideBar>
        </Header>
        <Box>
          <FlexItem flex={1}>
            <Card Isloading={true} />
          </FlexItem>
          <FlexItem flex={1}>
            <Card />
          </FlexItem>
        </Box>
      </Layout>
    </>
  );
}

export default Home;
