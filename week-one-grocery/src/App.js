
import image from './grocery.jpeg';
import './App.css';
import ListOfProducts from './ListOfProducts';
import ShoppingImage from './ShoppingImage';
import { Posts } from './Posts';

function App() {

  //1st Option
  function showAlert() {
    alert("Clicked")
  }

  // 2nd option:
  // const showAlert = () => {
  //   alert("Clicked");
  // }

  return (
    <div>
     
      <img src={image} className="App-logo" alt='Grocery' width="300px" />
      <ListOfProducts />
      <ShoppingImage />
      <button onClick={showAlert}>Submit</button>

      <Posts />
      
        
    </div>
  );
}

export default App;
