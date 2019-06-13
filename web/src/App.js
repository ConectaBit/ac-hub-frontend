import React from "react";
import Header from "./components/header";

function App() {
  return (
    <>
      <div>
        <Header
          firstItem={{ label: "Explore" }}
          secondItem={{ label: "Outras Bases" }}
          thirdItem={{ label: "Login" }}
          button={{ label: "Cadastre-se" }}
        />
      </div>
    </>
  );
}

export default App;
