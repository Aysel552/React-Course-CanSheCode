
import { Component } from 'react';
import './App.css';

class Fox extends Component{

  state = {
    : null
  }
  async componentDidMount() {
    const url = 'https://randomfox.ca/floof/';
    const response = await fetch(url);
    const data = await response.json();
    this.setState({url: data.url})
  }
  render() {
    return (
      <div>
        <img src={this.state.url} alt='Fox' width='400px'/>
      </div>
    )
  }
}

export default Fox;
