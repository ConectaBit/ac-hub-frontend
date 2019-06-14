import React, {useState} from "react";
import SideBar from './components/sideBar'

function App() {

  const [show, setShow] = useState(false);
  return (<>
    <button onClick={() => setShow(!show)}>Show/Hide</button>
    <SideBar show={show} />
    </>
  );
}

export default App;
