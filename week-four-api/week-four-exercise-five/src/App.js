
import { Component } from 'react';
import './App.css';

class Fox extends Component{

  state = {
    image: null
  }
  async componentDidMount() {
    const url = 'https://randomfox.ca/floof/';
    const response = await fetch(url);
    const data = await response.json();
    this.setState({image: data.image})
  }
  render() {
    return (
      <div>
        <img src={this.state.image}  alt='Fox'/>
      </div>
    )
  }
}

export default Fox;
