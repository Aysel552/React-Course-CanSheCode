import { useState } from "react";
import { data } from "./data";
import './App.css'
import FirstName from "./FirstName";


function App() {
  const [firstName, setFirstName] = useState(data);
  return (
    <div>
      <FirstName anyWordYouWant = {firstName}/>
      </div>
  )
}


export default App;
