// made through class component

import { Component } from "react";

class App extends Component{
  state = {
    number: 100
  }

  updateNumber() {
    this.setState({number: this.state.number - 5})
  }

  render() {
    return (
      <div>
        <h1>{this.state.number}</h1>
        <button onClick={() => this.updateNumber()}>Click</button>
      </div>
    )
  }
}

export default App;







// made through functional component using hooks
// import { useState } from "react";

// function App() {
//   const [number, setNumber] = useState(100)
  
//   // 2nd option:

//   const updateNumber = () => {
//     setNumber(number- 5)
//   }

//   return (
//     <div>
//       <h1>{number}</h1>
//       {/* 1st option */}
//       {/* <button onClick={() => setNumber(number - 5)}>Click</button> */}
//     {/* 2nd option: */}
//       <button onClick={(updateNumber)}>Click</button>
//     </div>
//   );
// }

// export default App;
