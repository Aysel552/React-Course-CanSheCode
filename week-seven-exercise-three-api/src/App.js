
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [quote,setQuote] = useState("");
  // 1st option:
  // useEffect (() => {
  //   getQuotes();
  // },[])

  // const getQuotes = async () =>{
  //   const response = await fetch("https://api.quotable.io/random");
  //   const data = await response.json();
  //   console.log(data.content)
  //   setQuote(data.content);
  // }
  // 1st option ends

  // 2nd option: 

useEffect(() => {
  const getQuotes = async () => {
    const response = await fetch ("https://api.quotable.io/random")
    const data = await response.json();
    console.log(data)
    setQuote(data.content)
  }
  getQuotes();
},[])

  return (
    <div className="App">
      <p>{quote}</p>
    </div>
  );
}



export default App;
