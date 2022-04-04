import { Component } from "react";


export class Users extends Component{
    constructor() {
        super()


        this.state = {
            user: "Jack",
            age: 30
        }
    }

    changeUserName() {
        this.setState({user: "Leopold", age: "40"})
    }


    render() {
        return (
            <div>
                <h1>Hello {this.state.user}</h1>
                <h2>You are {this.state.age} years old</h2>
                <button onClick={() => this.changeUserName()}>Click</button>
            </div>
        )
    }







}


