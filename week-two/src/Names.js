
import { Component } from 'react';

export class Names extends Component{
    constructor() {
        super()
        
        this.state = {
            names: "Leopold",
            age: 30
        }
    }

    changeNames() {
        this.setState ({names: "Maria", age: 40})
    }
    
    render() {
        return (
            <div>
                <h1>Hello {this.state.names}</h1>
                <p>I am {this.state.age} years old </p>
                <button onClick={() => this.changeNames()}>Click</button>
            </div>
        )
    }
}