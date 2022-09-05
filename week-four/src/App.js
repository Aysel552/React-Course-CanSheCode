import { Component } from 'react';
import './App.css';
// import Avocado from './Avocado';
import NewYork from './NewYork';
import Paris from './Paris';
// import Tomato from './Tomato';


class App extends Component{

  state = {
    show: true
  }

  render() {
    // const btnText = this.state.show ? 'TOMATO' : 'AVOCADO'
    const btnText = this.state.show ? 'NewYork' : 'Paris'
    return (
      <div>
        {/* <p>The fee is {this.state.show ? '$2.00' : '$10.00'}</p> */}
        {/* <p>{this.state.show ? <Avocado /> : <Tomato />}</p> */}
        <p>{this.state.show ? <Paris /> : <NewYork />}</p>
        {/* <button onClick={() => { this.setState({ show: !this.state.show }) }}>{btnText}</button> */}
        <button onClick={() => { this.setState({ show: !this.state.show }) }}>{btnText}</button>
      </div>
    )
  }
}

export default App;
