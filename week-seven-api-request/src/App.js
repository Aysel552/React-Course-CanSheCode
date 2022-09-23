
import { useEffect, useState } from 'react';
import './App.css';

function App() {

  // 1st Option using useEffect hook
  // const [advice,setAdvice] = useState("");
  // useEffect(() => {
  //   getAdvice()
  // }, [])

  // const getAdvice = async () => {
  //   const response = await fetch("https://api.adviceslip.com/advice ");
  //   const data = await response.json();
  //   console.log(data.slip.advice);
  //   setAdvice(data.slip.advice)
  // }

  // 1st option ends



  // 2nd option of using useEffect

  const [advice, setAdvice] = useState("");
  
  useEffect(() => {
    const getAdvice = async () => {
      const response = await fetch("https://api.adviceslip.com/advice ");
      const data = await response.json();
      console.log(data.slip.advice);
      setAdvice(data.slip.advice);
    }
    getAdvice()
  }, [])
  return (
    <div className="App">
      <p>{advice}</p>
    </div>
  );
}

export default App;
