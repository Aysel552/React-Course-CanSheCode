import { useState } from "react";
import { data } from "./data";

function App() {
  const [painting, setPainting] = useState(data);
  return (
    <div>
      {painting.map((element => {
        const { id, paintingName } = element;
        return (
          <div key={id}>
            <p>{id} - {paintingName}</p>
          </div>
        )
      }))}
     <button onClick={() => setPainting([])}>Delete All</button>
    </div>
  );
}

export default App;
