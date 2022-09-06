
import { Component } from 'react';
import './App.css';

class Dog extends Component{

  state = {
    image: null
  }
async componentDidMount() {
  const url = 'https://random.dog/woof.json';
  const response = await fetch(url);
  const data = await response.json();
  console.log(data.url);
  this.setState({image: data.url})
  }
  render() {
    return (
      <div>
        <img src={this.state.image} alt='Dog' width='400px'/>
      </div>
    )
  }
}

export default Dog;
