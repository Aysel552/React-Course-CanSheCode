//Functional component with hooks:
import { useState } from "react";

function App() {
  const [name, setName] = useState('Aysel');

  // 1st option to show setName
  const updateData = () => {
    setName('Dadash')
  }

  return (
    <div>
      <p>Hello {name}</p>
      <button onClick={(updateData)}>Click</button>

      {/* 2nd option to demonstrate setName */}
      {/* <button onClick={() => setName('Dadash')}>Click</button> */}
    </div>
  )
}


export default App;









// Class Component
// import { Component } from 'react';
// import './App.css';

// class App extends Component{
//   state = {
//     name: 'Aysel'
//   }

//   updateName() {
//     this.setState({name: 'Dadash'})
//   }

//   render() {
//     return (
//       <div>
//         <p>Hello {this.state.name}</p>
//         <button onClick={() => this.updateName()}>Click</button>
//         </div>
//     )
//   }
// }

// export default App;
