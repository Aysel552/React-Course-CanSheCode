import { useState } from 'react';
import { data } from './data';
import './App.css';

function App() {
  const [paintings, setPaintings] = useState(0);
  const [showMore, setShowMore] = useState(false); 
  const { id, image, name, artist, description, create} = data[paintings];
  

  const previousPainting = () => {
    setPaintings((painting => {
      painting--;
      if (painting < 0) {
        return data.length - 1;
      }
      return painting
    }))
  }

  const nextPainting = () => {
    setPaintings((painting => {
      painting++;
      if (painting > data.length - 1) {
        painting = 0
      }
      return painting
    }))

  }
  
  return (
    <div>
      <div className='container main'>
      <h1>Top 5 famous paintings of Van Gogh</h1>
      </div>

      <div className='container'>
        <h2>{id} - {name}</h2>
      </div>

      <div className='container'>
        <img src={image} alt='Paintings' width='370px' height='300px'/>
      </div>


      <div className='container'>
        <h3>{artist}</h3>
      </div>

      <div className='container'>
        <h3>{create}</h3>
      </div>
    
      <div className='container'>
        <p>{showMore ? description : description.substring(0, 220) + '.....'}
          <button className='showMoreButton' onClick={() => setShowMore(!showMore)}>{showMore ? 'Show Less' : 'Show More'}</button>
        </p>
      </div>

      <div className='container btn'>
        <button onClick ={previousPainting}>Previous</button>
        <button onClick={nextPainting}>Next</button>
      </div>
      
    </div>
  );
}

export default App;
