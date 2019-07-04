import React from "react";
import styled from "styled-components";
import Header from "../../components/header";
import Card from "../../components/card";

const CardWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

function Explore() {
  return (
    <>
      <Header />
      <CardWrapper>
        <Card
          urlImage="https://i2.wp.com/www.acervofilosofico.com/wp-content/uploads/2017/08/PIT%C3%81GORAS-DE-SAMOS.jpg?resize=368%2C485"
          title="Matemática"
        />
        <Card
          urlImage="http://2.bp.blogspot.com/-BVf6JBF0114/UtygKbrngsI/AAAAAAAAAdQ/gfFGX6konKs/s1600/marie+curie+2.jpg"
          title="Química"
        />
        <Card
          urlImage="https://abrilsuperinteressante.files.wordpress.com/2016/12/isaac-newton.jpg?quality=70&strip=info&w=396"
          title="Física"
        />
        <Card urlImage='https://upload.wikimedia.org/wikipedia/commons/3/3e/Charles_Robert_Darwin_by_John_Collier.jpg'
            title='Biologia'/>
        <Card urlImage='http://2.bp.blogspot.com/-1yUQLl8smXY/T-U0G-YuTYI/AAAAAAAABEs/HsnEpK3bh0k/s1600/192747438103617.jpg'
        title='Computação'/>
      </CardWrapper>
    </>
  );
}

export default Explore;
