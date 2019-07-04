import React, { useState } from "react";
import styled from "styled-components";
import Header from "../../components/header";
import Card from "../../components/card";
import ChemistryArticles from "../../components/chemistryArticles";
import MathematicsArticles from "../../components/mathematicsArticles";
import PhisicsArticles from "../../components/phisicsArticles";
import BiologyArticles from "../../components/biologyArticles";

const CardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin: auto;
  width: 80%;
  overflow: scroll;

  ::-webkit-scrollbar{
    display: none;
  }
`;

const Button = styled.button`
  color: transparent;
  background: transparent;
  border: 0;
  outline: 0;
`;

const Layout = styled.div`
  max-width: 100%;
  box-sizing: border-box;
`;

function Explore() {
  const [area, setArea] = useState("chemistry");
  console.log(area);

  function reducer(state) {
    switch (state) {
      case "chemistry":
        return <ChemistryArticles start={1} />;
      case "mathematics":
        return <MathematicsArticles start={1} />;
      case "phisics":
        return <PhisicsArticles start={1} />;
      case "biology":
        return <BiologyArticles start={1} />;
    }
  }

  return (
    <>
      <Header />
      <CardWrapper>
        <Button onClick={() => setArea("mathematics")}>
          <Card
            urlImage="https://i2.wp.com/www.acervofilosofico.com/wp-content/uploads/2017/08/PIT%C3%81GORAS-DE-SAMOS.jpg?resize=368%2C485"
            title="Matemática"
          />
        </Button>
        <Button onClick={() => setArea("chemistry")}>
          <Card
            urlImage="http://2.bp.blogspot.com/-BVf6JBF0114/UtygKbrngsI/AAAAAAAAAdQ/gfFGX6konKs/s1600/marie+curie+2.jpg"
            title="Química"
          />
        </Button>
        <Button onClick={() => setArea("phisics")}>
          <Card
            urlImage="https://abrilsuperinteressante.files.wordpress.com/2016/12/isaac-newton.jpg?quality=70&strip=info&w=396"
            title="Física"
          />
        </Button>
        <Button onClick={() => setArea("biology")}>
          <Card
            urlImage="https://upload.wikimedia.org/wikipedia/commons/3/3e/Charles_Robert_Darwin_by_John_Collier.jpg"
            title="Biologia"
          />
        </Button>
      </CardWrapper>
      <Layout>
      {reducer(area)}
      </Layout>
    </>
  );
}

export default Explore;
