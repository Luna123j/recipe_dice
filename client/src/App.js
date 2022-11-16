import './App.css';
import RollDice from './component/RollDice';
import Navbar from './component/Navbar';
import { BrowserRouter, Switch, Route, Link, Routes, useNavigate } from "react-router-dom";
import EditDice from './component/EditDice';
import React, { createContext, useContext, useState } from 'react';
import Recipes from './component/Recipes';
import SearchRecipes from './component/SearchRecipes';
import RecipeDetail from './component/RecipeDetail';
import {dishesName} from './helpers/dishesName.js'

function App() {

  const [lan, setLan] = useState('English')
  const [diceContent, setDiceContent] = useState(dishesName)
  const [apiResult, setApiResult] = useState([])
  const [detail, setDetail] = useState({})

  console.log(detail)
  return (
    <div className="App">
      <Navbar setApiResult={setApiResult} lan = {lan} setLan={setLan}/>
      <Routes>
        <Route path="/" element={<RollDice diceContent={diceContent} lan={lan} setApiResult={setApiResult} />} />
        <Route path="/editDice" element={<EditDice editContent={setDiceContent} />} />
        <Route path="/myRecipe" element={<Recipes />} />
        <Route path="/searchRecipe" element={<SearchRecipes apiResult={apiResult} setDetail={setDetail}/>} />
        <Route path="/recipeDetails" element={<RecipeDetail detail= {detail}/>} />
      </Routes>
    </div>
  );
}

export default App;
