import './App.css';
import RollDice from './component/RollDice';
import Navbar from './component/Navbar';
import { BrowserRouter, Switch, Route, Link, Routes, useNavigate } from "react-router-dom";
import EditDice from './component/EditDice';
import React, { createContext, useContext, useState } from 'react';

function App() {

  const [diceContent, setDiceContent] = useState(['item1', 'item2', 'item3', 'item4', 'item5', 'item6', 'item7', 'item8', 'item9', 'item10', 'item11', 'item12', 'item13'])

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<RollDice diceContent={diceContent} />} />
          <Route path="/editDice" element={<EditDice editContent = {setDiceContent} />} />
      </Routes>
    </div>
  );
}

export default App;
