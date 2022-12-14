import './App.scss';
import RollDice from './component/RollDice';
import Navbar from './component/Navbar';
import { BrowserRouter, Switch, Route, Link, Routes, useNavigate } from "react-router-dom";
import EditDice from './component/EditDice';
import React, { createContext, useContext, useState } from 'react';
import Recipes from './component/Recipes';
import SearchRecipes from './component/SearchRecipes';
import RecipeDetail from './component/RecipeDetail';
import {dishesName} from './helpers/initialArr'

function App() {

  const [lan, setLan] = useState('English')
  const [diceContent, setDiceContent] = useState(dishesName)
  const [apiResult, setApiResult] = useState([])
  const [detail, setDetail] = useState({})

  return (
    <div className="App">
      <h1 ><Link to="/" className='logo'>Dishes Generator</Link></h1>
      <Navbar setApiResult={setApiResult} lan = {lan} setLan={setLan}/>
      <Routes>
        <Route path="/" element={<RollDice diceContent={diceContent} lan={lan} setApiResult={setApiResult} setDiceContent = {setDiceContent} />} />
        <Route path="/editDice" element={<EditDice editContent={setDiceContent} diceContent = {diceContent} />} />
        <Route path="/myRecipe" element={<Recipes />} />
        <Route path="/searchRecipe" element={<SearchRecipes apiResult={apiResult} setDetail={setDetail}/>} />
        <Route path="/recipeDetails" element={<RecipeDetail detail= {detail}/>} />
      </Routes>
    </div>
  );
}

export default App;
