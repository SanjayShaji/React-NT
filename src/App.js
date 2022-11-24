// import React, { useState } from 'react';
import Banner from './components/Banner/Banner';
import NavBar from "./components/NavBar/NavBar";
import RowPost from './components/RowPost/RowPost';
import { action, originals, comedy, horror, romance, documentary } from './urls';
// import axios from 'axios'


function App() {
  // const [state, setState] = useState([]);
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <RowPost url={originals} title="NetFlix originals"/>
      <RowPost url={action} title="Action" isSmall/>
      <RowPost url={comedy} title='Comedy' isSmall/>
      <RowPost url={horror} title='Horror' isSmall/>
      <RowPost url={romance} title='Romance' isSmall/>
      <RowPost url={documentary} title='Documentary' isSmall/>


</div>
  );
}

export default App;
