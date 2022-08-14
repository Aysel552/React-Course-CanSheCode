
import image from './shopping.jpg';
import imageTwo from './man.jpg';
import './App.css';
import { GroceryList } from './GroceryList';

function App() {
  return (
    <div className="App">
      <img src={image} alt="Shopping" width="250px" />
      <h1>Grocery List</h1>
      <GroceryList/>
      <img src={imageTwo} alt="Man" width="250px"/>
    </div>
  );
}

export default App;
