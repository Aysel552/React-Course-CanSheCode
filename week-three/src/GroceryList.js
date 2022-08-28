import { Component } from 'react';
import check from './listBullet.png';


export class GroceryList extends Component {
    state = {
        userInput: "",
        groceryList: []
    }

    onChangeEvent(e) {
        this.setState({ userInput: e })
    }

    addItem(input) {
        if (input === '') {
            alert("Please add an item!")
        } else {
            
            let listArray = this.state.groceryList
            listArray.push(input)
            this.setState({ groceryList: listArray, userInput: "" })
        }
    }

    deleteItem() {
        let listArray = this.state.groceryList;
        listArray = []; // 1st option 
        // listArray.length = 0  2nd option


        this.setState({groceryList: listArray})
    }


        crossedWord(event) {
            const li = event.target;
            li.classList.toggle('crossed');
        }
    
    onFormSubmit(e) {
        e.preventDefault()
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onFormSubmit}>
            <div className='container'>
                <input type='text' placeholder='What do you want to buy today?'
                    onChange={(e) => {this.onChangeEvent(e.target.value)}}
                    value={this.state.userInput} />
            </div>
                <div className='container'>
                    <button onClick={() => this.addItem(this.state.userInput)} className='btn add' >ADD</button>
                </div>
                
                <ul>
                    {this.state.groceryList.map((item, index) => (
                        <li onClick={this.crossedWord} key={index}>
                            <img src={check} alt="Check" width="20px"/>
                            {item}</li>
                    ))}
                </ul>
                <div className='container'>
                    <button onClick={() => this.deleteItem()} className='btn delete'>Delete</button>
                    </div>
                    </form>
            </div>
            
        
        )
    }
}