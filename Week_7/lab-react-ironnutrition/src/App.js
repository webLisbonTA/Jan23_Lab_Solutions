import logo from './logo.svg';
import './App.css';
import FoodList from './components/FoodList';
import foods from './foods.json';



function App() {
  return (
    <div className="App">
      <h1>IronNutrition</h1>
      <FoodList />
    </div>
  );
}

export default App;
