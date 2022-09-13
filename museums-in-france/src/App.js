import { useState } from 'react';
import { data } from './data';
import './App.css';

function App() {
  const [museums, setMuseums] = useState(data);
  const [showMore, setShowMore] = useState(false);
  const removeMuseums = (id) => {
    let newMuseums = museums.filter(museum => museum.id !== id);
    setMuseums(newMuseums)
  }
  return (
    <div>
      <div className='container'>
        <h1>Top {museums.length} museums of France.</h1>
      </div>

      {museums.map((museum => {
        const { id, name, image, description } = museum;
        
        return (
          <div key={id}>
            {/* Adding a heading */}
            <div className='container'>
              <h2>{id} - {name}</h2>
            </div>
            {/* Adding image */}
            <div className='container'>
              <img src={image} alt='Museums' width='300px'/>
            </div>

            {/* Adding description */}
            <div className='container'>
              <p>{showMore ? description : description.substring(0, 210) + '....'}
                <button className='showMoreButton' onClick={() => setShowMore(!showMore)}>{showMore ? 'Show Less' : 'Show More'}</button>
              </p>
            </div>
            {/* Adding remove button */}
            <div className='container'>
            <button className='btn' onClick={() => removeMuseums(id)}>Remove</button>
            </div>
            </div>
        )
      }))}

      {/* Adding delete all button */}
  <div className='container'>
        <button className='btn' onClick={() => setMuseums([])}>Delete All</button>
        </div>
      
    </div>
  );
}

export default App;
