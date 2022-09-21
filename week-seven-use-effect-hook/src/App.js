import {useEffect, useState } from 'react';
import './App.css';

function App() {
  const [points, setPoints] = useState(1);
  const [title, setTitle] = useState("ABC");

  useEffect(() => {
    console.log("Effect!!")
  }, [title])
  return (
    <div className="App">
      <p>{points}</p>
      <p>{title}</p>
      <button onClick={() => setPoints(points + 1)}>Get More Points</button>
      <button onClick={() => setTitle("DEF")}>New Title</button>
    </div>
  );
}

export default App;
