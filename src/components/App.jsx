import React from "react";
import MainPage from "./MainPage.jsx";
import Table from "./Table.jsx";
import { Routes, Route } from "react-router-dom";

function App() {
 
  return (
    <div className="page">
      <Routes>
            <Route path="/" element={ <MainPage/> }/>
            <Route path="/table" element={ <Table/> }/>
      </Routes>
    </div>
 );
}

export default App;
