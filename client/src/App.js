import './App.css';
import RollDice from './component/RollDice';
import Navbar from './component/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div>
          <RollDice />
      </div>

    </div>
  );
}

export default App;
