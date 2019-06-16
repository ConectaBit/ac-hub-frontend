import React, {useState} from "react";
import SideBar from './components/sideBar/index'
import Markdown from './components/markdown'

import GlobalStyle from './styles/global'
function App() {
  return (<>
  <GlobalStyle />
    <Markdown />
    </>
  );
}

export default App;
