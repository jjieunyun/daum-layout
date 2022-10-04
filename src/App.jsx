import "./App.scss";
import NavBar from './Components/NavBar';
import Layout from "./Pages/layout";
import BottomContents from "./Components/BottomContents";
import React from "react";

function App() {
  return <div className="App">
    <div style={{width: '990px', margin: 'auto'}}>
      <NavBar/>
      <Layout/>
    </div>
    <hr style={{ marginBottom : '40px'}}/>
    <BottomContents/>
    <hr style={{ marginBottom : '40px'}}/>
    <div style={{width : '990px', margin :'auto', height : '220px'}}>
      Footer
    </div>
  </div>;
}

export default App;
