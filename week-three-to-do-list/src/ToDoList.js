import { Component } from "react";
import check from './to-do-list-icon.png'



export class ToDoList extends Component{
    state = {
        inputField: "",
        todoList: []
    }

    onChangeEvent(e) {
        this.setState({ inputField: e });
    }
// ADD Button
    addActivity(placeInput) {
        if (placeInput === '') {
            alert("The gap cannot be empty!")
        }

        else {
            let listArray = this.state.todoList;
            listArray.push(placeInput);
            this.setState({ todoList: listArray, inputField: '' })
        }
    }
    // Crossed Activity

    crossedActivity(event) {
        const li = event.target;
        li.classList.toggle('crossed');
    }

    // Delete Activity

    deleteActivity() {
        let listArray = this.state.todoList;
        listArray = [];
        this.setState ({todoList: listArray})
    }

    // Submit form

    onFormSubmit(e) {
        e.preventDefault();
    }

    render() {
        return (
            
            <div>
                <form onSubmit={this.onFormSubmit}>
            <div className="container">
                <input type='text'
                    placeholder='What will you do today?'
                    onChange={(e) => {this.onChangeEvent(e.target.value)}}
                    value={this.state.inputField} />
                </div>
                <div className="container">
                    <button onClick={() => this.addActivity(this.state.inputField)} className='btn add'>ADD</button>
                </div>
                
                <ul>
                    {this.state.todoList.map((item, index) => (
                        <li onClick= {this.crossedActivity} key={index}>
                            <img src={check} alt='checkActivity' width='20px'/>
                            {item}</li>
                    ))}
                    {/* if there is an error each child should have a unique key prop.
                    {this.state.todoList.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}*/}
                </ul>
                <div className="container">
                    <button onClick={() => this.deleteActivity()} className='btn delete'>DELETE</button>
                    </div>
                    </form>
                </div>
        )
    }
}