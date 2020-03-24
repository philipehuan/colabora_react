import React from 'react';

import './App.css';

import Navbar_brand from "../components/navbar_brand";
import MenuBar from "../components/menuBar";
import Cards_info from "../components/cards_info";



function App() {
  return (
      <div>
      <header>
   <Navbar_brand />
      </header>
          <MenuBar></MenuBar>
          <div className="container-fluid" style={{marginTop : "10px"}}>
              <Cards_info></Cards_info>
          </div>
      </div>
  );
}

export default App;
