import { useState } from "react";
import { data } from "./data";


function App() {
  const [painter, setPainter] = useState(data);
  return (
    <div>
      {painter.map((element => {
        const { id, painterName } = element;
    return <div key={id}>
          <p>{id} - {painterName}</p>
       </div>
      }))}

      <button onClick={() => setPainter([])}>Delete All</button>
      
    </div>
  );
}

export default App;
