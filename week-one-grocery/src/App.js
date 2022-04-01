
import image from './grocery.jpeg';
import './App.css';
import ListOfProducts from './ListOfProducts';

function App() {
  return (
    <div>
     
      <img src={image} className="App-logo" alt='Grocery' width="300px" />
      <ListOfProducts />
        
    </div>
  );
}

export default App;
