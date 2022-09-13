import { useState } from 'react';
import { data } from './data';
import './App.css';
import Birds from './Birds';

function App() {
  const [images, setImages] = useState(data);
  return (
    <div>
      <Birds info={images} />
    </div>
  );
}

export default App;
