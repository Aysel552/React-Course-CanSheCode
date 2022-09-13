import { useState } from 'react';
import { data } from './data';
import './App.css';
import Clothes from './Clothes';

function App() {
  const [clothes, setClothes] = useState(data);
  return (
    <div >
  <Clothes itemsForSale= {clothes} />
    </div>
  );
}

export default App;
