import { useState } from "react";
import { data } from "./data";


function App() {
  const [movie, setMovie] = useState(data);
  return (
    <div>
      {movie.map((item => {
        const { id, movieName } = item;

        return (
          <div key={id}>
            <p>{id} - {movieName}</p>
          </div>
        )
      }))}

      <button onClick={() => setMovie([])}>Delete All</button>

      
    </div>
  )

}

export default App;
