import { useState } from 'react';
import { data } from './data';
import './App.css';
import Dogs from './Dogs';

function App() {
  const [dogs,setDogs] = useState(data)
  return (
    <div>
      <Dogs anyDog={dogs}/>
    </div>
  );
}

export default App;
