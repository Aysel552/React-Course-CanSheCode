import axios from 'axios';
import './App.css';
import { Component } from 'react';

class App extends Component{

  state = {
    users: []
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(res => {
        const users = res.data;
        this.setState({users})
        console.log(users);
    })
  }
  render() {
    return (
      <div>
        {this.state.users.map(user => <p key={user.id}>{user.name} <span>{user.email}</span> <span>{user.address.city} <span>{user.address.street }</span></span></p>)}
      </div>
    )
  }
}

export default App;
