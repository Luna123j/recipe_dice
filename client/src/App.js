import './App.css';
import RollDice from './component/RollDice';
import Navbar from './component/Navbar';
import { BrowserRouter , Switch, Route, Link, Routes, useNavigate } from "react-router-dom";
import EditDice from './component/EditDice';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<RollDice />} />
        <Route path="/editDice" element={<EditDice />} />
      </Routes>
    </div>
  );
}

export default App;
