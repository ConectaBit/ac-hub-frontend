import React from "react";
import Header from "./components/header";

function App() {
  return (
    <>
      <Header
        firstItem={{ label: "Explore" }}
        secondItem={{ label: "Outras Bases" }}
        thirdItem={{ label: "Login" }}
        button={{ label: "Cadastre-se" }}
      />
    </>
  );
}

export default App;
