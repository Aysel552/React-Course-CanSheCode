import image from './puppy.jpg'
import './App.css';
import Facts from './Facts';

function App() {
  const buttonSelected = () => {
    alert("The puppy has already been selected!")
  }
  return (

    <div>
    <div className="container">
      <img src={image} alt="puppy" width="200px"/>
      </div>
      <div className='container'>
        <Facts/>
      </div>
      <div className='container'>
        <button onClick={buttonSelected}>SELECT</button>
      </div>
      </div>
  );
}

export default App;
