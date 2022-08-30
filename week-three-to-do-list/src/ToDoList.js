import { Component } from "react";



export class ToDoList extends Component{
    state = {
        inputField: "",
        todoList: []
    }

    onChangeEvent(e) {
        this.setState({ inputField: e });
        console.log(e)
    }

    render() {
        return (
            <div>
                <input type='text'
                    placeholder='What will you do today?'
                    onChange={(e) => {this.onChangeEvent(e.target.value)}}
                    value={this.state.inputField} />
            </div>
        )
    }
}