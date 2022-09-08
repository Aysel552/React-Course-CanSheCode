
import './App.css';
import { useState } from 'react';

function App() {
  const [name, setName] = useState('Aysel');
  const [age, setAge] = useState(30);
  
  const updateData = () => {
    setName('Dadash')
      setAge(3)
  }

  
  return (
    <div>
      <h1>Hello {name}</h1>
      <p>I am {age} years old</p>
      <button onClick={(updateData)}>Click</button>
    </div>
    
  );
}

export default App;
